import type { Test as TestType } from "../../types/types";
import "./test.css";
import { testFeedback } from "../../data/data";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router";
import { useResults } from "../../providers/results/use-results";

export const Test = () => {
  const { currentResult, results } = useResults();
  const resultData = results.find(
    (result) => result.id === currentResult
  ) as TestType;

  const feedback = testFeedback[resultData.category];
  const [showMore, setShowMore] = useState<boolean>(true);

  return (
    <div className="testContainer">
      <h1>Test Results</h1>
      <p>
        Hi Jane, great job on doing another a sit stand test. Your result are
        in.
      </p>
      <div className="score">
        <h1>Repetitions</h1>
        <h1>{resultData.score}</h1>
      </div>
      <div className="categories">
        <div className="categoryRow">
          <p>Above Average:</p>
          <p>Men: &gt;14, Women: &gt;20</p>
        </div>
        <div className="categoryRow categoryMiddleRow ">
          <p>Average:</p>
          <p>Men: 10-14, Women: 12-19</p>
        </div>
        <div className="categoryRow">
          <p>Below Average:</p>
          <p>Men &lt;10, Women &lt;8</p>
        </div>
      </div>

      <p>How does this compare</p>
      <p>{feedback.compare}</p>
      <p>New actionable tips</p>
      <ul>
        <li>{feedback.tips[0]}</li>
        {feedback.tips.length > 1 &&
          showMore &&
          feedback.tips.slice(1).map((tip, i) => <li key={i}>{tip}</li>)}
      </ul>
      <div className="viewMore" onClick={() => setShowMore((prev) => !prev)}>
        <p>View more</p>
        <ChevronDown className={showMore ? "flipped" : ""} />
      </div>
      <Link to={"/input"} className="newTestBtn">
        <p>Start New Test</p>
      </Link>
    </div>
  );
};

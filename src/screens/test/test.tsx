import type { Test as TestType } from "../../types/types";
import "./test.css";
import { testFeedback } from "../../data/data";
import { useState } from "react";
import { ChevronDown, ChevronLeft } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useResults } from "../../providers/results/use-results";

export const Test = () => {
  const {
    currentResult,
    results,
    activeTest,
    setActiveTest,
    setResults,
    name,
  } = useResults();

  // Determine if the test being viewed is an active test or an archived test
  // i.e. if the activeTest is not undefined, it is an active test being viewed and not an archived one
  const resultData = activeTest
    ? activeTest
    : (results.find((result) => result.id === currentResult) as TestType);

  const feedback = testFeedback[resultData.category];
  const [showMore, setShowMore] = useState<boolean>(false);

  const navigate = useNavigate();

  const submitResult = () => {
    setResults([...results, activeTest as TestType]);
    setActiveTest(undefined);
    navigate("/");
  };

  const tryAgain = () => {
    setActiveTest(undefined);
    navigate("/input");
  };

  return (
    <div className="testContainer">
      <div className="testBody">
        {activeTest ? (
          <>
            <h1>Test Results</h1>
            <p>
              Hi {name}, great job on doing another a sit stand test. Your
              result are in.
            </p>
          </>
        ) : (
          <>
            <div className="testHeader">
              <button onClick={() => navigate("/")}>
                <ChevronLeft size={32} color="white" />
              </button>
              <h1>
                Sit Stant Test{" "}
                {resultData.id > 9 ? resultData.id : "0" + resultData.id}
              </h1>
            </div>
            <p>
              Test Date{" "}
              {resultData.date.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          </>
        )}

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

        <p className="subheading">How does this compare</p>
        <p>{feedback.compare}</p>
        <p className="subheading">New actionable tips</p>
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
        {activeTest ? (
          <>
            <button className="tryAgainBtn" onClick={tryAgain}>
              Try Again
            </button>
            <button className="newTestBtn" onClick={submitResult}>
              Submit Result
            </button>
          </>
        ) : (
          <Link to={"/input"} className="newTestBtn">
            <p>Start New Test</p>
          </Link>
        )}
      </div>
    </div>
  );
};

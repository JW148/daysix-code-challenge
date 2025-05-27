import type { Test as TestType } from "../../types/types";
import "./test.css";

const testData: TestType = {
  id: 1,
  date: new Date("2025-04-26"),
  score: 21,
  category: "belowAverage",
};

export const Test = () => {
  return (
    <div className="testContainer">
      <h1>Test Results</h1>
      <p>
        Hi Jane, great job on doing another a sit stand test. Your result are
        in.
      </p>
      <div className="score">
        <h1>Repetitions</h1>
        <h1>{testData.score}</h1>
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
    </div>
  );
};

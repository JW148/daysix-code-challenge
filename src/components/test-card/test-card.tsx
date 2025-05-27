import "./test-card.css";
import type { Category, Test } from "../../types/types";
import { ChevronRight } from "lucide-react";
import { dateDiff } from "../../utils/dateDiff";
import { Link } from "react-router";

const getCategory = (category: Category) => {
  switch (category) {
    case "aboveAverage":
      return "Above average";
    case "average":
      return "Average";
    case "belowAverage":
      return "Below Average";
    case "uncategorised":
      return "Uncategorised";
  }
};

/**
 * Component that is used to show test results
 */
export function TestCard({ test }: { test: Test }) {
  return (
    <div className="cardContainer">
      <div className="cardItem">
        {test.id < 10 ? (
          <p className="testId">Test 0{test.id}</p>
        ) : (
          <p className="testId">Test {test.id}</p>
        )}
        <p className="testDate">{dateDiff(test.date)}</p>
      </div>
      <div className="cardItem">
        <p className="testScore">Score: {test.score}</p>
        <p className={test.category}>{getCategory(test.category)}</p>
      </div>
      <div className="cardItem endItem">
        <Link to={`/test/${test.id}`}>
          <ChevronRight size={36} />
        </Link>
      </div>
    </div>
  );
}

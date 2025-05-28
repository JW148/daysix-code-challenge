import "./test-card.css";
import type { Category, Test } from "../../types/types";
import { ChevronRight } from "lucide-react";
import { dateDiff } from "../../utils/dateDiff";
import { useResults } from "../../providers/results/use-results";
import { useNavigate } from "react-router";

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
  const { setCurrentResult } = useResults();
  const navigate = useNavigate();

  const handleTestClick = () => {
    setCurrentResult(test.id);
    navigate("/test");
  };

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
      <button className="cardItem endItem" onClick={handleTestClick}>
        <ChevronRight size={36} />
      </button>
    </div>
  );
}

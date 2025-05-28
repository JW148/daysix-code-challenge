import "./list.css";
import { TestCard } from "../../components/test-card/test-card";
import { Plus } from "lucide-react";
import { useResults } from "../../providers/results/use-results";
import { useNavigate } from "react-router";

export const List = () => {
  const { results } = useResults();
  const navigate = useNavigate();

  return (
    <div className="listContainer">
      <div className="listHeader container">
        <h1 className="inputHeader">Sit & Stand Tests</h1>
        <button className="addTest" onClick={() => navigate("/input")}>
          <Plus color="white" />
        </button>
      </div>
      <div className="cardTestContainer container ">
        {results
          .slice(0)
          .reverse()
          .map((test) => (
            <TestCard test={test} key={test.id} />
          ))}
      </div>
    </div>
  );
};

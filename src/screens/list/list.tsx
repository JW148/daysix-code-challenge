import "./list.css";
import { TestCard } from "../../components/test-card/test-card";
import { Plus } from "lucide-react";
import { useResults } from "../../providers/results/use-results";

export const List = () => {
  const { results } = useResults();

  return (
    <div className="listContainer">
      <div className="listHeader container">
        <h1 className="inputHeader">Sit & Stand Tests</h1>
        <div className="addTest">
          <Plus color="white" />
        </div>
      </div>
      <div className="cardTestContainer container ">
        {results.map((test) => (
          <TestCard test={test} key={test.id} />
        ))}
      </div>
    </div>
  );
};

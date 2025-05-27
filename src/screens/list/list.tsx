import "./list.css";
import { TestCard } from "../../components/test-card/test-card";
import type { Test } from "../../types/types";
import { Plus } from "lucide-react";

const data: Test[] = [
  {
    id: 1,
    date: new Date("2025-04-26"),
    score: 21,
    category: "belowAverage",
  },
  {
    id: 1,
    date: new Date("2025-04-26"),
    score: 21,
    category: "aboveAverage",
  },

  {
    id: 1,
    date: new Date("2025-04-26"),
    score: 21,
    category: "average",
  },

  {
    id: 1,
    date: new Date("2025-04-26"),
    score: 21,
    category: "aboveAverage",
  },
  {
    id: 10,
    date: new Date("2025-04-26"),
    score: 21,
    category: "uncategorised",
  },
  {
    id: 1,
    date: new Date("2025-04-26"),
    score: 21,
    category: "belowAverage",
  },
  {
    id: 1,
    date: new Date("2025-04-26"),
    score: 21,
    category: "aboveAverage",
  },

  {
    id: 1,
    date: new Date("2025-04-26"),
    score: 21,
    category: "average",
  },

  {
    id: 1,
    date: new Date("2025-04-26"),
    score: 21,
    category: "aboveAverage",
  },
  {
    id: 10,
    date: new Date("2025-04-26"),
    score: 21,
    category: "uncategorised",
  },
];

export const List = () => {
  return (
    <div className="listContainer">
      <div className="listHeader container">
        <h1>Sit & Stand Tests</h1>
        <div className="addTest">
          <Plus color="white" />
        </div>
      </div>
      <div className="cardTestContainer container ">
        {data.map((test) => (
          <TestCard test={test} key={test.id} />
        ))}
      </div>
    </div>
  );
};

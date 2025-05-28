import { createContext } from "react";
import type { Test, Gender } from "../../types/types";

export const resultsData: Test[] = [
  {
    id: 5,
    date: new Date(),
    score: 5,
    category: "belowAverage",
  },
  {
    id: 4,
    date: new Date("2025-05-25"),
    score: 9,
    category: "belowAverage",
  },
  {
    id: 3,
    date: new Date("2025-05-19"),
    score: 10,
    category: "average",
  },
  {
    id: 2,
    date: new Date("2025-05-25"),
    score: 14,
    category: "average",
  },
  {
    id: 1,
    date: new Date("2025-04-25"),
    score: 16,
    category: "aboveAverage",
  },
];

export const ResultContext = createContext<{
  results: Test[];
  setResults: (result: Test[]) => void;
  currentResult: number | undefined;
  setCurrentResult: (id: number) => void;
  name: string;
  setName: (name: string) => void;
  gender: Gender;
  setGender: (gender: Gender) => void;
}>({
  results: resultsData,
  setResults: () => {},
  currentResult: undefined,
  setCurrentResult: () => {},
  name: "Joe",
  setName: () => {},
  gender: "male",
  setGender: () => {},
});

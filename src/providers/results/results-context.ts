import { createContext } from "react";
import type { Test, Gender } from "../../types/types";

export const resultsData: Test[] = [
  {
    id: 1,
    date: new Date("2025-04-25"),
    score: 16,
    category: "aboveAverage",
  },
  {
    id: 2,
    date: new Date("2025-05-25"),
    score: 14,
    category: "average",
  },
  {
    id: 3,
    date: new Date("2025-05-19"),
    score: 10,
    category: "average",
  },
  {
    id: 4,
    date: new Date("2025-05-27"),
    score: 9,
    category: "belowAverage",
  },
  {
    id: 5,
    date: new Date(),
    score: 5,
    category: "belowAverage",
  },
];

export const ResultContext = createContext<{
  results: Test[];
  setResults: (result: Test[]) => void;
  currentResult: number | undefined;
  setCurrentResult: (id: number) => void;
  activeTest: Test | undefined;
  setActiveTest: (test: Test | undefined) => void;
  name: string;
  setName: (name: string) => void;
  gender: Gender;
  setGender: (gender: Gender) => void;
}>({
  results: resultsData,
  setResults: () => {},
  currentResult: undefined,
  setCurrentResult: () => {},
  activeTest: undefined,
  setActiveTest: () => {},
  name: "Joe",
  setName: () => {},
  gender: "male",
  setGender: () => {},
});

import { useState, type ReactNode } from "react";
import { ResultContext, resultsData } from "./results-context";
import type { Test, Gender } from "../../types/types";

export const ResultsProvider = ({ children }: { children: ReactNode }) => {
  const [results, setResults] = useState<Test[]>(resultsData);

  // state responsible for viewing selected result
  const [currentResult, setCurrentResult] = useState<number | undefined>(
    undefined
  );

  // state responsible for handling active test result
  const [activeTest, setActiveTest] = useState<Test | undefined>(undefined);

  const [name, setName] = useState<string>("Joe");
  const [gender, setGender] = useState<Gender>("male");

  return (
    <ResultContext.Provider
      value={{
        results,
        setResults,
        currentResult,
        setCurrentResult,
        activeTest,
        setActiveTest,
        name,
        setName,
        gender,
        setGender,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

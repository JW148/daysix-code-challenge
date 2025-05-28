import { useState, type ReactNode } from "react";
import { ResultContext, resultsData } from "./results-context";
import type { Test, Gender } from "../../types/types";

export const ResultsProvider = ({ children }: { children: ReactNode }) => {
  const [results, setResults] = useState<Test[]>(resultsData);
  const [currentResult, setCurrentResult] = useState<number | undefined>();
  const [name, setName] = useState<string>("Joe");
  const [gender, setGender] = useState<Gender>("male");

  return (
    <ResultContext.Provider
      value={{
        results,
        setResults,
        currentResult,
        setCurrentResult,
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

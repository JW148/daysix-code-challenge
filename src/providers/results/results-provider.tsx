import { useEffect, useState, type ReactNode } from "react";
import { ResultContext } from "./results-context";
import type { Test, Gender } from "../../types/types";
import { categoriseTest } from "../../utils/categoriseTest";

export const ResultsProvider = ({ children }: { children: ReactNode }) => {
  const [results, setResults] = useState<Test[] | undefined>(() => {
    //initialise results with local storage results
    const localResults = localStorage.getItem("results");
    if (localResults) {
      const parsed = JSON.parse(localResults);
      if (Array.isArray(parsed)) {
        const formatted = parsed.map((result) => {
          return {
            id: parseInt(result.id),
            date: new Date(result.date),
            score: parseInt(result.score),
            category: result.category,
          };
        });
        return formatted;
      }
    }
    // return predefined data if none in storage
    return undefined;
  });

  // state responsible for viewing selected result. Initialised to the latest test
  const [currentResult, setCurrentResult] = useState<number | undefined>(
    results ? results.length : undefined
  );

  // state responsible for handling active test result
  const [activeTest, setActiveTest] = useState<Test | undefined>(undefined);

  const [name, setName] = useState<string>("Joe");
  const [gender, setGender] = useState<Gender>("male");

  //save results to local storage on change
  useEffect(() => {
    if (results) localStorage.setItem("results", JSON.stringify(results));
  }, [results]);

  // re-categorise results on gender change
  useEffect(() => {
    if (results) {
      const recategorisedResults = results.map((result) => {
        return {
          ...result,
          category: categoriseTest(result.score, gender),
        };
      });
      setResults(recategorisedResults);
    }
  }, [gender]);

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

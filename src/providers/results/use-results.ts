import { useContext } from "react";
import { ResultContext } from "./results-context";

export const useResults = () => useContext(ResultContext);

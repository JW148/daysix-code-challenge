import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { List } from "./screens/list/list";
import { Input } from "./screens/input/input";
import { Test } from "./screens/test/test";
import { categoriseTest } from "./utils/categoriseTest";
import { testFeedback } from "./data/data";

function App() {
  const feedback = testFeedback[categoriseTest(21, "female")];
  console.log(feedback);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/input" element={<Input />} />
        <Route path="/test/:testId" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import "./input.css";
import gif from "../../assets/sit_stand.gif";
import { Pencil } from "lucide-react";

export const Input = () => {
  return (
    <div className="inputContainer">
      <div className="inputBody">
        <h1>Sit & Stand Test</h1>
        <div className="gifContainer">
          <img src={gif} alt="Sit stand gif" className="gif" />
          <h1 className="timer">00:00</h1>
        </div>
        <div className="footerContainer">
          <div className="repsCounter">
            <h1 className="repsText">Reps Counter</h1>
            <h1>10</h1>
            <Pencil color="white" />
          </div>
          <div className="endTestBtn">
            <p>End Test</p>
          </div>
        </div>
      </div>
    </div>
  );
};

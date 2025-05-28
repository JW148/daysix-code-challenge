import "./input.css";
import gif from "../../assets/sit_stand.gif";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { EditRepsModal } from "../../components/edit-reps-modal/edit-reps-modal";

export const Input = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  const [count, setCount] = useState<number>(0);
  //separated input val from count val so that the input field can be cleared completely
  const [inputVal, setInputVal] = useState<string>("");

  const handleUpdate = () => {
    const numValue = inputVal === "" ? 0 : parseInt(inputVal) || 0;
    setCount(numValue);
    setIsModalOpen(false);
  };

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
            <h1>{count}</h1>
            <button onClick={() => setIsModalOpen(true)}>
              <Pencil color="white" />
            </button>
          </div>
          <button className="endTestBtn">
            <p>End Test</p>
          </button>
        </div>
      </div>
      <EditRepsModal
        onClose={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
        title="Edit Reps"
      >
        <div className="form-group">
          <label className="form-label">Count</label>
          <input
            type="number"
            className="form-input"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
        </div>
        <button className="update-btn" onClick={handleUpdate}>
          Update
        </button>
      </EditRepsModal>
    </div>
  );
};

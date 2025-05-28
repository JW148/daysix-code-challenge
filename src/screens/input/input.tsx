import "./input.css";
import gif from "../../assets/sit_stand.gif";
import { Pencil } from "lucide-react";
import { useState, type FormEvent } from "react";
import { EditRepsModal } from "../../components/edit-reps-modal/edit-reps-modal";
import { useResults } from "../../providers/results/use-results";
import { categoriseTest } from "../../utils/categoriseTest";
import { useNavigate } from "react-router";

export const Input = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  //separated input val from count val so that the input field can be cleared completely
  const [inputVal, setInputVal] = useState<string>("");

  const { setActiveTest, results, gender } = useResults();

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formVal = formData.get("count");

    const numValue = formVal === "" ? 0 : parseInt(formVal as string) || 0;
    setCount(numValue);
    setIsModalOpen(false);
  };

  const handleEndTest = () => {
    setActiveTest({
      id: results.length + 1,
      date: new Date(),
      score: count,
      category: categoriseTest(count, gender),
    });
    navigate("/test");
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
          <button className="endTestBtn" onClick={handleEndTest}>
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
          <form onSubmit={handleSubmit}>
            <input
              id="count"
              name="count"
              type="number"
              className="form-input"
              min={0}
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
            <button className="update-btn" type="submit">
              Update
            </button>
          </form>
        </div>
      </EditRepsModal>
    </div>
  );
};

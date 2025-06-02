import "./list.css";
import { TestCard } from "../../components/test-card/test-card";
import { Plus, Settings } from "lucide-react";
import { useResults } from "../../providers/results/use-results";
import { useNavigate } from "react-router";
import { useState, type FormEvent } from "react";
import { Modal } from "../../components/modal/modal";
import type { Gender } from "../../types/types";

export const List = () => {
  const { results, name, setName, gender, setGender } = useResults();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState<boolean>(false);

  // settings form state
  const [formName, setFormName] = useState<string>(name);
  const [formGender, setFormGender] = useState<Gender>(gender);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formN = formData.get("name");
    const formG = formData.get("gender");

    if (typeof formN === "string") setName(formN);
    if (formG === "male" || formG === "female") setGender(formG);

    setShowModal(false);
  };

  return (
    <div className="listContainer">
      <div className="listHeader container">
        <h1 className="inputHeader">Sit & Stand Tests</h1>
        <button className="addTest" onClick={() => navigate("/input")}>
          <Plus color="white" />
        </button>
      </div>
      <div className="cardTestContainer container ">
        {results ? (
          results
            .slice(0)
            .reverse()
            .map((test) => <TestCard test={test} key={test.id} />)
        ) : (
          <p className="noResults">No recorded results</p>
        )}
      </div>
      <div className="settings">
        <button onClick={() => setShowModal(true)}>
          <Settings color="gray" size={32} />
        </button>
      </div>

      <Modal
        title="Settings"
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      >
        <form className="form-group" onSubmit={handleSubmit}>
          <label className="form-label">Name</label>
          <input
            id="name"
            className="form-input"
            name="name"
            type="text"
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
            minLength={2}
            maxLength={30}
            required
          />
          <label className="form-label">Gender</label>
          <select
            id="gender"
            name="gender"
            className="form-input"
            value={formGender}
            onChange={(e) => setFormGender(e.target.value as Gender)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <button className="update-btn" type="submit">
            Save
          </button>
        </form>
      </Modal>
    </div>
  );
};

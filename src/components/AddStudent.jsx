import React, { useState } from "react";

const AddStudent = ({ addStudent }) => {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = () => {
    if (!name || !score) return;
    addStudent(name, score);
    setName("");
    setScore("");
  };

  return (
    <div className="form add-student-form">
      <input
        className="add-student-input"
        type="text"
        placeholder="Student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="add-student-input"
        type="number"
        placeholder="Score (0-100)"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />
      <button className="add-student-button" onClick={handleSubmit}>
        + ADD
      </button>
    </div>
  );
};

export default AddStudent;
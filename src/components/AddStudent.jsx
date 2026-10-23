import React, { useState } from "react";

const AddStudent = ({ addStudent, students }) => {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const cleanName = name.trim();
    const numericScore = Number(score);
    if (!cleanName) return setError("Add a name so we know who to cheer for! 💛");
    if (students.some((student) => student.name.toLowerCase() === cleanName.toLowerCase())) return setError("That learner is already on your class list. ✨");
    if (score === "" || numericScore < 0 || numericScore > 100) return setError("Scores need to be between 0 and 100.");
    addStudent(cleanName, numericScore);
    setName("");
    setScore("");
    setError("");
  };

  return (
    <form className="add-student-form" onSubmit={handleSubmit}>
      <div className="form-intro"><span className="form-icon">✨</span><div><h2>Add a bright mind</h2><p>Every new learner brings something special.</p></div></div>
      <div className="form-fields">
        <label className="field-wrap"><span className="field-icon">☺</span><span className="sr-only">Student name</span><input className="add-student-input" type="text" placeholder="Student’s name" value={name} maxLength={48} onChange={(event) => { setName(event.target.value); setError(""); }} /></label>
        <label className="field-wrap score-field"><span className="field-icon">✎</span><span className="sr-only">Score out of 100</span><input className="add-student-input" type="number" placeholder="Score (0–100)" min="0" max="100" value={score} onChange={(event) => { setScore(event.target.value); setError(""); }} /></label>
        <button className="add-student-button" type="submit">Add student <span>✦</span></button>
      </div>
      {error && <p className="form-error" role="alert">{error}</p>}
    </form>
  );
};

export default AddStudent;

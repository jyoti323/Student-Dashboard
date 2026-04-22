import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import AddStudent from "./components/AddStudent";
import Stats from "./components/Stats";
import StudentTable from "./components/StudentTable";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score: Number(score),
    };
    setStudents([...students, newStudent]);
  };

  const updateScore = (id, newScore) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, score: Number(newScore) } : s
      )
    );
  };

  return (
    <div className="container">
      <Header />
      <AddStudent addStudent={addStudent} />
      <Stats students={students} />
      <StudentTable students={students} updateScore={updateScore} />
    </div>
  );
}

export default App;
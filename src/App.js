import React, { useMemo, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import AddStudent from "./components/AddStudent";
import Stats from "./components/Stats";
import StudentTable from "./components/StudentTable";

const starterStudents = [
  { id: 1, name: "Mia Chen", score: 96 },
  { id: 2, name: "Noah Williams", score: 88 },
  { id: 3, name: "Sofia Patel", score: 74 },
  { id: 4, name: "Ethan Brooks", score: 38 },
];

function App() {
  const [students, setStudents] = useState(starterStudents);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [notice, setNotice] = useState("");

  const filteredStudents = useMemo(() => {
    const matching = students.filter((student) =>
      student.name.toLowerCase().includes(query.trim().toLowerCase())
    );
    return [...matching].sort((a, b) =>
      sortBy === "score" ? b.score - a.score : a.name.localeCompare(b.name)
    );
  }, [students, query, sortBy]);

  const addStudent = (name, score) => {
    setStudents((current) => [{ id: Date.now(), name, score: Number(score) }, ...current]);
    setNotice(`${name} joined the class! 🎉`);
    window.setTimeout(() => setNotice(""), 2800);
  };

  const updateScore = (id, newScore) => {
    setStudents((current) => current.map((student) =>
      student.id === id ? { ...student, score: Number(newScore) } : student
    ));
  };

  const removeStudent = (id) => {
    setStudents((current) => current.filter((student) => student.id !== id));
  };

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="container">
        <Navbar />
        <main>
          <Header studentCount={students.length} />
          <Stats students={students} />
          <AddStudent addStudent={addStudent} students={students} />
          <section className="records-section" id="records">
            <div className="section-heading">
              <div>
                <p className="eyebrow">YOUR CLASSROOM</p>
                <h2>Student records <span className="heading-sparkle">✳</span></h2>
                <p className="section-caption">A little progress every day adds up. Keep going! 🌱</p>
              </div>
              <div className="table-tools">
                <label className="search-box">
                  <span aria-hidden="true">⌕</span>
                  <input aria-label="Search students" placeholder="Find a student..." value={query} onChange={(event) => setQuery(event.target.value)} />
                  {query && <button className="clear-search" onClick={() => setQuery("")} aria-label="Clear search">×</button>}
                </label>
                <label className="sort-control">
                  <span className="sr-only">Sort students</span>
                  <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
                    <option value="name">A–Z</option>
                    <option value="score">Top scores</option>
                  </select>
                </label>
              </div>
            </div>
            <StudentTable students={filteredStudents} updateScore={updateScore} removeStudent={removeStudent} isSearching={Boolean(query)} />
          </section>
        </main>
        <footer className="footer-note">Made for bright minds and big dreams <span>✦</span></footer>
      </div>
      {notice && <div className="toast" role="status">{notice}</div>}
    </div>
  );
}

export default App;

import React from "react";

const StudentTable = ({ students, updateScore, removeStudent, isSearching }) => {
  if (!students.length) {
    return <div className="empty-state"><span className="empty-emoji">{isSearching ? "🔎" : "🪴"}</span><h3>{isSearching ? "No classmates found just yet" : "Your classroom is ready to bloom!"}</h3><p>{isSearching ? "Try another name and we’ll find them for you." : "Add a student above and watch this space come to life."}</p></div>;
  }

  return (
    <div className="table-card">
      <div className="student-list">
        {students.map((student, index) => {
          const passed = student.score >= 40;
          const initials = student.name.split(/\s+/).map((part) => part[0]).slice(0, 2).join("").toUpperCase();
          return (
            <article className="student-row" key={student.id} style={{ animationDelay: `${index * 55}ms` }}>
              <div className={`student-avatar avatar-${index % 5}`} aria-hidden="true">{initials}</div>
              <div className="student-identity"><strong>{student.name}</strong><span>Learner · Class member</span></div>
              <div className="score-column"><span className="row-label">SCORE</span><div className="score-track" aria-label={`Score ${student.score} out of 100`}><div className="score-fill" style={{ width: `${student.score}%` }} /></div></div>
              <label className="score-input-wrap"><span className="row-label">POINTS</span><span className="score-number"><input aria-label={`Update ${student.name} score`} type="number" min="0" max="100" value={student.score} onChange={(event) => { const value = event.target.value; if (value !== "" && Number(value) >= 0 && Number(value) <= 100) updateScore(student.id, value); }} onBlur={(event) => { if (event.target.value === "") updateScore(student.id, 0); }} /> <span>/ 100</span></span></label>
              <span className={`status-pill ${passed ? "passed" : "needs-love"}`}>{passed ? "✦ On track" : "♡ Keep growing"}</span>
              <button className="remove-student" type="button" aria-label={`Remove ${student.name}`} title={`Remove ${student.name}`} onClick={() => removeStudent(student.id)}>×</button>
            </article>
          );
        })}
      </div>
      <div className="table-footer"><span><span className="footer-dot" /> Looking good, class!</span><span>Showing {students.length} {students.length === 1 ? "learner" : "learners"} <span className="footer-sparkle">✦</span></span></div>
    </div>
  );
};

export default StudentTable;

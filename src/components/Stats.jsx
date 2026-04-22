import React from "react";

const Stats = ({ students }) => {
  const total = students.length;
  const passed = students.filter((s) => s.score >= 40).length;
  const avg =
    total === 0
      ? 0
      : Math.round(
          students.reduce((sum, s) => sum + s.score, 0) / total
        );

  return (
    <div className="cards">
      <div className="card">
        <h3>TOTAL</h3>
        <p>{total}</p>
      </div>
      <div className="card">
        <h3>PASSED</h3>
        <p>{passed}</p>
      </div>
      <div className="card">
        <h3>AVG SCORE</h3>
        <p>{avg}</p>
      </div>
    </div>
  );
};

export default Stats;
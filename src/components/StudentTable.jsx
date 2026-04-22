import React from "react";

const StudentTable = ({ students, updateScore }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Score</th>
          <th>Status</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s) => (
          <tr key={s.id}>
            <td>{s.name}</td>
            <td>{s.score}</td>
            <td className={s.score >= 40 ? "pass" : "fail"}>
              {s.score >= 40 ? "Passed" : "Failed"}
            </td>
            <td>
              <input
                type="number"
                defaultValue={s.score}
                onBlur={(e) => updateScore(s.id, e.target.value)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
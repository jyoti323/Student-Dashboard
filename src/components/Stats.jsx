import React from "react";

const Stats = ({ students }) => {
  const total = students.length;
  const passed = students.filter((student) => student.score >= 40).length;
  const average = total ? Math.round(students.reduce((sum, student) => sum + student.score, 0) / total) : 0;
  const rate = total ? Math.round((passed / total) * 100) : 0;
  const stats = [
    { icon: "🧑‍🎓", label: "Happy learners", value: total, detail: "All together!", theme: "peach" },
    { icon: "🌟", label: "Making it shine", value: passed, detail: `${rate}% passing rate`, theme: "lavender" },
    { icon: "🚀", label: "Class average", value: `${average}%`, detail: "Look at you go!", theme: "mint" },
  ];

  return (
    <section className="stats-grid" aria-label="Class statistics">
      {stats.map((stat, index) => (
        <article className={`stat-card ${stat.theme}`} key={stat.label} style={{ animationDelay: `${index * 90}ms` }}>
          <div className="stat-card-top"><span className="stat-icon" role="img" aria-label="">{stat.icon}</span><span className="stat-dots" aria-hidden="true">···</span></div>
          <p className="stat-label">{stat.label}</p>
          <div className="stat-value-row"><strong className="stat-value">{stat.value}</strong><span className="stat-detail">{stat.detail}</span></div>
          <div className="stat-decoration" aria-hidden="true">✳</div>
        </article>
      ))}
    </section>
  );
};

export default Stats;

import React from "react";

const Main = ({ subject }) => {
  return (
    <main>
      <div className="container" key={subject.id}>
        <h2>{subject.title}</h2>
        <h3>Objectives</h3>
        {subject.objectives.map((objective, index) => {
          return (
            <ul key={index}>
              <li>{objective}</li>
            </ul>
          );
        })}
        <h3>Coursework</h3>
        {subject.coursework.map((work, index) => {
          return (
            <ul key={index}>
              <li>{work}</li>
            </ul>
          );
        })}
      </div>
    </main>
  );
};

export default Main;

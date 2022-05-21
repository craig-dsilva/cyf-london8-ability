import React from "react";

const Header = ({ data, moduleHandler }) => {
  return (
    <header>
      <h1>Title</h1>
      <div className="header-container">
        {data.map((module) => {
          return (
            <div
              className="module"
              key={module.id}
              onClick={() => moduleHandler(module.id)}
            >
              <h3>{module.title}</h3>
            </div>
          );
        })}
      </div>
    </header>
  );
};

export default Header;

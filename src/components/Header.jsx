import React from "react";

const Header = ({ data, moduleHandler }) => {
  return (
    <header className="header">
      <h1>CYF London 8 ability</h1>
      <div className="header-container">
        {data.map((module) => {
          return (
            <div
              className="module"
              key={module.id}
              onClick={() => moduleHandler(module.id - 1)}
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

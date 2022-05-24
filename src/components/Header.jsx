import React from "react";

const Header = ({ data, moduleHandler }) => {
  return (
    <header className="header">
      <h1>CYF London 8 ability</h1>
      <div className="header-container">
        {data.map((module) => {
          return (
            <button
              className="module-button"
              key={module.id}
              onClick={() => moduleHandler(module.id)}
            >
              {module.title}
            </button>
          );
        })}
      </div>
    </header>
  );
};

export default Header;

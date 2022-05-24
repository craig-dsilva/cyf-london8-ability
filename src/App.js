import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  const [data, setdata] = useState([]);
  const [subjectId, setSubjectId] = useState();

  useEffect(() => {
    fetch(`http://localhost:3001/api`)
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);

  const selectModule = (id) => {
    setSubjectId(id);
  };

  return (
    <div className=" app">
      <Header data={data} moduleHandler={selectModule} />
      <Main subject={data[subjectId]} />
      <Footer />
    </div>
  );
};

export default App;

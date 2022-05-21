import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import initaildata from "./data.json";

import "./App.css";

const App = () => {
  const [data, setdata] = useState(initaildata);
  const [subjectId, setSubjectId] = useState();

  const selectModule = (id) => {
    setSubjectId(id);
  };

  return (
    <>
      <Header data={data} moduleHandler={selectModule} />
      <Main subject={data[subjectId]} />
      <Footer />
    </>
  );
};

export default App;

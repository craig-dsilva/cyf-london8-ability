import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import initaildata from "./data.json";

import "./App.css";

const App = () => {
  const [data, setdata] = useState(initaildata);

  return (
    <>
      <Header data={data} />
      <Main subject={data[0]} />
      <Footer />
    </>
  );
};

export default App;

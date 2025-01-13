/** @format */

import Navbar from "./Pages/Navbar";
import Event from "./Pages/Event";
import Footer1 from "./Pages/Footer";
import React from "react";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Speakers from "./Pages/Speakers";

const App = () => {
  return (
    <>
      <Home />
      <Navbar />
      <About  />
      <Speakers />
      <Event  />
      <Footer1 />
    </>
  );
};

export default App;

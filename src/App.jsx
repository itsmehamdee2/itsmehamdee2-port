import React from "react";
import Navbar from "./components/Navbar";
import BG from "./components/BG";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className=" ">
      <Navbar />
      <BG />
      <About />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;

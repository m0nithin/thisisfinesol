import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/layouts/home-3/hero";
import About from "../components/layouts/about";
import How from "../components/layouts/howToBuy";
import Tokenomics from "../components/layouts/tokenomics";
import Roadmap from "../components/layouts/roadmap";
import Contact from "../components/layouts/contact";

const Home03 = () => {
  useEffect(() => {
    document.body.style.overflow = "auto";
  });

  return (
    <div className="home-3" style={{ position: "relative" }}>
      
      <Hero />
      <div className="fireSeperator"></div>
      <About />
      <div className="fireSeperator"></div>
      <How />
      <div className="fireSeperator"></div>
      <Tokenomics />
      <div className="fireSeperator"></div>
      <Roadmap />
      <div className="fireSeperator"></div>
      <Contact />
    </div>
  );
};

export default Home03;

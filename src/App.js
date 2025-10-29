import React from "react";
import Navbar from "./components/Navbar";
import LandingSection from "./components/LandingSection";
import About from "./components/About";
import Features from "./components/Features";
import "./App.css";

function App() {
  return React.createElement(
    "div",
    { className: "App" },
    [
      React.createElement(Navbar, { key: "navbar" }),
      React.createElement(LandingSection, { key: "landing" }),
      React.createElement(About, { key: "about" }),
      React.createElement(Features, { key: "features" })
    ]
  );
}

export default App;

import React from "react";

function About() {
  return React.createElement(
    "section",
    { id: "about", className: "about" },
    [
      React.createElement("h2", { key: "heading" }, "About Quantum Prep"),
      React.createElement(
        "p",
        { key: "content" },
        "Quantum Prep is your AI-powered preparation companion designed to personalize your learning journey using data-driven insights."
      )
    ]
  );
}

export default About;

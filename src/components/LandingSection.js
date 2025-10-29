import React from "react";

function LandingSection() {
  return React.createElement(
    "section",
    { id: "home", className: "hero" },
    [
      React.createElement("h1", { key: "title" }, "Welcome to Quantum Prep"),
      React.createElement("p", { key: "subtitle" }, "Your AI-powered preparation companion"),
      React.createElement("button", { className: "btn", key: "button" }, "Get Started")
    ]
  );
}

export default LandingSection;

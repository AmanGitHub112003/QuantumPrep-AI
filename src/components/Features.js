import React from "react";

function Features() {
  const features = [
    {
      icon: "📘",
      title: "Personalized Learning",
      desc: "Tailored study plans to meet your individual needs."
    },
    {
      icon: "🤖",
      title: "AI Recommendations",
      desc: "Data-driven suggestions to enhance your preparation."
    },
    {
      icon: "📈",
      title: "Progress Tracking",
      desc: "Monitor your advancement and stay on track."
    }
  ];

  return React.createElement(
    "section",
    { id: "features", className: "features" },
    [
      React.createElement("h2", { key: "heading" }, "Features"),
      React.createElement(
        "div",
        { className: "feature-grid", key: "grid" },
        features.map((f, index) =>
          React.createElement(
            "div",
            { className: "feature-card", key: index },
            [
              React.createElement("div", { className: "icon", key: "icon" }, f.icon),
              React.createElement("h3", { key: "title" }, f.title),
              React.createElement("p", { key: "desc" }, f.desc)
            ]
          )
        )
      )
    ]
  );
}

export default Features;

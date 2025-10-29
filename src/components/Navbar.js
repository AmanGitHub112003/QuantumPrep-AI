import React from "react";

function Navbar() {
  return React.createElement(
    "nav",
    { className: "navbar" },
    [
      React.createElement("div", { className: "logo", key: "logo" }, "Quantum Prep AI"),
      React.createElement(
        "ul",
        { className: "nav-links", key: "links" },
        [
          React.createElement("li", { key: "home" }, React.createElement("a", { href: "#home" }, "Home")),
          React.createElement("li", { key: "about" }, React.createElement("a", { href: "#about" }, "About")),
          React.createElement("li", { key: "features" }, React.createElement("a", { href: "#features" }, "Features"))
        ]
      )
    ]
  );
}

export default Navbar;

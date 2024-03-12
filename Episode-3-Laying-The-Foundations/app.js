import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Creates JavaScript Object => After Render HTML
const Heading = React.createElement("h1", { id: "parent" }, "Namaste React 🚀");

// JSX => Javascript XML => Not HTML => HTML Like Syntax
const JsxHeading = <h1 id="parent">Namaste React Using JSX 🚀</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(JsxHeading);

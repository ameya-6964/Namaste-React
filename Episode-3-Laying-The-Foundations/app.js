import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Creates JavaScript Object => HTMLElement(render)
const Heading = React.createElement("h1", { id: "parent" }, "Namaste React 🚀");

// JSX => Javascript XML => Not HTML => HTML Like Syntax
// JSX => Gets Transpiled To Normal React Syntax With Help Of babel transpiler

// JSX => React.createElement => Creates JavaScript Object => HTMLElement(render)
const JsxHeading = <h1 id="parent">Namaste React Using JSX 🚀</h1>;

//Above Code Will gets transpiled To Pure React
{
  /* 
  const JsxHeading = ("h1",
  {id: "parent"},
  "Namaste React Using JSX 🚀"
  );
  */
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(JsxHeading);

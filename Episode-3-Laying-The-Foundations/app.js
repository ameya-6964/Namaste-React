import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Creates JavaScript Object => HTMLElement(render)
const Heading = React.createElement(
  "h1",
  { id: "parent" },
  "Namaste From React Create Element 🚀"
);

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

const HeadingComponent = () => {
  function getTime() {
    return new Date().toUTCString();
  }
  const [time, setTime] = useState(getTime());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getTime());
    }, 1000);
    return () => clearInterval(intervalId); // Cleanup function to clear the interval
  }, []); // Empty dependency array to ensure the effect runs only once
  return (
    <div id="parent" tabIndex="3">
      <h1>Namaste React From Functional Component</h1>
      {Heading}
      {JsxHeading}
      <h1>{time}</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

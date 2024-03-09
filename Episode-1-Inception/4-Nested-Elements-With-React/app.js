/* 
 *TASK :- Create This Type Of Structure
  <div id="parent">
      <div class="child">
        <h1>Hello Nested h1 Tag</h1>
        <h2>Hello Nested h2 Tag</h2>
      </div>
  </div>
*/

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { className: "child" }, [
    React.createElement("h1", {}, "Hello Nested h1 Tag"),
    React.createElement("h2", {}, "Hello Nested h2 Tag"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

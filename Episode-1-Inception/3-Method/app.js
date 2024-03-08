const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React"
);
// - Creates an <h1> element
// - No additional attributes (empty object {})
// - The text content is set to "Hello World From React"

// Get a reference to the root element:
const root = ReactDOM.createRoot(document.getElementById("root"));
// - Selects the HTML element with the id "root"
// - Prepares this element to be managed by React

// Render the React element into the root element:
root.render(heading);
// - Displays the "Hello World From React" heading within the "root" element

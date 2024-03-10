# Coding Assignment Of Episode 1 Namaste React

---

## Question 1 : Build your first Hello World program using

- Plain HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Assignment | Episode 1 | Inception</title>
  </head>
  <body>
    <h1>Hello World From HTML</h1>
  </body>
</html>

```

- Using JS to manipulate the DOM

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Namaste React</title>
  </head>
  <body>
    <div id="root"></div>
    <script>
      // Create a new heading element (<h1>)
      const heading = document.createElement("h1");

      // Set the text content of the heading
      heading.innerText = "Hello World From JavaScript";

      // Get a reference to the "root" element in the HTML document
      const root = document.getElementById("root");

      // Append the heading element as a child of the "root" element
      root.appendChild(heading);
    </script>
  </body>
</html>
```

- Using React CDN

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello World Using React CDN</title>
  </head>
  <body>
    <div id="root"></div>
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <script>
      // Create a React element:
      const heading = React.createElement("h1", {}, "Hello World From React");
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
    </script>
  </body>
</html>
```

- Create Nested Elements With React

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React | External | Nested Elements</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div id="root"></div>
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <script src="./app.js"></script>
  </body>
</html>
```

```jsx
TASK :- Create This Type Of Structure
/* 
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

```
# Chapter 01 - Inception

_Link to my Code_ https://github.com/ameya-6964/Namaste-React/tree/main/Episode-1-Inception

## Theory

- **What is Emmet?**
- **Difference between a Library and Framework?**
- **What is CDN? Why do we use it?**
- **Why is React known as React?**
- **What is crossorigin in script tag?**
- **What is the difference between React and ReactDOM**
- **What is the difference between react.development.js and react.production.js files via CDN?**
- **What is async and defer?**

## Coding

- **Set up all the tools in your laptop**
  - VS Code
  - Chrome
  - Extensions of Chrome (list any specific recommendations)
- **Create a new Git repo**
- **Build your first Hello World program using:**

  - **Using just HTML**

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>Hello World!</title>
    </head>
    <body>
      <h1>Hello World!</h1>
    </body>
  </html>
  ```

  - **Using JS to manipulate the DOM**

  ```javascript
  document.body.innerHTML = "<h1>Hello World!</h1>";
  ```

  - **Using React**
    - **Use CDN Links**
    ```html
    <script
      src="https://unpkg.com/react@18/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
      crossorigin
    ></script>
    ```
    - **Create an Element**
    ```javascript
    const element = React.createElement("h1", null, "Hello World!");
    ```
    - **Create nested React Elements**
    ```javascript
    const element = React.createElement(
      "div",
      null,
      React.createElement("h1", null, "Hello World!"),
      React.createElement("p", null, "Welcome to React")
    );
    ```
    - **Use root.render**
    ```javascript
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(element);
    ```

- **Push code to Github (Theory as well as code)**
- **Learn about Arrow Functions before the next class**

## References

- React Reference: createElement: [https://beta.reactjs.org/apis/react/createElement](https://beta.reactjs.org/apis/react/createElement)

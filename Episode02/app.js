// Creating a React element using React.createElement()
// The first argument is the HTML tag, the second is the attributes, and the third is the children

// Nested Structure - A single child inside a parent div
const nestedStructure = React.createElement(
  "div", // Parent element
  { id: "parent" }, // Attributes
  React.createElement(
    "div", // Child div inside parent
    { id: "child" },
    React.createElement("h1", {}, "I'm an h1 tag") // h1 inside the child div
  )
);

// Sibling Structure - Using an array to have multiple children
const siblingStructure = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ])
);

// More complex structure with two child divs, each containing h1 and h2
const parent = React.createElement(
  "div",
  { id: "parent" }, // Main parent div
  [
    // First child div
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "I'm child1 h1 tag"),
      React.createElement("h2", {}, "I'm child1 h2 tag"),
    ]),

    // Second child div
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I'm child2 h1 tag"),
      React.createElement("h2", {}, "I'm child2 h2 tag"),
    ]),
  ]
);

// Logging the React element to understand the Virtual DOM representation
console.log(parent);

/* 
   React.createElement() creates a Virtual DOM representation, 
   which React later renders efficiently to the actual DOM.
  */

// Selecting the root element in the HTML file
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the created React element inside the root container
root.render(parent);

/* 
   - ReactDOM.createRoot() is used instead of ReactDOM.render() in React 18.
   - This method enables concurrent rendering features.
   - `root.render(parent)` takes the virtual DOM (React element) and renders it into the actual DOM efficiently.
  */

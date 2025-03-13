import React from "react";
import ReactDOM from "react-dom/client";
// const nestedStructure = React.createElement(
//   "div", 
//   { id: "parent" }, 
//   React.createElement(
//     "div", 
//     { id: "child" },
//     React.createElement("h1", {}, "I'm an h1 tag") 
//   )
// );


// const siblingStructure = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'm an h1 tag"),
//     React.createElement("h2", {}, "I'm an h2 tag"),
//   ])
// );


const parent = React.createElement(
  "div",
  { id: "parent" }, 
  [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "This is namaste React js"),
      React.createElement("h2", {}, "I'm child1 h2 tag"),
    ]),

    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I'm child2 h1 tag"),
      React.createElement("h2", {}, "I'm child2 h2 tag"),
    ]),
  ]
);


console.log(parent);




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);



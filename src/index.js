import React from "react";
import ReactDOM from "react-dom";

// The render function will only render 1 html object at a time, so
// In order to show multiple HTML items a div tag can be used to surround them
ReactDOM.render(
  // (<what to show>, <where to show it>)
  <div>
    <h1>Hello World!</h1>
    <p>This is a paragraph</p>
  </div>,
  document.getElementById("root")
);

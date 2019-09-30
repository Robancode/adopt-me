import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Cattie", animal: "cat", breed: "rogue" }),
    React.createElement(Pet, { name: "Judy", animal: "cat", breed: "beauty" }),
    React.createElement(Pet, {
      name: "nelly",
      animal: "cat",
      breed: "tortoiseshell"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));

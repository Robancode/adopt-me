import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="sometihng-important">Adopt Me!</h1>
      <Pet name="catty" animal="cat" breed="cute" />
      <Pet name="nelly" animal="cat" breed="tortoiseshell" />
      <Pet name="judy" animal="cat" breed="mix" />
    </div>
  );
};

render(<App />, document.getElementById("root"));

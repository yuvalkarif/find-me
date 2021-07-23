import React from "react";
import { Template } from "./App.styles";
import GameBoard from "./Components/GameBoard";

function App() {
  return (
    <Template className="App">
      <p>HEADER</p>
      <GameBoard></GameBoard>
      <p>FOOTER</p>
    </Template>
  );
}

export default App;

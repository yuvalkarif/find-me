import React from "react";
import { useState, useEffect } from "react";
import { Template } from "./App.styles";
import GameBoard from "./Components/GameBoard";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  const [isCorrect, setIsCorrect] = useState({
    pointer1: false,
    pointer2: false,
  });
  const [check, setCheck] = useState(false);
  useEffect(() => {
    console.log(check);
    console.log(isCorrect);
  }, [check]);
  return (
    <Template className="App">
      <Header isCorrect={isCorrect}>YO</Header>
      <GameBoard
        setIsCorrect={setIsCorrect}
        check={check}
        setCheck={setCheck}
      ></GameBoard>
      <Footer setCheck={setCheck} isCorrect={isCorrect}></Footer>
    </Template>
  );
}

export default App;

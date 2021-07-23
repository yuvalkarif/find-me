import React from "react";
import { useState } from "react";
import Background from "./Background";
import { Wrapper } from "./GameBoard.styles";
const initialPos = {
  x: 0,
  y: 0,
};
const GameBoard = () => {
  const [pos, setPos] = useState(initialPos);
  function showCoords(e) {
    const rect = e.target.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }
  return (
    <Wrapper
      onClick={(e) => {
        showCoords(e);
      }}
    >
      {`${pos.x} + ${pos.y}`}
      <Background></Background>
    </Wrapper>
  );
};

export default GameBoard;

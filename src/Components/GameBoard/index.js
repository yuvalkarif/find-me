//React
import React from "react";
import { useState, useEffect } from "react";
import PointerList from "../PointerList";
//Components
import Background from "./../Background/index";
import Pointer from "../Pointer";
import { Wrapper } from "./GameBoard.styles";
import { checkPointers, initialPos, initialPointers } from "../../scripts";
import { db } from "./../../firebase";
let correctPointers;
db.collection("correctPointers")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      correctPointers = doc.data();
    });
  });

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

const GameBoard = ({ setIsCorrect, setCheck, check }) => {
  const [pos, setPos] = useState(initialPos);
  const [pointers, setPointers] = useState(initialPointers);
  function showCoords(e) {
    const rect = e.target.getBoundingClientRect();
    pos.showMenu
      ? setPos((prevPos) => ({ ...prevPos, showMenu: false }))
      : setPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          showMenu: true,
        });
  }
  useEffect(() => {
    if (check) {
      setIsCorrect((prevState) => ({
        pointer1: checkPointers(correctPointers.pointer1, pointers.pointer1),
        pointer2: checkPointers(correctPointers.pointer2, pointers.pointer2),
      }));
    }
    setCheck(false);
  }, [check]);

  return (
    <Wrapper
      onContextMenu={(e) => {
        showCoords(e);
      }}
    >
      {pos.showMenu && (
        <PointerList
          setPos={setPos}
          pos={pos}
          setPointers={setPointers}
          pointers={pointers}
        />
      )}

      {pointers.pointer1.showPointer && (
        <Pointer pointer={pointers.pointer1}></Pointer>
      )}
      {pointers.pointer2.showPointer && (
        <Pointer pointer={pointers.pointer2}></Pointer>
      )}
      <Background />
    </Wrapper>
  );
};

export default GameBoard;

import React from "react";
import { useState } from "react";

import { Content, StyledUl } from "./PointerList.styles";

const initialPointerToShow = {
  pointer1: false,
  pointer2: false,
};
const PointerList = ({ pos, setPointers, pointers, setPos }) => {
  const [pointerToShow] = useState(initialPointerToShow);

  return (
    <StyledUl
      xPos={pos.x + `px`}
      yPos={pos.y + `px`}
      onClick={() =>
        setPos((prevPos) => {
          return { ...prevPos, showMenu: false };
        })
      }
    >
      <Content>
        <li
          onClick={() => {
            if (!pointerToShow.pointer1)
              setPointers((prevState) => ({
                ...prevState,
                pointer1: {
                  x: pos.x,
                  y: pos.y,
                  showPointer: true,
                  name: "Pink Teddy",
                },
              }));
          }}
        >
          {pointers.pointer1.name}
        </li>
        <li
          onClick={() => {
            if (!pointerToShow.pointer2)
              setPointers((prevState) => ({
                ...prevState,
                pointer2: {
                  x: pos.x,
                  y: pos.y,
                  showPointer: true,
                  name: "Wine Bottle",
                },
              }));
          }}
        >
          {pointers.pointer2.name}
        </li>
      </Content>
    </StyledUl>
  );
};

export default PointerList;

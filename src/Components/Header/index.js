import React from "react";
import { Wrapper } from "./Header.styles";
import HeaderBG from "./../photos/header-bg.png";
import Timer from "../Timer";

const Header = ({ isCorrect }) => {
  return (
    <Wrapper img={HeaderBG}>
      <h1>Find Me Maple</h1>
      <h2>Right Click to set the Pointers</h2>
      <h3>and than submit to see if you are correct</h3>
      <Timer isCorrect={isCorrect}></Timer>
    </Wrapper>
  );
};

export default Header;

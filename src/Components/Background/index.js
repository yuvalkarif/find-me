import React from "react";
import BGImg from "./../photos/background.png";
import { Wrapper } from "./Background.styles";
const Background = () => {
  return (
    <Wrapper>
      <img src={BGImg} alt="bg"></img>
    </Wrapper>
  );
};

export default Background;

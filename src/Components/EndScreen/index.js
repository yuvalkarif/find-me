import React from "react";
import {
  Wrapper,
  BlackScreen,
  Content,
  EnterName,
  SubmitName,
} from "./EndScreen.styles";
import { time } from "../Timer";
const EndScreen = () => {
  return (
    <Wrapper>
      <Content>
        {" "}
        <div>You have indeed</div>
        <div>Found My Maple</div>
        <div>{time}</div>
        <EnterName></EnterName>
        <SubmitName>SUBMIT YOUR SCORE !</SubmitName>
      </Content>

      <BlackScreen></BlackScreen>
    </Wrapper>
  );
};

export default EndScreen;

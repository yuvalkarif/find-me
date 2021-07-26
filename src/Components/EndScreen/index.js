import React, { useState } from "react";
import SubmitScreen from "../SubmitScreen";
import Leaderboard from "../Leaderboard";
import {
  Wrapper,
  BlackScreen,
  Content,
  EnterName,
  SubmitName,
} from "./EndScreen.styles";

const EndScreen = () => {
  return (
    <Wrapper>
      <Content>
        {/* <SubmitScreen /> */}
        <Leaderboard />
      </Content>

      <BlackScreen></BlackScreen>
    </Wrapper>
  );
};

export default EndScreen;

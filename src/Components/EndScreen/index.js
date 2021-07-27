import React, { useState } from "react";
import SubmitScreen from "../SubmitScreen";
import Leaderboard from "../Leaderboard";
import { Wrapper, BlackScreen, Content } from "./EndScreen.styles";

const EndScreen = () => {
  const [isSubmited, setIsSubmited] = useState(false);
  return (
    <Wrapper>
      <Content>
        {isSubmited ? (
          <Leaderboard />
        ) : (
          <SubmitScreen setIsSubmited={setIsSubmited} />
        )}
      </Content>

      <BlackScreen></BlackScreen>
    </Wrapper>
  );
};

export default EndScreen;

import React, { useState } from "react";
import { EnterName, SubmitName } from "./SubmitScreen.styles";
import { submitScore } from "../../firebase";
import { time } from "../Timer";
import { formatTime } from "../Timer/useTimer";

const SubmitScreen = ({ setIsSubmited }) => {
  const [nameState, setNameState] = useState("Unknown Player");
  const handleChange = (e) => {
    setNameState(e.target.value);
  };
  return (
    <div className={"submit-screen"}>
      {" "}
      <div>You have indeed</div>
      <div>Found My Maple</div>
      <div>{formatTime(time)}</div>
      <EnterName onChange={(e) => handleChange(e)}></EnterName>
      <SubmitName
        onClick={() => {
          submitScore(nameState, time);
          setIsSubmited(true);
        }}
      >
        SUBMIT YOUR SCORE !
      </SubmitName>
    </div>
  );
};

export default SubmitScreen;

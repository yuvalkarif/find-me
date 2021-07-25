import React from "react";
import {
  BottomText,
  Wrapper,
  Submit,
  FoundText,
  Bold,
  Correct,
  Incorrect,
} from "./Footer.styles";

const Footer = ({ setCheck, isCorrect }) => {
  return (
    <Wrapper>
      <Submit onClick={() => setCheck(true)}>SUBMIT</Submit>

      {isCorrect.pointer1 ? (
        <FoundText>
          <Correct />
          You have found the <Bold>Pink Teddy</Bold>.
        </FoundText>
      ) : (
        <FoundText>
          <Incorrect />
          You haven't found the <Bold>Pink Teddy</Bold>.
        </FoundText>
      )}

      {isCorrect.pointer2 ? (
        <FoundText>
          <Correct />
          You have found the <Bold>Wine Bottle</Bold>.
        </FoundText>
      ) : (
        <FoundText>
          <Incorrect />
          You haven't found <Bold>Wine Bottle</Bold>.
        </FoundText>
      )}

      <BottomText>THIS SITE WAS CREATED BY YUVAL KARIF 24-7-2021</BottomText>
    </Wrapper>
  );
};

export default Footer;

import React from "react";

import { Wrapper, Marker } from "./Pointer.styles";
// import { Content } from "./Pointer.styles";

const Pointer = ({ pointer }) => {
  return (
    <Wrapper xPos={pointer.x + `px`} yPos={pointer.y + `px`}>
      <Marker>{pointer.name}</Marker>
      {/* <Content>
        x:{Math.round(pointer.x)},y:{Math.round(pointer.y)}
      </Content> */}
    </Wrapper>
  );
};

export default Pointer;

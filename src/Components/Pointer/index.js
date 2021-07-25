import React from "react";

import { Content, Wrapper, Marker } from "./Pointer.styles";

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

import styled from "styled-components";

export const Template = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 14% 70% 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  text-align: center;
  align-items: center;
  overflow: hidden;
  height: 100vh;

  grid-template-areas:
    "a"
    "b"
    "c";
  a {
    grid-area: a;
  }
  b {
    grid-area: b;
    /* height: 1000px; */
  }
  c {
    grid-area: c;
  }
`;

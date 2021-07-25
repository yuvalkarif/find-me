import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  top: ${(props) => props.yPos};
  left: ${(props) => props.xPos};
`;

export const Content = styled.div`
  position: absolute;
  padding: 1rem;
  background-color: var(--msOrange);
  outline: 0.15rem solid var(--msBrown);
  box-shadow: 0rem 0.4rem var(--msBrown);
  text-shadow: 0rem 0.09rem var(--msRed);
  color: white;
`;

export const Marker = styled.div`
  position: absolute;
  padding: 0.1rem 0.35rem;
  background-color: var(--msRed);
  border-radius: 10rem;
  z-index: 2;
  transform: translate(-50%, -50%);
  color: white;
  border: 0.2rem solid var(--msCream);
  box-shadow: 0rem 0.15rem var(--msBrown);
`;

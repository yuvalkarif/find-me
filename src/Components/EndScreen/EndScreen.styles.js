import styled from "styled-components";

export const BlackScreen = styled.div`
  background: black;
  position: absolute;
  width: 100vw;
  height: 100vh;
  opacity: 80%;
  z-index: 3;
  top: 0;
  bottom: 0;
`;

export const Wrapper = styled.div`
  font-size: 2rem;
  color: white;
  text-align: center;
`;

export const Content = styled.div`
  position: absolute;
  font-size: 2rem;
  color: white;
  text-align: center;
  z-index: 6;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font: inherit;
  font-weight: 500;
  width: 350px;
  padding: 2rem 3rem;
  border-radius: 1rem;
  color: white;
  background-color: var(--msOrange);
  outline: 0.15rem solid var(--msBrown);
  box-shadow: 0rem 0.4rem var(--msBrown);
  text-shadow: 0rem 0.15rem var(--msRed);
`;

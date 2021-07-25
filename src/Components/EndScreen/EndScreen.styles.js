import styled from "styled-components";

export const BlackScreen = styled.div`
  background: black;
  position: absolute;
  width: 100vw;
  height: 100vh;
  opacity: 80%;
  z-index: 2;
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
  z-index: 5;
  top: 35%;
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

export const EnterName = styled.input`
  border-radius: 1rem;
  border: 1px solid var(--msBrown);
  box-shadow: 0rem 0.2rem var(--msBrown);
  padding: 0.25rem 0;
  text-align: center;

  font-family: inherit;
  font-weight: 500;
  font-size: 1.5rem;
  width: 70%;
  margin-top: 0.5rem;
`;

export const SubmitName = styled.button`
  position: relative;
  margin-top: 1rem;
  border-radius: 1rem;
  border: 1px solid var(--msBrown);
  box-shadow: 0rem 0.2rem var(--msBrown);
  padding: 0.3rem 1rem;
  text-align: center;
  background-color: white;
  color: var(--msCream);
  background-color: var(--msBlue);

  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  :hover {
    color: var(--msCream);
    background-color: var(--msRed);
  }
`;

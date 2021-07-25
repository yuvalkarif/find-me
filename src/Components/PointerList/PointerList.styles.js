import styled from "styled-components";

export const Content = styled.div`
  position: absolute;
`;

export const StyledUl = styled.ul`
  display: flex;
  position: relative;
  flex-direction: column;
  top: ${(props) => props.yPos};
  left: ${(props) => props.xPos};
  z-index: 1;
  padding: 0rem;
  background-color: wheat;
  max-width: fit-content;
  margin: 0;
  list-style: none;
  li {
    padding: 1rem;

    background-color: var(--msOrange);
    outline: 0.15rem solid var(--msBrown);
    box-shadow: 0rem 0.4rem var(--msBrown);
    text-shadow: 0rem 0.09rem var(--msRed);
    margin-bottom: 0.4rem;
    color: white;
    :hover {
      cursor: pointer;
    }
  }
`;

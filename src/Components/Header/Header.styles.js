import styled from "styled-components";

export const Wrapper = styled.div`
  h1,
  h2,
  h3 {
    height: 100%;

    width: fit-content;
    margin: 0 auto;
    margin-top: 1rem;
    padding: 0rem 5rem;
    border-radius: 1rem;
    color: white;
    background-color: var(--msOrange);
    outline: 0.15rem solid var(--msBrown);
    box-shadow: 0rem 0.4rem var(--msBrown);
    text-shadow: 0rem 0.09rem var(--msRed);
  }
  h1 {
  }
  h2 {
    font-size: 01rem;
  }
  h3 {
    font-size: 0.76rem;
    margin-bottom: 2rem;
  }
  background: url(${(props) => props.img});
  background-position: top left;
  background-attachment: scroll;
  background-blend-mode: overlay;
  background-size: 150%;
  border-radius: 0.4rem;
  box-shadow: 0rem 0.11rem rgba(248, 239, 224, 0.05);
  margin-bottom: 0.2rem;
  padding-top: 1rem;
`;

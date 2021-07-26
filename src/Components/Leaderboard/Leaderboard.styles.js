import styled from "styled-components";

export const Table = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 0.2rem 1rem;
  grid-template-areas:
    "."
    "."
    "."
    "."
    "."
    "."
    "."
    "."
    "."
    ".";
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 1rem;

  background-color: var(--msOrange);
  outline: 0.3rem solid var(--msCream);
  box-shadow: 0rem 0.2rem var(--msCream);
  font-size: 1.5rem;
`;

export const Name = styled.div`
  display: flex;
  width: fit-content;
`;
export const Number = styled.div`
  display: flex;
  height: fit-content;
  margin-right: 0.35rem;
`;

export const Refresh = styled.button`
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

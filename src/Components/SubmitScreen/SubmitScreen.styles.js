import styled from "styled-components";
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

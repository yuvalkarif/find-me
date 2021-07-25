import styled from "styled-components";

export const Wrapper = styled.div`
  color: white;
  margin: auto 0;
  height: 100%;
  padding: 0.7rem;
`;
export const Submit = styled.button`
  color: var(--msCream);
  background-color: var(--msBlue);
  outline: 0.15rem solid var(--msBrown);
  box-shadow: 0rem 0.4rem var(--msBrown);
  text-shadow: 0rem 0.095rem var(--msPurple);

  width: fit-content;
  margin: 0 auto;
  border: none;
  padding: 0.35rem 5rem;
  padding-top: 0.45rem;
  border-radius: 1rem;
  font-size: 1.25rem;
  font-family: inherit;
  font-weight: 700;
  cursor: pointer;
`;
export const BottomText = styled.div`
  font-size: 0.5rem;
  margin-top: 0.25rem;
`;

export const FoundText = styled.div`
  position: relative;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  font-family: inherit;
  font-weight: 500;
  display: flex;

  align-content: center;
  align-items: center;
  align-self: center;
  justify-content: center;
`;

export const Bold = styled.div`
  margin-left: 0.2rem;
  font-weight: 700;
`;

export const Correct = styled.div`
  :after {
    content: "✔";
    color: green;
    margin-right: 0.25rem;
  }
`;
export const Incorrect = styled.div`
  :after {
    content: "✕";
    color: red;
    margin-right: 0.25rem;
  }
`;

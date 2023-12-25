import styled from "styled-components";

export const StyledLogin = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;

  svg {
    width: 50px;
    height: 50px;
    color: var(--c-accent);
    transform: translateX(-9px);
  }

  span {
    font-weight: 700;
    color: var(--c-accent);
    font-size: 1.1rem;
  }
`;

export const Form = styled.form`
  max-width: 345px;
  width: 100%;
  border: 1px solid #eee;
  padding: 2.75em;
  border-radius: 15px;
  box-shadow: 0 3px 30px -3px rgba(0, 0, 0, 0.1);
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35em;
  margin-bottom: 1em;

  &:last-of-type {
    margin-bottom: 0;
  }

  label {
    font-size: 0.875rem;
    opacity: 0.75;
  }

  input {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -moz-appearance: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
    display: block;
    padding: 9px;
    font-size: 15px;
    outline: none;
    border: 1px solid #eee;
    border-radius: 7px;
    color: #777;
  }
`;

export const Submit = styled.button`
  display: block;
  width: 100%;
  padding: 14px;
  border: 0;
  font-weight: 700;
  font-size: 0.845rem;
  border-radius: 7px;
  margin-top: 2em;
  transition: 220ms ease-in-out;
  background: var(--c-accent);
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }
`;

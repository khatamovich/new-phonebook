import styled from "styled-components";

export const Title = styled.h1`
  margin-bottom: 1em;
  text-align: center;
  font-size: 1.125rem;
  text-transform: uppercase;
  color: var(--c-accent);
  font-weight: 900;
`;

export const Form = styled.div`
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1em;

  input,
  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -moz-appearance: none;
    background-color: transparent;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 0.35em;
    font-size: 0.875rem;
    font-weight: 700;
  }

  input {
    width: 100%;
    height: 100%;
    display: block;
    padding: 10px;
    font-size: 15px;
    border: none;
    outline: none;
    background-color: transparent;
    border-radius: 7px;
    border: 1px solid #eee;
    box-shadow: 0px 3px 20px -10px #ccc;
  }

  button {
    margin-top: 1.5em;
    display: block;
    border: none;
    outline: none;
    border: 1px solid #eee;
    border-radius: 7px;
    font-weight: 700;
    padding: 0.825em 0;
    background: var(--c-accent);
    color: white;
    font-size: inherit;
    box-shadow: 0px 2px 39px -7px rgba(0, 0, 0, 0.17);
  }
`;

export const Dropdown = styled.div`
  margin-top: 0.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.31em;
  overflow: hidden;
  margin-right: 10px;

  p {
    font-size: 0.875rem;
    margin-right: 1em;
    font-weight: 700;
    display: flex;
    align-items: center;
  }

  svg {
    color: var(--c-accent);
  }

  select {
    display: block;
    border: none;
    outline: none;
    font-size: 0.875rem;
    color: #777;
  }
`;

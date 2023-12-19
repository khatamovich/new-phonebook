import styled from "styled-components";

export const StyledSearch = styled.section``;

export const Form = styled.form`
  margin: 0 auto;
  margin-top: 1.125em;
  margin-bottom: 2em;
  max-width: 320px;

  input,
  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -moz-appearance: none;
    background-color: transparent;
  }
`;

export const Field = styled.div`
  border-radius: 11px;
  border: 2px solid var(--Beige, #d8c1aa);
  box-shadow: 0px 3px 20px -10px #d8c1aa;
  overflow: hidden;
  position: relative;

  input {
    width: 100%;
    height: 100%;
    display: block;
    padding: 10px;
    font-size: 15px;
    border: none;
    outline: none;
    padding-left: 3.4em;
    background-color: transparent;
  }
`;

export const Filter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 1em;
`;

export const Dropdown = styled.div`
  margin-top: 0.5em;
  display: flex;
  gap: 0.31em;
  overflow: hidden;
  margin-right: 10px;

  select {
    display: block;
    border: none;
    outline: none;
    font-size: 0.875rem;
  }
`;

export const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 26px;
  height: 26px;
  border-radius: 7px;
  background: rgba(216, 193, 170, 0.25);
  top: 50%;
  left: 0.75em;
  transform: translateY(-50%);

  svg {
    width: 13px;
    height: 13px;
    color: var(--c-accent);
  }
`;

export const Result = styled.div`
  padding: 0 3em;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  padding-bottom: 3.25em;
`;

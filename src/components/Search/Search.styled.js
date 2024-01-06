import styled from "styled-components";

export const StyledSearch = styled.section`
  .search-pagination {
    position: fixed;
    bottom: 1em;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    max-width: 375px;
    margin: 0 auto;
    list-style: none;
    gap: 1em;
    line-height: 1;
    background-color: #fff;
    border-radius: 7px;
    border: 1px solid #eee;
    z-index: 999;

    .disabled {
      opacity: 0.3;

      a {
        cursor: not-allowed;
      }
    }

    a {
      background: transparent;
      width: 25px;
      height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: 220ms ease-in-out;
      border-radius: 9px;
      -webkit-user-select: none;
      user-select: none;
      transform: translateZ(0);
      color: var(--c-accent);
      font-weight: 700;
      font-size: 15px;

      &:hover {
        opacity: 0.75;
        color: var(--c-accent);
      }
    }

    .active-page {
      a {
        color: var(--c-accent);
        border: 2.75px solid var(--c-accent);
      }
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  margin-top: 1.125em;
  max-width: 350px;
  position: sticky;
  top: 1em;
  z-index: 999;

  input {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -moz-appearance: none;
    background-color: #fff;
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

    &::placeholder {
      font-size: 0.875rem;
    }
  }
`;

export const Filter = styled.div`
  max-width: 350px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-top: 0.5em;
  margin-bottom: 2em;
  position: relative;
  padding: 0.2em;
  border-radius: 5px;

  .support {
    margin-left: 0.3em;
    font-size: 0.875rem;

    b {
      color: crimson;
      margin-left: 0.3em;
    }
  }
`;

export const Location = styled.div`
  display: flex;
  gap: 0.2em;
  align-items: center;
  font-size: 0.875rem;
  color: #777;
  cursor: pointer;
  transition: 300ms ease-in-out;
  margin-left: auto;
  user-select: none;

  svg {
    transform: translateZ(0);
    width: 16px;
    height: 16px;
    color: #000;
  }
`;

export const Dropdown = styled.ul`
  position: absolute;
  width: 100%;
  max-width: 200px;
  height: auto;
  z-index: 1;
  background-color: white;
  top: 195%;
  border-radius: 10px;
  box-shadow: 0px 2px 39px -7px rgba(0, 0, 0, 0.17);
  right: 0;
  padding: 0.5em;
  list-style: none;
  display: none;

  &.active {
    display: block;
  }

  li {
    font-size: 0.875rem;
    border-radius: 5px;
    transition: 125ms;
    padding: 0.3em 0.5em;
    cursor: pointer;

    &:hover {
      opacity: 0.75;
      background-color: #d8c1aa33;
    }
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
  padding: 0 2.1em;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  padding-bottom: 4.25em;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  user-select: none;
`;

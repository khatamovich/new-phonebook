import styled from "styled-components";

export const StyledCard = styled.div`
  border: 1px solid red;
  padding: 1.25em 2.065em;
  border-radius: 23px;
  border: 1px solid #eee;
  box-shadow: 0px 2px 39px -7px rgba(0, 0, 0, 0.17);
`;

export const Head = styled.div`
  position: relative;

  h2 {
    color: var(--c-accent);
    font-size: 1rem;
    line-height: 1.4;
    margin-bottom: 0.875em;
    text-transform: capitalize;
  }

  svg {
    position: absolute;
    top: 0;
    right: -0.75em;
    cursor: pointer;
    transition: 1s ease-in-out;
    color: #777;

    &:hover {
      color: var(--c-accent);
      transform: rotate(360deg);
    }
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.45em;
`;

export const Field = styled.div`
  display: flex;
  font-size: 0.875rem;
  line-height: 1.3;
`;

export const Key = styled.span`
  width: 25px;
  margin-right: 7em;
  white-space: nowrap;
`;

export const Value = styled.span`
  opacity: 0.5;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const Foot = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #eee;
  padding-top: 7px;
  margin-top: 0.75em;
`;

export const Phone = styled.div`
  margin-right: auto;
  display: flex;
  align-items: center;
  gap: 0.625em;
  font-size: 1.125em;

  svg {
    width: 24px;
    height: 24px;
    color: #84cc16;
  }
`;

export const Region = styled.div`
  font-size: 0.875rem;
  opacity: 0.75;
  white-space: nowrap;
`;

export const Email = styled.a`
  color: inherit;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1em;

  svg {
    width: 20px;
    height: 20px;
    color: var(--c-accent);
  }
`;

export const Controls = styled.div`
  margin-left: 24px;
  display: flex;
  align-items: center;
  gap: 0.5em;

  a {
    text-decoration: none;
    color: inherit;
  }

  svg {
    width: 26px;
    height: 26px;
  }

  button {
    border: none;
    outline: none;
    background-color: transparent;
    transition: 220ms ease-in-out;
    cursor: pointer;
    transform: translateZ(0);

    &:hover {
      opacity: 0.5;
    }

    &:nth-child(1) {
      color: var(--c-accent);
    }

    &:nth-child(2) {
      color: crimson;
    }
  }
`;

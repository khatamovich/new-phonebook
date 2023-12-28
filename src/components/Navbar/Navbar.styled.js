import styled from "styled-components";

export const StyledNavbar = styled.nav`
  padding: 2em 1.75em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 1em;

  svg {
    width: 24px;
    height: 24px;
    color: var(--c-accent);
    transform: translateZ(0);
  }
`;

export const Links = styled.ul`
  list-style: none;
  display: flex;
  gap: 1em;

  a {
    text-decoration: none;
    font-size: 0.875rem;
    letter-spacing: 0.3px;
    color: inherit;
  }
`;

export const DynamicLinks = styled.div`
  display: flex;
  gap: 0.75em;

  button {
    font-size: inherit;
    background-color: #fff;
    border: 1px solid #eee;
    padding: 0.1em;
    border-radius: 7px;
    transition: 250ms;
    cursor: pointer;

    &:hover {
      opacity: 0.75;
    }
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5em;
    text-decoration: none;
    color: inherit;
  }

  p {
    color: crimson;
    font-weight: 700;
    margin-right: 1em;
    border: 1px solid #eee;
    padding: 0.5em;
    font-size: 0.875rem;
    border-radius: 10px;
  }
`;

export const Login = styled.button``;

export const Logout = styled.button``;

export const Add = styled.button``;

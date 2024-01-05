import styled from "styled-components";

export const StyledChangelog = styled.section`
  padding: 1em 1.75em;
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
  box-shadow: 0px 2px 39px -7px rgba(0, 0, 0, 0.17);
  border-radius: 15px;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  margin-bottom: 1em;
`;

export const Logs = styled.div`
  display: flex;
  gap: 1em;
  border-bottom: 5px dotted #333;
  padding-bottom: 1em;
  margin-bottom: 1em;

  &:not(:last-child) {
    opacity: 0.5;
    transition: 300ms ease-in-out;

    &:hover {
      opacity: 1;
    }
  }

  &:last-child {
    border: none;
  }

  @media (width <= 575px) {
    flex-direction: column;
  }
`;

export const LogCard = styled.div`
  font-size: 0.875rem;
  border: 3px solid #eee;
`;

export const Field = styled.div`
  display: flex;
  gap: 1em;
  padding: 0.3em;
  border-bottom: 2px solid #eee;

  span {
    font-size: 0.9rem;
    font-weight: 700;
  }

  p {
    &.highlight {
      background-color: yellow;
    }
  }
`;

export const Previous = styled.div`
  flex: 1;
  background-color: #fcf0f0;
`;

export const Next = styled.div`
  flex: 1;
  background-color: #e8f4ea;
`;

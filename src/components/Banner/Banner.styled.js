import styled from "styled-components";

export const StyledBanner = styled.div`
  text-align: center;
`;

export const Logo = styled.img`
  margin-bottom: 0.3em;
`;

export const Title = styled.h1`
  font-size: 0.875rem;
  line-height: 1.4;
  max-width: 320px;
  text-transform: uppercase;
  margin: 0 auto;
  color: var(--c-accent);
  font-weight: 900;

  span {
    display: block;
  }
`;

export const LastUpdated = styled.span`
  display: block;
  margin-top: 1.125em;
  font-size: 0.75rem;
`;

import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  left: 0;
  text-align: center;
  padding: 1em;
`;

export const Row = styled.div`
  font-size: 0.85rem;
  color: #777;
  line-height: 1.25;

  span {
    display: block;
    font-size: 0.75rem;
  }

  p {
    display: inline-block;
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
    border-bottom: 1px solid #eee;
  }
`;

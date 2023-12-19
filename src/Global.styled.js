import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   :root {
      --c-accent: #4554A3;
      --c-black: #333333;
   }

   *,
   *::before,
   *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   body {
      font-family: "Lato";
      font-weight: 400;
      font-style: normal;
      line-height: 1.5;
      color: var(--c-black);
   }
`;

export default GlobalStyle;

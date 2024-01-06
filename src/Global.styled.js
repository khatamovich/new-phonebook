import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   :root {
      /* --c-accent: #4554A3; */
      --c-accent: #4c5a9b;
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
      scroll-behavior: smooth;
      margin: 0 auto;
   }

   .error {
      border: 2px solid crimson;
      color: crimson;
      border-radius: 9px;
      padding: .5em;
      font-size: 0.875rem;
      margin-top: 1em;
  }
`;

export default GlobalStyle;

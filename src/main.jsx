import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import GlobalStyle from "./Global.styled";

// ContextProviders
import { AuthContextProvider } from "./store/AuthContext";
import { AppContextProvider } from "./store/AppContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const name = "Murod";

root.render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
    <GlobalStyle />
  </StrictMode>
);

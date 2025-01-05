import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./lib/store/index.ts";
import RoutesRoot from "./lib/routes/routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <RoutesRoot />
        </BrowserRouter>
      </ThemeProvider>
    </StoreProvider>
  </StrictMode>
);

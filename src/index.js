import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
//222
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

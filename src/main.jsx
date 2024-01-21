import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App";
import "./styles/index.css";
import { ModeProvider } from "./context/ModeContexts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModeProvider>
      <App />
    </ModeProvider>
  </React.StrictMode>
);

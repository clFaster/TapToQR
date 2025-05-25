import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Popup from "../../components/Popup/Popup.tsx";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Popup />
    </StrictMode>,
  );
} else {
  console.error("Root element not found");
}

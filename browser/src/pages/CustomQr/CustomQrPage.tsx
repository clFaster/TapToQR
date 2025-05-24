import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import CustomQr from "../../components/CustomQr/CustomQr.tsx";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <CustomQr />
    </StrictMode>,
  );
} else {
  console.error("Root element not found");
}

import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import Options from "../../components/Options/Options.tsx";

const rootElement = document.getElementById('root');
if (rootElement) {
    createRoot(rootElement).render(
        <StrictMode>
            <Options />
        </StrictMode>,
    );
} else {
    console.error('Root element not found');
}

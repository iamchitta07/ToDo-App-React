import { createRoot } from 'react-dom/client'
import Layout from "./Layout.jsx";
import { StrictMode } from 'react';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Layout />
    </StrictMode>
)

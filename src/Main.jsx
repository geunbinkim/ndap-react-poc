import React from 'react'
import { createRoot } from "react-dom/client";
import Ndap from "./components/Ndap";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Ndap />
        </BrowserRouter>
    </React.StrictMode>
);
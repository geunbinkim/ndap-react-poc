import React from 'react'
import { createRoot } from "react-dom/client";
import Ndap from "./components/Ndap";

const root = createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Ndap />
    </React.StrictMode>
);
import React from 'react'
import 'antd/dist/antd.css';
import {createRoot} from "react-dom/client";
import Ndap from "./routers/Ndap";
import {BrowserRouter} from "react-router-dom";

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Ndap />
        </BrowserRouter>
    </React.StrictMode>
);
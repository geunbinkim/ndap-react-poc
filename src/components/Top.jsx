import React from 'react';
import {BrowserRouter, Link} from "react-router-dom";

const Top = () => {
    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
                <hr />
                <Routers
            </div>
        </BrowserRouter>
    );
};

export default Top;
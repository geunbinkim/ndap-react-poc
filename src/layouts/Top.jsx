import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Top = () => {
    return (
        <div>
            <nav style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem",
            }}>
                <Link to="/importjob">Import Jobs</Link> | {" "}
                <Link to="/dashboard">Dashboard</Link>
            </nav>
        </div>
    );
};

export default Top;
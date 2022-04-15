import React from 'react';
import {Link} from "react-router-dom";

const Top = () => {
    return (
        <div>
            <nav style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem",
            }}>
                <Link to="/dashboard">Dashboard</Link> | {" "}
                <Link to="/importjob">Import Jobs</Link>
            </nav>
        </div>
    );
};

export default Top;
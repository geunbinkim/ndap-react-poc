import React from 'react';
import Dashboard from "./Dashboard";
import Top from "../layouts/Top";
import {Route, Routes} from "react-router-dom";
import ImportJobs from "./ImportJobs";
import ImportJob from "./ImportJob";

const Ndap = () => {
    return (
        <>
            <Top />
            <hr />
            <Routes>
                <Route path="/dashboard" exact={true} element={<Dashboard />} />
                <Route path="/importjobs" exact={true} element={<ImportJobs />} />
                <Route path="/importjob" exact={true} element={<ImportJob />}>
                    <Route path=":id" exact={true} element={<ImportJob />} />
                </Route>
            </Routes>
        </>
    );
};

export default Ndap;
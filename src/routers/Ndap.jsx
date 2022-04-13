import React from 'react';
import Dashboard from "./Dashboard";
import Top from "../layouts/Top";
import {Route, Routes} from "react-router-dom";
import ImportJob from "./ImportJob";
import ImportJobForm from "./ImportJobForm";

const Ndap = () => {
    return (
        <>
            <Top />
            <hr />
            <Routes>
                <Route path="/dashboard" exact={true} element={<Dashboard />} />
                <Route path="/importjob" exact={true} element={<ImportJob />} />
                <Route path="/importjobForm" exact={true} element={<ImportJobForm />} />
            </Routes>
        </>
    );
};

export default Ndap;
import React from 'react';
import DefaultLayout from "../layouts/DefaultLayout";
import Dashboard from "./Dashboard";
import Top from "./Top";
import Bottom from "./Bottom";

const Ndap = () => {
    return (
        <>
            <DefaultLayout Top={<Top/>} Bottom={<Bottom/>}>
                <Dashboard />
            </DefaultLayout>
        </>
    );
};

export default Ndap;
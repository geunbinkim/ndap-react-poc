import React, {useCallback} from 'react';
import {Button, Form} from "antd";
import List from "../components/List";
import {useNavigate} from "react-router-dom";

const ImportJob = () => {
    const dummy = [{"id":1,"name":"ij-userTable","type":"FILES_TO_HIVE","owner":"admin","target":"default/user_table","created":1646975191000,"updated":1646975191000,"dataSource":{"id":2,"name":"ssh-qa","type":"SSH"},"lastInstance":null}];
    // const headers = ['Name', 'Connection', 'Target', 'Owner', 'Created', 'Last Status', 'Action'];
    const headers = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Connection',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Target',
            dataIndex: 'target',
            key: 'target',
        },
        {
            title: 'Owner',
            dataIndex: 'owner',
            key: 'owner',
        },
        {
            title: 'Created',
            dataIndex: 'created',
            key: 'created',
        },
        {
            title: 'Last Status',
            dataIndex: 'lastInstance',
            key: 'lastInstance',
        },
        {
            title: 'Action',
        },
    ];

    let navi = useNavigate();

    const onClick = useCallback((e) => {
        navi("/importJobForm", {replace: true});
    }, [])
    return (
        <div>
            <h1>Import Jobs</h1>
            <Button onClick={onClick}>Create Import Job</Button>

            <List columns={headers} dataSource={dummy} />
        </div>
);
};

export default ImportJob;
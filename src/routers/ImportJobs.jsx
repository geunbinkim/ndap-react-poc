import React, {useCallback} from 'react';
import {Button} from "antd";
import List from "../components/List";
import {useNavigate} from "react-router-dom";
import moment from "moment";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDatabase, faFolder, faPlay, faRunning, faTerminal} from "@fortawesome/free-solid-svg-icons";

const ImportJobs = () => {
    const navi = useNavigate();
    const dummy = [{"id":1,"name":"ij-userTable","type":"FILES_TO_HIVE","owner":"admin","target":"default/user_table","created":1646975191000,"updated":1646975191000,"dataSource":{"id":2,"name":"ssh-qa","type":"SSH"},"lastInstance":null}];
    const headers = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render : (text, record, index) => {
                const nameClick = (e) => {
                    e.preventDefault();
                    console.log('/importjob/' + record.id);
                    navi('/importjob/' + record.id);
                }
                return <a onClick={nameClick}>{text}</a>
            }
        },
        {
            title: 'Connection',
            dataIndex: 'type',
            key: 'type',
            render : (text, record, index) => {
                return (
                    <>
                        <FontAwesomeIcon icon={
                            {
                                SSH : faTerminal,
                                NDAP_FILE_REPO : faFolder,
                                DATABASE : faDatabase
                            }[record.dataSource.type]
                        } />
                        {record.dataSource.name}
                    </>
                );
            }
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
            render : (text, record, index) => {
                return <>
                    {moment(text).format('yyyy-MM-DD')}
                    <br/>
                    {moment(text).format('HH:mm:ss')}
                </>
            }
        },
        {
            title: 'Last Status',
            dataIndex: 'lastInstance',
            key: 'lastInstance',
            render : (text, record, index) => {
               return record.jobinstance || 'not execution yet';
            }
        },
        {
            title: 'Action',
            render : (text, record, index) => {
                return (
                    <Button><FontAwesomeIcon icon={faPlay} />Run</Button>
                )
            }
        },
    ];

    const onClick = useCallback((e) => {
        navi("/importJob", {replace: false});
    }, []);

    const config = {
        rowKey : "id"
    };
    return (
        <div>
            <h1>Import Jobs</h1>
            <Button onClick={onClick}>Create Import Job</Button>

            <List TableConfig={config} columns={headers} dataSource={dummy} />
        </div>
);
};

export default ImportJobs;
import React, {useCallback} from 'react';
import {Button} from "antd";
import List from "../components/List";
import {useNavigate} from "react-router-dom";
import moment from "moment";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDatabase, faFolder, faPlay, faRunning, faTerminal} from "@fortawesome/free-solid-svg-icons";

const ImportJobs = () => {
    const navi = useNavigate();
    const dummy = [{"id":5,"name":"CSV_NoPartition_Pipe_El_TX","type":"FILES_TO_HIVE","owner":"erica1","target":"qc/tb_nopartition_pipe_el_tx","created":1650350657000,"updated":1650351427000,"dataSource":{"id":20,"name":"ssh-qa","type":"SSH"},"lastInstance":{}},{"id":3,"name":"Import-call-data-no-part","type":"FILES_TO_HIVE","owner":"erica1","target":"qc/call_data","created":1650348874000,"updated":1650348874000,"dataSource":{"id":20,"name":"ssh-qa","type":"SSH"},"lastInstance":{"id":3,"state":"SUCCEEDED","started":1650348880000,"ended":1650348989000,"duration":null,"resultRowCount":93060,"resultFileCount":null,"stateDetailed":null,"shortMessage":null,"detailMessage":null,"importJob":{"id":3,"name":"Import-call-data-no-part","type":"FILES_TO_HIVE"},"triggeredBy":{"userId":"20","username":"erica1","workflowId":null,"workflowName":null},"mrJobId":null,"mrHistoryFile":null,"oozieJobId":"0000001-220419103915268-oozie-oozi-W"}},{"id":4,"name":"Import-call-data-part","type":"FILES_TO_HIVE","owner":"erica1","target":"qc/call_data_part","created":1650348999000,"updated":1650348999000,"dataSource":{"id":20,"name":"ssh-qa","type":"SSH"},"lastInstance":{"id":4,"state":"SUCCEEDED","started":1650349006000,"ended":1650349123000,"duration":null,"resultRowCount":93060,"resultFileCount":null,"stateDetailed":null,"shortMessage":null,"detailMessage":null,"importJob":{"id":4,"name":"Import-call-data-part","type":"FILES_TO_HIVE"},"triggeredBy":{"userId":"20","username":"erica1","workflowId":null,"workflowName":null},"mrJobId":null,"mrHistoryFile":null,"oozieJobId":"0000001-220419103914107-oozie-oozi-W"}},{"id":6,"name":"S03_tab300","type":"FILES_TO_HIVE","owner":"autouser","target":"iceberg_s3a/s03_1_data","created":1650354929000,"updated":1650354929000,"dataSource":{"id":20,"name":"ssh-qa","type":"SSH"},"lastInstance":{"id":7,"state":"SUCCEEDED","started":1650354933000,"ended":1650355336000,"duration":null,"resultRowCount":1818000,"resultFileCount":null,"stateDetailed":null,"shortMessage":null,"detailMessage":null,"importJob":{"id":6,"name":"S03_tab300","type":"FILES_TO_HIVE"},"triggeredBy":{"userId":"23","username":"autouser","workflowId":null,"workflowName":null},"mrJobId":null,"mrHistoryFile":null,"oozieJobId":"0000003-220419103915268-oozie-oozi-W"}},{"id":2,"name":"ssh-citytable","type":"FILES_TO_HIVE","owner":"erica1","target":"qc/city_table","created":1650344081000,"updated":1650344081000,"dataSource":{"id":20,"name":"ssh-qa","type":"SSH"},"lastInstance":{"id":2,"state":"SUCCEEDED","started":1650344086000,"ended":1650344191000,"duration":null,"resultRowCount":285,"resultFileCount":null,"stateDetailed":null,"shortMessage":null,"detailMessage":null,"importJob":{"id":2,"name":"ssh-citytable","type":"FILES_TO_HIVE"},"triggeredBy":{"userId":"20","username":"erica1","workflowId":null,"workflowName":null},"mrJobId":null,"mrHistoryFile":null,"oozieJobId":"0000000-220419103915268-oozie-oozi-W"}},{"id":1,"name":"ssh-usertable","type":"FILES_TO_HIVE","owner":"erica1","target":"qc/user_table","created":1650344023000,"updated":1650344023000,"dataSource":{"id":20,"name":"ssh-qa","type":"SSH"},"lastInstance":{"id":1,"state":"SUCCEEDED","started":1650344028000,"ended":1650344137000,"duration":null,"resultRowCount":10000,"resultFileCount":null,"stateDetailed":null,"shortMessage":null,"detailMessage":null,"importJob":{"id":1,"name":"ssh-usertable","type":"FILES_TO_HIVE"},"triggeredBy":{"userId":"20","username":"erica1","workflowId":null,"workflowName":null},"mrJobId":null,"mrHistoryFile":null,"oozieJobId":"0000000-220419103914107-oozie-oozi-W"}}];
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
               return (
                   <>
                   {
                       record.lastInstance.id ? <h1>test</h1> : "not yet"
                   }
                   </>
               )
               ;
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
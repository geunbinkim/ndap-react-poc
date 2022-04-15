import React, {useCallback, useState} from 'react';
import {Button, Form, Input, Select} from "antd";
import {useNavigate, useParams} from "react-router-dom";
import FilesToHive from "../components/transfer/FilesToHive";
import FilesToHDFS from "../components/transfer/FilesToHDFS";
import DatabaseToHive from "../components/transfer/DatabaseToHive";

const ImportJob = () => {
    const jobTypeEnum = {
        FILES_TO_HIVE : "FILES_TO_HIVE",
        FILES_TO_HDFS : "FILES_TO_HDFS",
        DATABASE_TO_HIVE : "DATABASE_TO_HIVE",
        HIVE_TO_DATABASE : "HIVE_TO_DATABASE"
    };
    const importJobTypes = [
        {
            name : "Files to Hive",
            value : jobTypeEnum.FILES_TO_HIVE,
            component : <FilesToHive />
        },
        {
            name : "Files to HDFS",
            value : jobTypeEnum.FILES_TO_HDFS,
            component : <FilesToHDFS />
        },
        {
            name : "Database to Hive (JDBC)",
            value : jobTypeEnum.DATABASE_TO_HIVE,
            component : <DatabaseToHive />
        }
    ];

    const [jobType, setJobType] = useState(jobTypeEnum.FILES_TO_HIVE);
    const { id } = useParams();
    const { Option } = Select;
    const navi = useNavigate();
    const onClick = useCallback((e) => {
        navi('/importjobs', {replace : false});
    });
    const onFinish = useCallback((e) => {

    });

    const onJobTypeChange = useCallback((e) => {
        setJobType(e);
    });
    return (
        <>
            <h1>Import Job | {id ? 'Edit' : 'Create'}</h1>
            <hr />
            <Button onClick={onClick}>Back to List</Button>

            <Form onFinish={onFinish}>
                <Form.Item label="Name" name="name" rules={[{required : true, message : 'Name is Required!'}]}>
                    <Input name="name" placeholder="Insert new Import Job name." />
                </Form.Item>
                <Form.Item label="Job Type">
                    <Select defaultValue={jobTypeEnum.FILES_TO_HIVE} onChange={onJobTypeChange}>
                        {importJobTypes.map((option) => {
                            return (
                              <Option value={option.value} key={option.value}>{option.name}</Option>
                            );
                        })}
                    </Select>
                </Form.Item>
                <hr />
                {
                    importJobTypes.find((type) => {
                        return type.value === jobType;
                    })['component']
                }
            </Form>
        </>
    );
};

export default ImportJob;
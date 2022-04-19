import React, {useCallback, useState} from 'react';
import {Form, Input, Select} from 'antd';

const FilesToHive = () => {
    const dummy_database = [{"name":"default","bookmarked":false},{"name":"iceberg","bookmarked":false},{"name":"noaa","bookmarked":false},{"name":"phoenix","bookmarked":false},{"name":"qc3","bookmarked":false},{"name":"spark","bookmarked":false}];
    const { Option } = Select;
    const [tableSelectDisabled, setTableSelectDisabled] = useState(true);
    const onSelect = useCallback((e) => {
        setTableSelectDisabled(!!!e);
    }, [Select])
    return (
        <>
            <h2>Target Table</h2>
            <Form.Item label="Target Database">
                <Select onSelect={onSelect}>
                    <option value={null}>choose</option>
                    {
                        dummy_database.map((database) => {
                            return <Option key={database.name} value={database.name}>{database.name}</Option>
                        })
                    }
                </Select>
            </Form.Item>
            <Form.Item label="Target Table">
                <Select disabled={tableSelectDisabled}>
                    {
                        dummy_database.map((database) => {
                            return <Option key={database.name} value={database.name}>{database.name}</Option>
                        })
                    }
                </Select>
            </Form.Item>
        </>
    );
};

export default FilesToHive;
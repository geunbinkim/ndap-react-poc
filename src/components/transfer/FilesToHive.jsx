import React from 'react';
import {Form, Input, Select} from 'antd';

const FilesToHive = () => {
    const dummy_database = [{"name":"default","bookmarked":false},{"name":"iceberg","bookmarked":false},{"name":"noaa","bookmarked":false},{"name":"phoenix","bookmarked":false},{"name":"qc3","bookmarked":false},{"name":"spark","bookmarked":false}];
    const { Option } = Select;
    return (
        <>
            <h2>Target Table</h2>
            <Form.Item label="Target Database">
                <Select>
                    {
                        dummy_database.map((database) => {
                            return <Option key={database.name} value={database.name}>{database.name}</Option>
                        })
                    }
                </Select>
            </Form.Item>
            <Form.Item label="Target Table">
                <Select>
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
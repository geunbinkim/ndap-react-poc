import React from 'react';
import { Table } from 'antd';
import './NormalTable.css';

function NormalTable({ dataSource, columns, rowKey }) {
    const defaultTableConfig = {};
    return (
        <Table
            style={{ marginTop: '10px' }}
            dataSource={dataSource}
            rowKey={rowKey}
            columns={columns.map((col) => ({
                ...defaultTableConfig,
                ...col,
            }))}
        />
    );
}

export default NormalTable;

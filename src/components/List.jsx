import React from 'react';
import {Table} from "antd";
import PropTypes from "prop-types";

const List = ({ columns, dataSource, TableConfig }) => {
    const listColums = columns.map((col) => {
        return {
            align : 'center',
            ...col
        }
    });

    const config = {
        ...TableConfig,
    };

    return (
        <Table rowKey={config.rowKey} columns={listColums} dataSource={dataSource} pagination={{position : ['bottomCenter']}}></Table>
    );
};

List.propTypes = {
    columns : PropTypes.array.isRequired,
    dataSource : PropTypes.array.isRequired,
}

export default List;
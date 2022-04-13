import React from 'react';
import {Table} from "antd";
import PropTypes from "prop-types";

const List = ({ columns, dataSource }) => {
    return (
        <Table columns={columns} dataSource={dataSource}>

        </Table>
    );
};

List.propTypes = {
    columns : PropTypes.array.isRequired,
    dataSource : PropTypes.array.isRequired,
}

export default List;
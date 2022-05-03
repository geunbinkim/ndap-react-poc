import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { notification } from 'antd';
import { useDispatch } from 'react-redux';
import SearchInput from '../../components/SearchInput';
import CreateButton from '../../components/CreateButton';
import NormalTable from '../../components/NormalTable';
import { addNotification } from '../../reducers/notification';

function Connections() {
    const [connectionList, setConnectionList] = useState(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchConnectionList = async () => {
            setConnectionList(null);
            setLoading(true);
            try {
                const response = await axios.get(
                    'http://localhost:8001/proxy/datasource',
                );

                setConnectionList(response.data);
            } catch (e) {
                console.log(e.response.data);
                notification.error({
                    message: e.response.data.message,
                    detailMessage: e.response.data.detailMessage,
                });
                dispatch(
                    addNotification({
                        content: e.message,
                        detailMessage: e.response.data.detailMessage,
                    }),
                );
            } finally {
                setLoading(false);
            }
        };

        fetchConnectionList();
    }, []);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render(text, record) {
                return <Link to={`/connection/${record.id}`}>{text}</Link>;
            },
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'updated',
            dataIndex: 'updated',
            key: 'updated',
        },
        {
            title: 'owner',
            dataIndex: 'owner',
            key: 'owner',
        },
    ];

    const [dataSource, setDataSource] = useState(connectionList);
    const [keyword, setKeyword] = useState('');
    useEffect(() => {
        if (keyword !== '' && keyword.length > 2)
            setDataSource(
                connectionList.filter(
                    (connection) =>
                        connection.name.indexOf(keyword) > -1 ||
                        connection.type.indexOf(keyword) > -1,
                ),
            );
        else {
            setDataSource(connectionList);
        }
    }, [keyword, connectionList]);

    const navigate = useNavigate();
    const moveCreate = () => {
        navigate('/connection');
    };

    return (
        <>
            <h1>Connections</h1>
            <hr />
            <div style={{ display: 'block', padding: '5px 8px 5px 5px' }}>
                <SearchInput
                    placeholder="Search for a data connection name or type"
                    onSearch={setKeyword}
                />
                <CreateButton text="Create Connection" onClick={moveCreate} />
            </div>
            <NormalTable
                rowKey="id"
                dataSource={dataSource}
                columns={columns}
                loading={loading}
            />
        </>
    );
}

export default Connections;

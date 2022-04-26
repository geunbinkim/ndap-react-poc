import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchInput from '../../components/SearchInput';
import CreateButton from '../../components/CreateButton';
import NormalTable from '../../components/NormalTable';

function Connections() {
    const connectionList = [
        {
            id: 3,
            name: 'db-mysql',
            type: 'DATABASE',
            updated: 1646974901000,
            address: 'jdbc:mariadb://192.168.150.232:3306/datagen',
            owner: 'admin',
        },
        {
            id: 4,
            name: 'db-psql',
            type: 'DATABASE',
            updated: 1646975008000,
            address: 'jdbc:postgresql://192.168.150.233:5432/ndap',
            owner: 'admin',
        },
        {
            id: 15,
            name: 'iceberg-warehouse',
            type: 'S3A',
            updated: 1649067280000,
            address: 's3a://iceberg-warehouse',
            owner: 'admin',
        },
        {
            id: 1,
            name: 'Ndap File Repository',
            type: 'NDAP_FILE_REPO',
            owner: 'admin',
        },
        {
            id: 14,
            name: 'noaa-stations-raw-data',
            type: 'S3A',
            updated: 1648702752000,
            address: 's3a://noaa-stations-raw-data',
            owner: 'admin',
        },
        {
            id: 16,
            name: 'S3A_TEST1',
            type: 'S3A',
            updated: 1649230396000,
            address: 's3a://test1',
            owner: 'admin',
        },
        {
            id: 2,
            name: 'ssh-qa',
            type: 'SSH',
            updated: 1646974827000,
            address: '192.168.150.232',
            owner: 'admin',
        },
        {
            id: 13,
            name: 'test3',
            type: 'S3A',
            updated: 1648699359000,
            address: 's3a://test3',
            owner: 'admin',
        },
        {
            id: 17,
            name: 'test_ss',
            type: 'S3A',
            updated: 1649385164000,
            address: 's3a://test1',
            owner: 'admin',
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render(text, record, index) {
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
    }, [keyword]);

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
            />
        </>
    );
}

export default Connections;

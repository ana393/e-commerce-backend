import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getMyOrders } from '../../../redux/actions/orderActions';
import { Row, Table, Typography, Space } from 'antd';


const MyOrders = () => {
    const user = useSelector(state => state.user.user);
    const userID = user.isUser?._id;
    const MyOrders = useSelector(state => state.myorders.myorders)
    console.log(MyOrders)
    const { Title } = Typography;
    useEffect(() => {
        getMyOrders(userID);
    }, [userID])

    const columns = [

        {
            title: 'Ref', dataIndex: 'referenceNumber', key: '_id',
            width: 50,
            sorter: (a, b) => a.name.localeCompare(b.name), sortDirections: ['descend', 'ascend'],

        },
        {
            title: 'Status', dataIndex: 'status',
            sorter: (a, b) => a.status.localeCompare(b.status), sortDirections: ['descend', 'ascend'],

        },
        {
            title: 'Expenditure', dataIndex: 'expenditure',
            sorter: (a, b) => a.email.localeCompare(b.email), sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Purchase Date', dataIndex: 'createdAt',
            // render: (record) => record.createdAt.substring(0, 6),
            sorter: (a, b) => a.createdAt.localeCompare(b.createdAt), sortDirections: ['descend', 'ascend']
        },
        {
            title: 'Action', key: 'action',
            render: (record) => (

                <Space size="middle">
                    <button type="button" className="link-button" >
                        view
                        </button>

                </Space>),
        },
    ];

    return (
        <>
            <Row justify="center">
                <Title level={4}> My orders </Title>
            </Row>
            <div>
                <Table columns={columns} dataSource={MyOrders} rowKey="_id" size="small" scroll={{ x: 840, y: 340 }} />
            </div>

        </>
    )
}

export default MyOrders;

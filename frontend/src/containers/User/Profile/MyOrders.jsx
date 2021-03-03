import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getMyOrders } from '../../../redux/actions/orderActions';
import { Row, Card, Col, Table, Button, Typography, Space } from 'antd';
import PurchaseItem from '../../../components/Modal/modalItem.jsx';
import './myorders.scss'

const MyOrders = () => {
    const user = useSelector(state => state.user.user);
    const MyOrders = useSelector(state => state.myorders.myorders)

    const { Title } = Typography;
    const [visible, setVisible] = useState(false);
    const [animationModal, setAnimationModal] = useState();
    const [Order, setOrder] = useState('');
    const classModal = `cardModal animated ${animationModal}`

    const userID = user.isUser?._id;
    useEffect(() => {
        getMyOrders(userID);
    }, [userID]);


    const columns = [

        {
            title: 'Ref', dataIndex: 'referenceNumber', key: '_id',
            width: 50,
            sorter: (a, b) => a.name.localeCompare(b.name), sortDirections: ['descend', 'ascend'],
            responsive: []
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
                    <button type="button" className="link-button" onClick={() => { setOrder(record); setVisible(true); setAnimationModal('bounceInUp') }} >
                        view
                        </button>

                </Space>),
        },
    ];

    return (
        <>
            <Col span={24} className="modalContainer" style={{ zIndex: 3, display: visible ? "block" : "none" }}>
                <Row justify="center">
                    <Col span={12} >
                        <Card className={classModal} style={{ margin: 10, borderRadius: 10, boxShadow: "1px 1px 3px #727272" }}>

                            <p>Reference_Number : {Order?.referenceNumber}</p>
                            {Order.items?.map((item) => (
                                <PurchaseItem key={item._id} item={item} />
                            ))}
                            <Button type="primary" onClick={() => {
                                setAnimationModal('bounceOutUp'); setTimeout(() => {
                                    setVisible(false);
                                }, 800);
                            }} >
                                Cancelar
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </Col>
            <div className="myOrder-container">
                <Row justify="center">
                    <Title level={4}> My orders </Title>
                </Row>
                <div>
                    <Table columns={columns}
                        dataSource={MyOrders} rowKey="_id" size="middle" scroll={{ y: 340 }} />
                </div>
            </div>
        </>
    )
}

export default MyOrders;

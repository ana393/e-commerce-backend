import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { listOrders, updateOrder, deleteOrder } from '../../../redux/actions/orderActions.js';
import { Row, Col, Card, notification, Table, Typography, Popconfirm, message, Button, Space, Form, Select } from 'antd';

const layout = { labelCol: { span: 6 }, wrapperCol: { span: 16, } };


const AllOrders = () => {
    const orderList = useSelector(state => state.orders.orders)
    const { Title } = Typography;
    const [visible, setVisible] = useState(false);
    const [animationModal, setAnimationModal] = useState();
    const [Order, setUpdatedOrder] = useState(orderList);
    const classModal = `cardModal animated ${animationModal}`
    const { Option } = Select;

    useEffect(() => { listOrders(); }, [])

    const columns = [
        {
            title: 'Ref_Number', dataIndex: 'referenceNumber', key: '_id',
            sorter: (a, b) => a.referenceNumber.localeCompare(b.referenceNumber), sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Status', dataIndex: 'status',
            sorter: (a, b) => a.status.localeCompare(b.status), sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'User', dataIndex: 'user',
            sorter: (a, b) => a.user.localeCompare(b.user), sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'CreatedAt', dataIndex: 'createdAt',
            sorter: (a, b) => a.createdAt.localeCompare(b.createdAt), sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Action', key: 'action',
            render: (record) => (

                <Space size="middle">
                    <button type="button" className="link-button" onClick={() => { setUpdatedOrder(record); setVisible(true); setAnimationModal('bounceInUp') }} >
                        cambiar status
                        </button>
                    <Popconfirm title="Estás seguro que quieres eliminar el pedido?" okText="Si" cancelText="No"
                        onConfirm={() => deleteOrder(record._id)} onCancel={cancel}>
                        <button type="button" className="link-button">
                            Eliminar
                        </button>
                    </Popconfirm>
                </Space>),
        },
    ];
    const onFinish = (values) => {
        const body = {
            status: values.status
        }
        updateOrder(Order._id, body)
            .then(res => {
                notification.success({ message: 'Updated', description: 'Order updated successfully', duration: 2000 })
                setAnimationModal('bounceOutUp');
                setTimeout(() => {
                    setVisible(false);
                }, 800);
            })
            .catch(() => {
                notification.error({
                    message: 'Error', description: 'There was a problem trying to update the order',
                    duration: 2000
                })
            })
    }

    const cancel = (e) => {
        message.error('Canceled');
    }
    return (
        <div>
            <h1>Orders</h1>
            <Row justify="center" style={{ margin: 0 }} >

                <Card className="animated bounceInRight" style={{ marginTop: 5, borderRadius: 10, backgroundColor: "#cccccc17", boxShadow: "1px 1px 3px #727272" }}>
                    <Row justify="center">
                        <Title level={4}> Orders </Title>
                    </Row>
                    <div>
                        <Table columns={columns} dataSource={orderList} rowKey="_id" size="middle" scroll={{ y: 340 }} />
                    </div>
                </Card>

                <Col span={24} className="modalContainer" style={{ display: visible ? "block" : "none" }}>
                    <Row justify="center">
                        <Col span={12} >
                            <Card className={classModal} style={{ marginTop: 140, borderRadius: 10, boxShadow: "1px 1px 3px #727272" }}>

                                <Title level={2}>Cambiar role</Title>
                                <Form {...layout} name="formUpdate" onFinish={onFinish}>
                                    <Row justify="center">
                                        <Col span={24}>
                                            <Form.Item name="status" label="Order Status " rules={[{ required: false }]}>
                                                <Select placeholder={Order?.status} initialvalues={Order?.status}>
                                                    <Option value="paid">paid</Option>
                                                    <Option value="shipping">shipping</Option>
                                                    <Option value="delivered">delivered</Option>
                                                    <Option value="canceled">canceled</Option>
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                        <Col justify="center" span={24}>
                                            <Row justify="space-around">
                                                <Form.Item >
                                                    <Button type="primary" htmlType="submit">
                                                        Cambiar
                                                </Button>
                                                </Form.Item>
                                                <Button type="primary" onClick={() => {
                                                    setAnimationModal('bounceOutUp'); setTimeout(() => {
                                                        setVisible(false);
                                                    }, 800);
                                                }} >
                                                    Cancelar
                                            </Button>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </div>
    )
}

export default AllOrders;

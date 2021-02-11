import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Row, Col, notification, Card, Table, Typography, Popconfirm, message, Button, Space, Form, Select } from 'antd';
import { allUsers, updateProfile, deleteUser } from '../../../redux/actions/userAction';
import './Users.scss'

const layout = { labelCol: { span: 6 }, wrapperCol: { span: 16, } };

const Users = ({ users }) => {

    const { Title } = Typography;
    const [visible, setVisible] = useState(false);
    const [animationModal, setAnimationModal] = useState();
    const [updateUser, setUpdatedUser] = useState();
    const classModal = `cardModal animated ${animationModal}`
    const { Option } = Select;
    const columns = [
        {
            title: 'Usuario', dataIndex: 'name', key: '_id',
            sorter: (a, b) => a.name.localeCompare(b.name), sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Rol', dataIndex: 'role',
            sorter: (a, b) => a.role.localeCompare(b.role), sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Fecha de Alta', dataIndex: 'createdAt',
            sorter: (a, b) => a.createdAt.localeCompare(b.createdAt), sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Action', key: 'action',
            render: (record) => (
                <Space size="middle">
                    <button type="button" className="link-button" onClick={() => { setUpdatedUser(record); setVisible(true); setAnimationModal('bounceInUp') }} >
                        cambiar rol
                        </button>
                    <Popconfirm title="Estás seguro que quieres eliminar el usuario?" okText="Si" cancelText="No"
                        onConfirm={confirm.bind(this, record._id)} onCancel={cancel}>
                        <button type="button" className="link-button">
                            Eliminar
                        </button>
                    </Popconfirm>
                </Space>),
        },
    ];

    const onFinish = (values) => {
        const user = {
            role: values.role
        }
        updateProfile(updateUser._id, user)
            .then(res => {
                notification.success({ message: 'Updated', description: 'User updated successfully', duration: 2000 })
                setAnimationModal('bounceOutUp');
                setTimeout(() => {
                    setVisible(false);
                }, 800);
            })
            .catch(() => {
                notification.error({
                    message: 'Error', description: 'There was a problem trying to update the user',
                    duration: 2000
                })
            })
    }


    const confirm = (e) => {
        deleteUser(e)
            .then(res => {
                notification.success({ message: 'Deleted', description: res.message, duration: 2000 })
            })
            .catch(() => {
                notification.error({
                    message: 'Error', description: 'There was a problem trying to eliminate the user',
                    duration: 2000
                })
            })
    }

    function cancel (e) {
        message.error('Canceled');
    }

    useEffect(() => { allUsers(); }, []);


    return (
        <Row justify="center">
            <Col span={18}>
                <Card className="animated bounceInRight" style={{ marginTop: 40, borderRadius: 10, backgroundColor: "#cccccc17", boxShadow: "1px 1px 3px #727272" }}>
                    <Title level={2}> Usuarios </Title>
                    <Row justify="center">
                        <Col span={20}>
                            <Table columns={columns} dataSource={users} rowKey="_id" size="middle" style={{ marginTop: 10 }} />
                        </Col>
                    </Row>
                </Card>
            </Col>
            <Col span={24} className="modalContainer" style={{ display: visible ? "block" : "none" }}>
                <Row justify="center">
                    <Col span={12} >
                        <Card className={classModal} style={{ marginTop: 140, borderRadius: 10, boxShadow: "1px 1px 3px #727272" }}>


                            <Form {...layout} name="formUpdate" onFinish={onFinish}>
                                <Row justify="center">
                                    <Col span={24}>
                                        <Form.Item name="role" label="Rol " rules={[{ required: false }]}>
                                            <Select placeholder={updateUser?.role} initialvalues={updateUser?.role}>
                                                <Option value="user">user</Option>
                                                <Option value="admin">admin</Option>
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
    )
}


const mapStateToProps = state => ({ users: state.user.users });
export default connect(mapStateToProps)(Users);

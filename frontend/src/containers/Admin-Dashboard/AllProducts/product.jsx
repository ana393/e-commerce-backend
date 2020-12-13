import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Card, Row, Col, Table, Typography, Popconfirm, message, Button, Space } from 'antd';
import { listProducts, deleteProduct } from '../../../redux/actions/productActions';
import { NavLink } from 'react-router-dom';
import './product.scss';

const AllProducts = ({ product }) => {
    console.log('AllProduct', product)
    useEffect(() => { listProducts(); }, []);
    const { Title } = Typography;

    const columns = [
        {
            title: 'Nombre', dataIndex: 'name', key: '_id',
            sorter: (a, b) => a.name.localeCompare(b.name), sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'In stock', dataIndex: 'InStock',
            sorter: (a, b) => a.InStock - b.InStock, sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Precio', dataIndex: 'price',
            sorter: (a, b) => a.price - b.price, sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Categoria', dataIndex: 'category',
            sorter: (a, b) => a.category.localeCompare(b.category), sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Action', key: 'action',
            render: (record) => (
                <Space size="middle">
                    <NavLink to={{ pathname: '/', data: record }} exact>
                        Editar
                    </NavLink>
                    <Popconfirm title="Estás seguro que quieres eliminar el producto?" okText="Si" cancelText="No"
                        onConfirm={confirm.bind(this, record._id)} onCancel={cancel}>
                        <button type="button" className="link-button">
                            Eliminar
                        </button>
                    </Popconfirm>

                </Space>),
        },
    ];

    function confirm (e) {
        deleteProduct(e);
        message.success('Confirmado');
    }

    function cancel (e) {
        message.error('Cancelado');
    }

    return (
        <Row justify="center">
            <Col span={18} style={{ marginTop: 40 }}>
                <Card className=" cardRegister animated bounceInRight" style={{ marginTop: 30, borderRadius: 10, backgroundColor: "#cccccc17", boxShadow: "1px 1px 3px #727272" }}>
                    <Row justify="center" style={{ marginBottom: 5 }}>
                        <Col>
                            <Title level={2}> Productos </Title>
                            <Row>
                                <NavLink to='/' exact>
                                    <Button type="primary">
                                        Nuevo Producto
                                    </Button>
                                </NavLink>
                            </Row>
                        </Col>
                    </Row>
                    <div>
                        <Table columns={columns} dataSource={product} size="middle" />
                    </div>
                </Card>
            </Col>
        </Row>
    )
}

const mapStateToProps = ({ product }) => ({ product: product.product });
export default connect(mapStateToProps)(AllProducts);
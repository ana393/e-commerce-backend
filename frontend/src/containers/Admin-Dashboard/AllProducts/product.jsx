import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Card, Row, Col, Table, Typography, Popconfirm, message, Button, Space } from 'antd';
import { listProducts, deleteProduct } from '../../../redux/actions/productActions';
import { NavLink, Link } from 'react-router-dom';
import './product.scss';

const AllProducts = ({ product }) => {

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
                    <NavLink to="" exact>
                        Editar
                    </NavLink>
                    <Popconfirm title="Estás seguro que quieres eliminar el producto?" okText="Si" cancelText="No"
                        onConfirm={confirm.bind(record._id)} onCancel={cancel}>
                        <button type="button" className="link-button">
                            Eliminar
                        </button>
                    </Popconfirm>

                </Space>),
        },
    ];

    const confirm = e => {
        deleteProduct(e);
        message.success('Confirmado');
    }

    function cancel (e) {
        message.error('Cancelado');
    }

    return (
        <Row justify="center">
            <Col span={18} style={{ marginTop: 5 }}>
                <Card className=" cardRegister animated bounceInRight" style={{ marginTop: 20, borderRadius: 10, backgroundColor: "#cccccc17", boxShadow: "1px 1px 3px #727272" }}>
                    <Row justify="center" style={{ marginBottom: 5 }}>
                        <Col>
                            <Title level={2}> Productos </Title>
                            <Row>

                                <Button type="primary">
                                    <Link to="/newProduct" >
                                        New Product
                                         </Link>
                                </Button>

                            </Row>
                        </Col>
                    </Row>
                    <div>
                        <Table columns={columns} dataSource={product} rowKey="_id" size="middle" key={product._id} />
                    </div>
                </Card>
            </Col>
        </Row>
    )
}

const mapStateToProps = ({ product }) => ({ product: product.product });
export default connect(mapStateToProps, null)(AllProducts);
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Form, Card, Row, Col, Table, Typography, Popconfirm, message, notification, Button, Space } from 'antd';
import { listProducts, deleteProduct, updateProduct } from '../../../redux/actions/productActions';
import { Link } from 'react-router-dom';
import './product.scss';
import EditProduct from '../../../components/NewProduct/EditProduct.jsx';

const layout = { labelCol: { span: 6 }, wrapperCol: { span: 20, } };

const AllProducts = ({ product }) => {

    useEffect(() => { listProducts(); }, []);

    const { Title } = Typography;
    const [visible, setVisible] = useState(false);
    const [animationModal, setAnimationModal] = useState();
    const [Product, setProduct] = useState({ product });
    const classModal = `cardModal animated ${animationModal}`


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
                    <button type="button" className="link-button" onClick={() => { setProduct(record); setVisible(true); setAnimationModal('bounceInUp') }} >
                        Editar
                        </button>
                    <Popconfirm title="Estás seguro que quieres eliminar el producto?" okText="Si" cancelText="No"
                        onConfirm={() => deleteProduct(record._id)} onCancel={cancel}>
                        <button type="button" className="link-button">
                            Eliminar
                        </button>
                    </Popconfirm>

                </Space>),
        },
    ];

    const onFinish = (values) => {
        const product = {
            name: values.name,
            category: values.category,
            price: values.price,
            InStock: values.InStock,
            upload: values.upload
        }

        updateProduct(Product._id, product)
            .then(res => {
                notification.success({ message: 'Updated', description: 'Product updated successfully', duration: 2000 })
                setAnimationModal('bounceOutUp');
                setTimeout(() => {
                    setVisible(false);
                }, 800);
            })
            .catch(() => {
                notification.error({
                    message: 'Error', description: 'There was a problem trying to update the Product',
                    duration: 2000
                })
            })
    }




    function cancel (e) {
        message.error('Cancelado');
    }

    return (
        <Row justify="center">
            <Col span={18} style={{ marginTop: 3 }}>
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

            <Col span={24} className="modalContainer" style={{ display: visible ? "block" : "none" }}>
                <Row justify="center">
                    <Col span={12} >
                        <Card className={classModal} style={{ marginTop: 10, borderRadius: 10, boxShadow: "1px 1px 3px #727272" }}>
                            <Title level={2}>Edit Product</Title>
                            <Form {...layout} name="formUpdate" onFinish={onFinish}  >

                                <EditProduct Product={Product} setVisible={setVisible} setAnimationModal={setAnimationModal} />

                            </Form>

                        </Card>
                    </Col>
                </Row>
            </Col>

        </Row>
    )
}

const mapStateToProps = state => ({ product: state.product.product });
export default connect(mapStateToProps)(AllProducts);
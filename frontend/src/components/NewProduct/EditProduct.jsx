import React from 'react';
import { Form, Input, Row, Col, Select, Button, InputNumber, } from 'antd';

const EditProduct = ({ Product, setAnimationModal, setVisible, setSelectedFile }) => {
    return (<>
        <Row justify="center"  >
            <Col span={24}>
                <Form.Item
                    placeholder="name"
                    label="name"
                    name="name"
                    rules={[{ required: true, message: 'Please input product name!' }]}
                >
                    <Input placeholder={Product?.name} />
                </Form.Item>
                <Form.Item type="category" label="Category" name="category" rules={[{ required: true, message: 'Please input the category!' }]} >
                    <Select placeholder={Product?.category}>
                        <Select.Option value="Food">Food</Select.Option>
                        <Select.Option value="Technology">Technology</Select.Option>
                        <Select.Option value="Books">Books</Select.Option>
                        <Select.Option value="Cloths">Cloths</Select.Option>
                        <Select.Option value="Sofware&Games">Sofware&Games</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item type="Price" label="Price" name="price" rules={[{ required: true, message: 'Please input product name!' }]}>
                    <InputNumber placeholder={Product?.price} />
                </Form.Item>
                <Form.Item type="InStock" label="InStock" name="InStock" rules={[{ required: true, message: 'Please input product name!' }]}>
                    <InputNumber placeholder={Product?.InStock} />
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
    </>)

}
export default EditProduct;
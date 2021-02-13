import React from 'react';
import { Form, Row, Col, Select, Button } from 'antd';

const ProductForm = ({ Product, setAnimationModal, setVisible }) => {

    const { Option } = Select;
    return (<>

        <Row justify="center" >
            <Col span={24}>

                <Form.Item name="category" label="Categoria" rules={[{ required: false }]}>
                    <Select placeholder={Product?.category} initialvalues={Product?.category}>
                        <Option value="Food">Food</Option>
                        <Option value="Technology">Technology</Option>
                        <Option value="Books">Books</Option>
                        <Option value="Clothes">Clothes</Option>
                        <Option value="Sofware&Games">Sofware&Games</Option>
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
    </>)

}
export default ProductForm;
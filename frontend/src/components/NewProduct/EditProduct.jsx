import React from 'react';
import { Form, Row, Col, Button } from 'antd';
import ProductForm from './ProductForm.jsx';


const EditProduct = ({ Product, setAnimationModal, setVisible }) => {

    return (<>
        <Row justify="center" >
            <Col span={24}>
                <ProductForm key={Product._id} />
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
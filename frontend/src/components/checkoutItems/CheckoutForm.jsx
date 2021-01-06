import React, { useState } from 'react'
import { Input, Col, Row, Form, Button } from "antd";

const CheckoutForm = props => {

    const [isLoading] = useState(false);
    return (
        <Form onSubmit="">
            <Form.Item label="Name on card" colon={true}
                rules={[{ required: true, message: "Name is required" }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Address" colon={false}
                rules={[{ required: true, message: "Address is required" }]}>
                <Input />
            </Form.Item>
            <Input.Group>
                <Row gutter={12}>
                    <Col span={12}>
                        <Form.Item label="City" colon={false}
                            rules={[{ required: true, message: "City is required" }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label="State" colon={false}
                            rules={[{ required: true, message: "State is required" }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label="ZIP" colon={false}
                            rules={[{ required: true, message: "Zip code is required" }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
            </Input.Group>
            <Form.Item label="Card"
                colon={false}
                rules={[{ required: true, message: "Card is required" }]}>
                <Input />
            </Form.Item>
            <Button
                loading={isLoading}
                type="primary"
                htmlType="submit"
                className="checkout-button"
                disabled=""
            >
                Submit
      </Button>
        </Form>
    )
}
export default CheckoutForm;

import React from 'react'
import { Col, Row } from "antd";
import './style.scss';
const OrderSummary = () => {
    return (
        <div className="order-summary">
            <Row>
                <Col span={1}>
                    <div className="divider"></div>
                </Col>
                <Col span={23}>
                    <h1>Order Summary</h1>
                    <Row>
                        <Col span={12}>
                            <div className="order-item">
                                <h3>Items: </h3>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="order-item-price">
                                <p>4</p>
                            </div>
                        </Col>
                    </Row>

                    <hr />
                    <h3>Total to be charged: € 10.00</h3>
                </Col>
            </Row>
        </div>
    )
}
export default OrderSummary;

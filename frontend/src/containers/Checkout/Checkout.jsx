import React from 'react';
import { Col, Row } from "antd";
//import CheckoutForm from '../../components/checkoutItems/CheckoutForm.jsx';
//import OrderSummary from '../../components/checkoutItems/OrderSummary.jsx';
import './Checkout.scss';

const Checkout = () => {
    return (
        <Row>
            <Col offset={6} span={12} className="stripe-form-container">
                <div className="stripe-form">
                    <Row gutter={12}>
                        <h2>checkout page</h2>
                    </Row>
                </div>
            </Col>
        </Row>
    )
}
export default Checkout;

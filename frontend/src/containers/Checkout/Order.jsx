import React from 'react';
import { connect } from 'react-redux'
import { Input, notification, Form, Button } from 'antd';
import { createOrder } from '../../redux/actions/orderActions'; import './Order.scss'
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const Order = props => {


    const userId = props.user.isUser?._id;
    const totalItems = props.cart?.reduce((a, c) => a + c.count, 0);
    const totalPay = props.cart.reduce((a, c) => a + c.price * c.count, 0).toFixed(2);
    const array = props.cart.map(({ _id, count }) => ({ product: _id, quantity: count }));

    const registerOrder = order => {
        const body = {
            items: array,
            expenditure: totalPay,
            shippingAddress: order,
            user: userId
        }
        createOrder(body).then(() => {
            notification.success({ message: 'Register', description: 'New Product created!' })

        }).catch(error => {
            console.error(error)
            notification.error({ message: 'Error', description: 'Unable to create new product.Check the input data.' })
        })
    }

    return (
        < >
            <div className="updateRegister"><h2>Your Order</h2> </div>
            <hr />
            <div className="orderItems">
                {props.cart?.map((item) =>
                    <div className="order-item" key={item._id}>
                        <img src="" alt=""></img>
                        <span className="name " >{item.name}</span>
                        <h4 className="price" > {item.count} x {item.price} €</h4>

                        <span className="totalPrice" >{(item.price * item.count).toFixed(2)}</span>
                    </div>
                )}
            </div>
            <hr />
            <h4> Subtotal ({totalItems}) items</h4>
            <h4> Total to pay:{" "}<span>€ {totalPay}</span></h4>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={registerOrder}
                onFinishFailed={console.error}
            >
                <Form.Item
                    placeholder="telephone"
                    label="Telephone"
                    name="telephone"
                    rules={[{ required: true, message: 'Please input telephone number!' }]}
                >
                    <Input placeholder="telephone" />
                </Form.Item>
                <Form.Item
                    placeholder="address"
                    label="Address"
                    name="address"
                    rules={[{ required: true, message: 'Please input your addres!' }]}
                >
                    <Input placeholder="Mar de cristal: street, 1:floor, B:door" />
                </Form.Item>
                <Form.Item
                    placeholder="city"
                    label="City"
                    name="city"
                    rules={[{ required: true, message: 'Please input your city!' }]}
                >
                    <Input placeholder="City you live in" />
                    <Form.Item
                        placeholder="postal Code"
                        label="Postal Code"
                        name="postalCode"
                        rules={[{ required: true, message: 'Please input your postal code!' }]}
                    >
                        <Input placeholder="ex. 28860" />
                    </Form.Item>
                    <Form.Item
                        placeholder="Country"
                        label="Country"
                        name="country"
                        rules={[{ required: true, message: 'Please input your Country!' }]}
                    >
                        <Input placeholder="Country" />
                    </Form.Item>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Accept order
        </Button>
                </Form.Item>
            </Form>

        </>
    )
}
const mapStateToProps = ({ cart, user }) => ({ cart: cart.cart, user: user.user })
export default connect(mapStateToProps)(Order);

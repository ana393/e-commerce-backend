import React from 'react';
import { connect } from 'react-redux';
import { Form, Button, notification } from 'antd';
import { insertProduct } from '../../redux/actions/productActions';
import ProductForm from './ProductForm.jsx';
import './newProduct.scss';
const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};


const NewProduct = () => {


    const register = product => {
        console.log(product);
        insertProduct(product).then(() => {
            notification.success({ message: 'Register', description: 'New Product created!' })

        }).catch(error => {
            console.error(error)
            notification.error({ message: 'Error', description: 'Unable to create new product.Check the input data.' })
        })
    }
    return (
        <div className="newProduct">
            <h2>Create New Product</h2>
            <div className="form">
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={register} onFinishFailed={console.error}
                >
                    <ProductForm />
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Register
                      </Button>
                    </Form.Item>
                </Form>
            </div>

        </div>
    )
}
const mapStateToProps = ({ product }) => ({ product: product.product });
export default connect(mapStateToProps, null)(NewProduct);

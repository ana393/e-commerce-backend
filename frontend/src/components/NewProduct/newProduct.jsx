import React from 'react';
import { Form, Input, Select, InputNumber, Button, Upload, notification } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { insertProduct } from '../../redux/actions/productActions';
import './newProduct.scss';

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
const normFile = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
        return e;
    }

    return e && e.fileList;
};
const NewProduct = () => {


    const register = product => {
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
                    onFinish={register}
                    onFinishFailed={console.error}
                >
                    <Form.Item
                        label="name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label="Category" name="category" rules={[{ required: true, message: 'Please input your username!' }]} >
                        <Select>
                            <Select.Option value="Food">Food</Select.Option>
                            <Select.Option value="Technology">Technology</Select.Option>
                            <Select.Option value="Books">Books</Select.Option>
                            <Select.Option value="Cloths">Cloths</Select.Option>
                            <Select.Option value="Sofware&Games">Sofware&Games</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Price" name="price">
                        <InputNumber />
                    </Form.Item>
                    <Form.Item label="InStock" name="InStock">
                        <InputNumber />
                    </Form.Item>
                    <Form.Item
                        name="upload"
                        label="Upload image"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        extra="image/jpeg/png"
                    >
                        <Upload name="logo" action="/upload.do" listType="picture">
                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                        </Upload>
                    </Form.Item>

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

export default NewProduct;

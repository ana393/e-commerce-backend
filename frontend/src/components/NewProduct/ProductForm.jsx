import React from 'react';
import { Form, Input, Select, InputNumber, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';



const normFile = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
        return e;
    }

    return e && e.fileList;
};

const ProductForm = () => {
    return (
        <>
            <Form.Item
                placeholder="name"
                label="name"
                name="name"
                rules={[{ required: true, message: 'Please input product name!' }]}
            >
                <Input placeholder="name" />
            </Form.Item>
            <Form.Item type="category" label="Category" name="category" rules={[{ required: true, message: 'Please input the category!' }]} >
                <Select>
                    <Select.Option value="Food">Food</Select.Option>
                    <Select.Option value="Technology">Technology</Select.Option>
                    <Select.Option value="Books">Books</Select.Option>
                    <Select.Option value="Cloths">Cloths</Select.Option>
                    <Select.Option value="Sofware&Games">Sofware&Games</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item type="Price" label="Price" name="price" rules={[{ required: true, message: 'Please input product name!' }]}>
                <InputNumber />
            </Form.Item>
            <Form.Item type="InStock" label="InStock" name="InStock" rules={[{ required: true, message: 'Please input product name!' }]}>
                <InputNumber />
            </Form.Item>
            <Form.Item
                type="upload"
                placeholder="image"
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
        </>
    )
}
export default ProductForm;
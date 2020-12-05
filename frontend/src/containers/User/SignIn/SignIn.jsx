import React from 'react'
import { Form, Input, Button } from 'antd';
import { useLocation, Link } from 'react-router-dom';
import './SignIn.scss';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
function SignIn () {
    const location = useLocation();
    const redirect = location.search ? location.search.split('=')[1] : '/'

    return (
        <div className="signIn">
            <h2>Sign In</h2>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}

                onFinishFailed={console.error}
            >

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Sign In
        </Button>
                </Form.Item>
            </Form>
            <div>
                <span>
                    New Customer?{''}
                    <Link to={redirect ? `/signup?redirect=${redirect}` : '/signin'}>SignUp</Link>
                </span>
            </div>
        </div>
    )
}

export default SignIn;

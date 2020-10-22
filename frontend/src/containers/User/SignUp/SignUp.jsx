import React from 'react'
import { Form, Input, Button } from 'antd';
import { useLocation, Link } from 'react-router-dom';
import './SignUp.scss';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
const SignUp = () => {

    const location = useLocation();
    const redirect = location.search ? location.search.split('=')[1] : '/'

    return (
        <div className="signUp">
            <h2>Sign Up</h2>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}

                onFinishFailed={console.error}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
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
                        Register
        </Button>
                </Form.Item>
            </Form>
            <div>
                <span>
                    Have an Account?{''}
                    <Link to={redirect ? `/signin?redirect=${redirect}` : '/signup'}>SignIn</Link>
                </span>
            </div>


        </div>
    );
}

export default SignUp;

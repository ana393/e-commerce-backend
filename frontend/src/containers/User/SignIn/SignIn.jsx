import React, { useRef, useEffect } from 'react'
import { Form, Input, Button, notification } from 'antd';
import { useLocation, Link, useHistory } from 'react-router-dom';
import './SignIn.scss';
import { login } from '../../../redux/actions/userAction';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
const SignIn = () => {

    const location = useLocation();
    const redirect = location.search ? location.search.split('=')[1] : '/'
    const emailInput = useRef(null);//like get get element byId
    const history = useHistory();

    useEffect(() => {
        emailInput.current.focus()
    }, [])

    const Login = user => {
        login(user).then(() => {
            notification.success({ message: 'You are successfully connected!' });
            history.push('/')
        }).catch(error => {
            console.error(error)
            notification.error({ message: 'Invalid entered data', description: 'recheck your email and password' })
        })
    };
    return (
        <div className="signIn">
            <h2>Sign In</h2>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={Login}
                onFinishFailed={console.error}
            >

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input ref={emailInput} />
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
                    <Link to={redirect ? `/signUp?redirect=${redirect}` : '/login'}>SignUp</Link>
                </span>
            </div>
        </div>
    )
}

export default SignIn;

import React from 'react'
import { Form, Input, Button, notification } from 'antd';
import { useLocation, useHistory, Link } from 'react-router-dom';
import './SignUp.scss';
import { signup } from '../../../redux/actions/userAction';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
const SignUp = () => {
    const history = useHistory();
    const location = useLocation();
    const redirect = location.search ? location.search.split('=')[1] : '/'

    const register = user => {
        signup(user).then(() => {
            notification.success({ message: 'Register', description: 'You signed up successfully!' })
            history.push('/signin')
        }).catch(error => {
            console.error(error)
            notification.error({ message: 'Error', description: 'Error trying to register!' })
        })
    }


    return (
        <div className="signUp">
            <h2>Sign Up</h2>
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
            </div>

            <div>
                <span>
                    Have an Account ?{''}
                    <Link to={redirect ? `/signin?redirect=${redirect}` : '/signup'}>SignIn</Link>
                </span>
            </div>

        </div>
    );
}

export default SignUp;

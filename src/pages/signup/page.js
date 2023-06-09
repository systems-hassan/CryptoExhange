import { HomeOutlined, LockOutlined, MailOutlined, UploadOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Col, Form, Input, Layout, Row } from 'antd';
import React from 'react';
import AppFooter from '../../components/footer';
import Navbar from '../../components/navbar';
import { User } from '../../services/user.service';

const SignupForm = () => {
    const onFinish = (values) => {
        new User(values.name, values.password, values.address, values.email, values.cnic).addUser();
        window.location = '/login';
    };

    return (
        <Layout >
            <Navbar pathname="/signup" />
            <Row justify="center" align="middle" style={{ width: '100vw', height: '100vh' }}>
                <Card >
                    <Row justify="start">
                        <Col xs={24} sm={10}>
                            <img src="https://www.techicy.com/wp-content/uploads/2020/05/Cryptocurrency-Exchange.png" alt="Signup" style={{ width: '100%', height: '100%' }} />
                        </Col>
                        <Col xs={24} sm={10} style={{ padding: '5%' }}>
                            <Form onFinish={onFinish} layout="vertical">
                                <Form.Item
                                    name="name"
                                    label="Name"
                                    rules={[{ required: true, message: 'Please enter your name' }]}
                                >
                                    <Input prefix={<UserOutlined />} placeholder="Enter your name" />
                                </Form.Item>
                                <Form.Item
                                    name="email"
                                    label="Email"
                                    rules={[
                                        { required: true, message: 'Please enter your email' },
                                        { type: 'email', message: 'Please enter a valid email' },
                                    ]}
                                >
                                    <Input prefix={<MailOutlined />} placeholder="Enter your email" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    label="Password"
                                    rules={[{ required: true, message: 'Strong password needed!', pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()\-=_+{}[\]|;:"<>,./?]).{8,}$/ }]}
                                >
                                    <Input.Password prefix={<LockOutlined />} placeholder="Enter your password" />
                                </Form.Item>
                                <Form.Item
                                    name="address"
                                    label="Home Address"
                                    rules={[{ required: true, message: 'Please enter your home address' }]}
                                >
                                    <Input prefix={<HomeOutlined />} placeholder="Enter your home address" />
                                </Form.Item>
                                <Form.Item
                                    name="cnic"
                                    label="CNIC Document (PDF)"
                                    rules={[{ required: true, message: 'Please upload your CNIC document' }]}
                                >
                                    <Input type="file" prefix={<UploadOutlined />} />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                                        Sign Up
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                </Card>
            </Row>
            <AppFooter />
        </Layout>
    );
};

export default SignupForm;
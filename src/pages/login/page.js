import { Button, Card, Col, Form, Input, Layout, Row } from 'antd';
import React from 'react';
import AppFooter from '../../components/footer';
import Navbar from '../../components/navbar';
import { User } from '../../services/user.service';

const LoginPage = () => {
  const onFinish = (values) => {
    const users = User.getAllUsers();
    for (let { email, password } of users) {
      if (email == values.email && password == values.password) {
        alert('Successfully logged in...'); return;
      }
    }

    alert('Username and password not found!');
  };

  return (
    <Layout >
      <Navbar pathname="/login"/>
      <Row justify="center" align="middle" style={{ height: '100vh', width: '100vw' }}>
        <Card>
          <Row justify="start" style={{ marginBottom: 16 }}>
            <Col xs={24} sm={10}>
              <img
                src="https://www.techicy.com/wp-content/uploads/2020/05/Cryptocurrency-Exchange.png"
                alt="Crypto Exchange"
                style={{ width: '100%', height: '100% ' }}
              />
            </Col>
            <Col xs={24} sm={14} style={{ padding: '10%' }}>
              <Form name="login-form" onFinish={onFinish}>
                <Form.Item
                  name="email"
                  type="email"
                  rules={[{ required: true, message: 'Please enter your email' }]}
                >
                  <Input placeholder="Email Address" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Please enter your password' }]}
                >
                  <Input.Password placeholder="Password" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" block>
                    Log in
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

export default LoginPage;
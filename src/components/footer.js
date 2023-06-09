import { Button, Col, Form, Input, Layout, Row, Typography } from 'antd';
import React from 'react';

const { Footer } = Layout;
const { Title, Text } = Typography;

const AppFooter = () => {
  const handleSubmit = (values) => {
    console.log('Contact form submitted:', values);
  };

  return (
    <Footer style={{ padding: '2rem', borderTop: '1px dashed white' }}>
    <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
        <Title level={4}>CRYPTOExchange</Title>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
        <Text>
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
        </Text>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
        <Form onFinish={handleSubmit}>
            <Form.Item name="name">
            <Input placeholder="Your Name" />
            </Form.Item>
            <Form.Item name="email">
            <Input placeholder="Your Email" />
            </Form.Item>
            <Form.Item name="message">
            <Input.TextArea placeholder="Your Message" rows={4} />
            </Form.Item>
            <Form.Item>
            <Button type="primary" htmlType="submit">Contact Us!</Button>
            </Form.Item>
        </Form>
        </Col>
    </Row>
    </Footer>
  );
};

export default AppFooter;
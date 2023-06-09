import React, { useState } from 'react';
import { Layout, Menu, Table, Button } from 'antd';
import {
    EditOutlined,
    DeleteOutlined,
    FundOutlined,
    SlidersOutlined,
    InsertRowRightOutlined
} from '@ant-design/icons';
import Navbar from '../../components/navbar';

const { Header, Sider, Content } = Layout;

const DashboardPage = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    };

    const columns = [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: 'Blog Title', dataIndex: 'title', key: 'title' },
        { title: 'Subtitle', dataIndex: 'subtitle', key: 'subtitle' },
        { title: 'Author', dataIndex: 'author', key: 'author' },
        {
            title: 'Actions',
            key: 'actions',
            render: () => (
                <span>
                    <Button type="primary" icon={<EditOutlined />} />
                    <Button type="danger" icon={<DeleteOutlined />} />
                </span>
            ),
        },
    ];

    const data = [
        {
            id: 1,
            title: 'Blog Title 1',
            subtitle: 'Subtitle 1',
            author: 'Author 1',
        },
        {
            id: 2,
            title: 'Blog Title 2',
            subtitle: 'Subtitle 2',
            author: 'Author 2',
        },
        // Add more data as needed
    ];

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    {/* Add your menu items here */}
                    <Menu.Item key="0" >{' '}</Menu.Item>
                    <Menu.Item key="1" icon={<FundOutlined />}>Dashboard</Menu.Item>
                    <Menu.Item key="2" icon={<SlidersOutlined />}>Exhange</Menu.Item>
                    <Menu.Item key="3" icon={<InsertRowRightOutlined />}>Company</Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Navbar pathname="/dashboard" onCollapseClick={toggleCollapse}/>
                <Content style={{ minHeight: '95vh' }}>
                    <Table columns={columns} dataSource={data} />
                </Content>
            </Layout>
        </Layout>
    );
};

export default DashboardPage;
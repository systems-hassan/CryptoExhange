import {
    DeleteOutlined,
    EditOutlined,
    EyeOutlined,
    FundOutlined,
    InsertRowRightOutlined,
    LoadingOutlined,
    SlidersOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, Space, Spin, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import AppFooter from '../../components/footer';
import Navbar from '../../components/navbar';
import articles from '../../utils/data.json';
import AddBlogModal from './components/BlogModal';
import './index.css';

const { Sider, Content } = Layout;

const DashboardPage = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [states, setStates] = useState({
        page: 1, pageSize: 7,
        data: [],
        loading: false,
        modal: false, viewRecord: null, editable: false
    });

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    };

    const handleClick = () => {
        setStates((prev) => ({ ...prev, modal: true }));
    }

    const onCancel = () => {
        setStates((prev) => ({ ...prev, modal: false }));
    }

    const onView = (data) => {
        setStates((prev) => ({ ...prev, modal: true, viewRecord: data }));
    }

    const onEdit = (data) => {
        setStates((prev) => ({ ...prev, modal: true, viewRecord: data, editable: true }));
    }

    const onSubmit = (data) => {
        if (data.id) {
            const tmpList = [...states.data];
            tmpList.splice(data.id - 1, 1);
            tmpList.splice(data.id - 1, 0, data);
            setStates((prev) => ({
                ...prev, data: tmpList, modal: false, viewRecord: null, editable: false
            }));
        }
        else {
            data.id = states.data.length + 1;
            const page = Math.ceil(data.id / states.pageSize);
            setStates((prev) => ({
                ...prev,
                page: page, data: [...prev.data, data], modal: false
            }));
        }
    }

    useEffect(() => {
        setStates((prev) => ({ ...prev, loading: true }));
        setTimeout(() => {
            setStates((prev) => ({ ...prev, data: articles, loading: false }));
        }, 3000);
    }, []);

    const columns = [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: 'Blog Title', dataIndex: 'title', key: 'title' },
        { title: 'Subtitle', dataIndex: 'subtitle', key: 'subtitle' },
        { title: 'Author', dataIndex: 'author', key: 'author' },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <Space>
                    <Button type="primary" icon={<EyeOutlined />} onClick={() => onView(record)} />
                    <Button type="primary" icon={<EditOutlined />} onClick={() => onEdit(record)} />
                    <Button type="danger" icon={<DeleteOutlined />} />
                </Space>
            ),
        },
    ];

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="0" disabled >{' '}</Menu.Item>
                    {/* Add your menu items here */}
                    <Menu.Item key="1" icon={<FundOutlined />}>Dashboard</Menu.Item>
                    <Menu.Item key="2" icon={<SlidersOutlined />}>Exhange</Menu.Item>
                    <Menu.Item key="3" icon={<InsertRowRightOutlined />}>Company</Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Navbar pathname="/dashboard" onCollapseClick={toggleCollapse} />
                <Content style={{ minHeight: '95vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {states.loading ? (
                        <Spin
                            tip="Loading..."
                            size="large"
                            indicator={<LoadingOutlined style={{ fontSize: '5rem', color: '#fff' }} />}
                        />
                    ) : (
                        <div style={{ flex: 1, alignSelf: 'flex-start' }}>
                            {!states.modal ? (
                                <Button className="add-new-article-button" onClick={handleClick}>
                                    Create New
                                </Button>
                            ) : (
                                <AddBlogModal
                                    visible={true}
                                    onCancel={onCancel}
                                    onSubmit={onSubmit}
                                    viewRecord={states.viewRecord}
                                    editable={states.editable}
                                />
                            )}
                            <Table columns={columns} dataSource={states.data} pagination={{
                                total: states.data.length,
                                current: states.page,
                                pageSize: states.pageSize,
                                onChange: (page, pageSize) => {
                                    setStates((prev) => ({ ...prev, page, pageSize }));
                                }
                            }} />
                        </div>
                    )}
                </Content>
                <AppFooter />
            </Layout>
        </Layout>
    );
};

export default DashboardPage;
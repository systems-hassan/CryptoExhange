import {
  InfoCircleOutlined,
  MenuFoldOutlined,
  MenuOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import React, { useState } from 'react';

const { Header } = Layout;

const Navbar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Header style={{ width: '100%', padding: '10px' }}>
        <div className="logo" style={{ float: 'left', color: '#fff', marginRight: '2rem' }}>
          {!(['login', 'signup'].includes(props.pathname)) && (
            <>
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: 'trigger',
                  onClick: props.onCollapseClick,
                }
              )}
            </>
          )}
          {'   '}CRYPTOExchange
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['home']}
          selectedKeys={[props.pathname]}
          style={{ lineHeight: '64px' }}
          triggerSubMenuAction="click"
          inlineCollapsed={collapsed}>
          <Menu.Item key="/about" icon={<InfoCircleOutlined />} onClick={toggleCollapse}
            style={{ borderBottom: props.pathname == "/about" ? "1px solid white" : undefined }}>
            About
          </Menu.Item>
          <Menu.SubMenu
            key="login"
            title={
              <span>
                <UserOutlined />
                <span>User</span>
              </span>
            }
            style={{ float: 'right' }}>
            <Menu.Item key="/login" style={{ borderBottom: props.pathname == "/login" ? "1px solid white" : undefined }}>
              <a href="/login">Login</a>
            </Menu.Item>
            <Menu.Item key="/signup" style={{ borderBottom: props.pathname == "/signup" ? "1px solid white" : undefined }}>
              <a href="/signup">Signup</a>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
        <Button
          type="primary"
          onClick={toggleCollapse}
          style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', display: 'none' }}>
          <MenuOutlined />
        </Button>
      </Header>
    </Layout>
  );
};

export default Navbar;
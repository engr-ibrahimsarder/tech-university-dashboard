import { UploadOutlined, UserOutlined, VideoCameraOutlined, MenuFoldOutlined,
    MenuUnfoldOutlined,} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { createElement } from 'react';
const { Header, Content, Footer, Sider } = Layout;
import React, { useState } from 'react';
import './MainLayout.css'

const MainLayout = () =>{
    const [collapsed, setCollapsed] = useState(false);
    return(
    <Layout style={{height: '100vh'}}>
    <Sider trigger={null} collapsible collapsed={collapsed}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div style={{color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '4rem'}}>
        <h1>Tech University</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['4']}
        items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
          (icon, index) => ({
            key: String(index + 1),
            icon: createElement(icon),
            label: `nav ${index + 1}`,
          }),
        )}
      />
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: '0 0 0 2rem' }} >
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
      </Header>
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: '100%' }}>
          content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Developer Ibrahim</Footer>
    </Layout>
  </Layout>
    );
};
export default MainLayout;
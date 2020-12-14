import React, { useState } from 'react';

import AllProducts from './AllProducts/product';
import Users from './AllUsers/Users';
import { Layout, Menu, Breadcrumb } from 'antd';
import {

    DatabaseOutlined,
    FileOutlined,
    ContactsOutlined,
    PartitionOutlined,

} from '@ant-design/icons';
import './board.scss';
import 'antd/dist/antd.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Board = () => {
    const [col, setCol] = useState(false);
    const onCollapse = (col) => {
        setCol(col)
    }


    return (
        <div>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={col} onCollapse={onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={< DatabaseOutlined />}>
                            Data Base
            </Menu.Item>

                        <SubMenu key="products" title={<span>
                            <PartitionOutlined /><span>Products</span>
                        </span>}>
                            <Menu.Item key="products">Products</Menu.Item>

                        </SubMenu>
                        <SubMenu key="sub2" icon={< ContactsOutlined />} title="Users">
                            <Menu.Item key="4">Users</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<FileOutlined />} title="Orders">
                            <Menu.Item key="5">Orders</Menu.Item>
                        </SubMenu>

                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Products</Breadcrumb.Item>

                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 10, minHeight: 360 }}>
                            <AllProducts />
                        </div>
                        <div className="site-layout-background" style={{ padding: 10, minHeight: 360 }}>
                            <Users />
                        </div>

                    </Content>
                    <Footer style={{ textAlign: 'center' }}>MIMO ©2020 Created by A.T.</Footer>
                </Layout>
            </Layout>

        </div>
    )
}

export default Board;

import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Menu, Layout } from 'antd';
import {

    FileOutlined,
    ContactsOutlined,
    ContainerOutlined,
} from '@ant-design/icons';
import './SideBar.scss';
const { Sider } = Layout;

const SideBar = ({ match }) => {

    const [col, setCol] = useState(false);
    const location = useLocation();

    const onCollapse = (col) => {
        setCol(col)
    }
    return (
        <>
            <Sider collapsible collapsed={col} onCollapse={onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={[location.pathname]} mode="inline" >
                    <Menu.Item key="1" title="Products Data Base" icon={< ContainerOutlined />}>
                        <Link to={`${match.url}/Products_List`} />
                            Products Data Base
                        </Menu.Item>
                    <Menu.Item key="2" title="Users Data Base" icon={< ContactsOutlined />}>
                        <Link to={`${match.url}/Users_List`} />
                            Users Data Base
                        </Menu.Item>
                    <Menu.Item key="3" title="Orders Data Base" icon={< FileOutlined />}>
                        <Link to={`${match.url}/Orders_List`} />
                            Orders Data Base
                        </Menu.Item>
                </Menu>
            </Sider>

        </>
    )
}
export default SideBar;



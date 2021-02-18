import React from 'react';
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from "react-router-dom";
import SideBar from '../../../components/AdminSideBar/SideBar.jsx';
import AllProducts from '../AllProducts/product';
import NewProduct from '../../../components/ProductForm/newProduct.jsx';
import Users from '../AllUsers/Users';
import { Layout } from 'antd';

import './board.scss';
import 'antd/dist/antd.css';
const { Content, Footer } = Layout;


const Board = () => {
    let match = useRouteMatch();
    return (
        <Router>
            <Layout style={{ minHeight: '100vh' }}>
                <SideBar match={match} />
                <Layout className="site-layout">
                    <Content style={{ margin: 0, minHeight: '400' }}>
                        <Switch>
                            <Route path={`${match.path}/Products_List`} component={AllProducts} />
                            <Route path={`${match.url}/Users_List`} component={Users} exact />
                            <Route path={`${match.url}/NewProduct`} component={NewProduct} exact />
                        </Switch>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>MIMO ©2021 Created by A.T.</Footer>
                </Layout>
            </Layout>

        </Router>
    )
}


export default Board;

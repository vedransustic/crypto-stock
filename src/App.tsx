import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import { Layout, Space, Typography } from 'antd'
import { Cryptocurrencies, Home, Navbar, News } from "./components";

const App = () => {

    return (
        <div className="app">
            <div className="navbar">
                <Navbar/>
            </div>
                <div className="main">
                <Layout>
                    <div className="routes">
                        <Switch>
                            <Route exact path="/">
                                <Home/>
                            </Route>
                            <Route exact path="/cryptocurrencies">
                                <Cryptocurrencies simplefied={false}/>
                            </Route>
                            <Route exact path="/news">
                                <News simplefied={false}/>
                            </Route>
                        </Switch>
                    </div>
                </Layout>
                <div className="footer">
                    <Typography.Title level={5} style={{ color: "whitesmoke", textAlign: "center"}}>
                        CryptoHeaven<br/>
                        All rights reserved
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default App
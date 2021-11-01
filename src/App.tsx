import React from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import {Layout, Space, Typography} from 'antd'
import {Cryptocurrencies, CryptoDetails, Exchanges, Home, Navbar, News, StockDetails, Stocks} from "./components";
import {useGetCryptosQuery} from "./services";
import {Coin, GlobalStats} from "./types/Application";
import {LoadingOutlined} from "@ant-design/icons";

const App = () => {

    const { data, isFetching } = useGetCryptosQuery()
    const globalStats: GlobalStats = data?.data?.stats
    const coins: Array<Coin> = data?.data?.coins

    return (
        <div className="app">
            <div className="navbar">
                <Navbar/>
            </div>
            {
                isFetching ?
                    <LoadingOutlined /> :
                    <div className="main">
                    <Layout>
                        <div className="routes">
                            <Switch>
                                <Route exact path="/">
                                    <Home globalStats={globalStats} coins={coins} />
                                </Route>
                                <Route exact path="/cryptocurrencies">
                                    <Cryptocurrencies coins={coins} filtered={false}/>
                                </Route>
                                <Route exact path="/cryptocurrencies/:coinId">
                                    <CryptoDetails/>
                                </Route>
                                <Route exact path="/stocks">
                                    <Stocks/>
                                </Route>
                                <Route exact path="/stocks/:stockId">
                                    <StockDetails />
                                </Route>
                                <Route exact path="/exchanges">
                                    <Exchanges/>
                                </Route>
                                <Route exact path="/news">
                                    <News/>
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
            }
        </div>
    )
}

export default App
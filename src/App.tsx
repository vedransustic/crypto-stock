import React from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import {Layout, Space, Typography} from 'antd'
import {Cryptocurrencies, CryptoDetails, Exchanges, Home, Navbar, News, StockDetails, Stocks} from "./components";
import {useGetCryptosQuery, useGetCryptoNewsQuery} from "./services";
import {Coin, GlobalStats} from "./types/Application";
import {LoadingOutlined} from "@ant-design/icons";

const App = () => {

    const cryptocurrencies = useGetCryptosQuery()
    const globalStats: GlobalStats = cryptocurrencies.data?.data?.stats
    const coins: Array<Coin> = cryptocurrencies.data?.data?.coins
    const cryptoNews = useGetCryptoNewsQuery({newCategory: "Cryptocurrencies Stocks"})
    const news = cryptoNews && cryptoNews.data && cryptoNews.data.value
    console.log("NEWS: ",news)

    return (
        <div className="app">
            <div className="navbar">
                <Navbar/>
            </div>
            {
                cryptocurrencies.isFetching ?
                    <LoadingOutlined /> :
                    <div className="main">
                    <Layout>
                        <div className="routes">
                            <Switch>
                                <Route exact path="/">
                                    <Home globalStats={globalStats} coins={coins} news={news} />
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
                                    <News news={news} filtered={false}/>
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
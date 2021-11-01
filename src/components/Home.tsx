import React from 'react';
import millify from 'millify'
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from 'react-router-dom'
import { Cryptocurrencies, News } from "./index";
import { Coin, GlobalStats } from "../types/Application";

const { Title } = Typography

const Home = (props: { globalStats: GlobalStats; coins: Array<Coin>; }) => {
    const { globalStats, coins } = props
    return (
        <>
            {
                globalStats && <>
                    <Title level={2} className="heading">Global Crypto Stats</Title>
                    <Row>
                        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
                        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
                        <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
                        <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}/></Col>
                        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
                    </Row>
                    <div className="home-heading-container">
                        <Title level={2} className="home-title">Top Rising Crypto</Title>
                        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
                    </div>
                    <Cryptocurrencies coins={coins} filtered={true}/>
                    <div className="home-heading-container">
                        <Title level={2} className="home-title">Crypto News</Title>
                        <Title level={3} className="show-more"><Link to="/news">Show more</Link></Title>
                    </div>
               {/*     <News simplified />*/}
                </>
            }
        </>
    )
}

export default Home
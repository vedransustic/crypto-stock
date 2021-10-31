import React from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'
import { Coin } from "../types";
import {List} from "immutable";

const Cryptocurrencies = (props: { coins: List<Coin> }) => {

    console.log("DATA COIN: ",props.coins)
    return (
        <>
            <Row gutter={[32, 32]} className="crypto-card-container">
                {
                    props.coins.map((coin: Coin) => (
                        <Col xs={24} sm={12} lg={6} className="crypto-card" key={coin.id}>
                            <Link to={`/crypto/${coin.id}`}>
                                <Card
                                    title={`${coin.rank}. ${coin.name}`}
                                    extra={ <img className="crypto-image" src={coin.iconUrl} alt={coin.name}/> }
                                    hoverable
                                >
                                    <p>Price: {coin.price}</p>
                                    <p>Market Cap: {millify(coin.marketCap)}</p>
                                    <p>Daily Change: {millify(coin.change)}</p>
                                </Card>
                            </Link>
                        </Col>
                    ))
                }
            </Row>
        </>
    );
};

export default Cryptocurrencies;
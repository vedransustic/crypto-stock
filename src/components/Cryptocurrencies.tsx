import React, {useEffect, useState} from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom'
import { Card, Col, Input, Row} from 'antd'
import { Coin } from "../types/Application";
import {displayNumberOfFilteredCoins} from "../const";
import {ICoinsState} from "../types/Cryptocurrencies";

const Cryptocurrencies = (props: { coins: Array<Coin>, filtered: boolean }) => {

    const compareNumbers = (a: { change: number}, b: { change: number; }) => {
        if(a.change>b.change){
            return -1
        }
        if(a.change<b.change){
            return 1
        }
        return 0
    }
    const getFilteredRisingCoins = (coins: any) => {
        const coinsForSort = [...coins]
        return coinsForSort.sort(compareNumbers).splice(0,displayNumberOfFilteredCoins)
    }

    const coinsToDisplay = props.filtered ? getFilteredRisingCoins(props.coins) : props.coins

    const [data, setData] = useState<ICoinsState>({
        searchTerm: '',
        displayCoins: []
    })

    useEffect(() => {
       return setData({...data, displayCoins: coinsToDisplay.filter((coin) => coin.name.toLowerCase().includes(data.searchTerm.toLowerCase())) });
    }, [data.searchTerm])

    return (
        <>
            {
                !props.filtered &&
                <Row className="search-crypto" gutter={1}>
                    <Input placeholder="Search cryptocurrency" onChange={(e) => setData({...data, searchTerm: e.target.value})}/>
                </Row>
            }

            <Row gutter={[32, 32]} className="crypto-card-container">
                {
                    data.displayCoins.map((coin: Coin) => (
                        <Col xs={24} sm={12} lg={6} className="crypto-card" key={coin.id}>
                            <Link to={`/crypto/${coin.slug}`}>
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
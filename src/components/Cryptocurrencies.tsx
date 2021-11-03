import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom'
import { Card, Col, Input, Row} from 'antd'
import { Coin } from "../types/Application";
import { DISPLAY_NUMBER_OF_FILTERED_COINS, DISPLAY_NUMBER_OF_COINS } from "../const";
import { ICoinsState } from "../types/Cryptocurrencies";
import { useGetCryptosQuery } from "../services";
import { LoadingOutlined } from "@ant-design/icons";

const Cryptocurrencies = (props: { simplefied: boolean; }) => {

    const count = props.simplefied ? DISPLAY_NUMBER_OF_FILTERED_COINS : DISPLAY_NUMBER_OF_COINS
    const {data: cryptocurrencies, isFetching} = useGetCryptosQuery(count)
    const coins: Array<Coin> = cryptocurrencies && cryptocurrencies.data && cryptocurrencies.data.coins

    const [data, setData] = useState<ICoinsState>({
        searchTerm: '',
        displayCoins: []
    })

   useEffect(() => {
       if(!isFetching){
           const filteredData = {...data, displayCoins: coins.filter((coin: { name: string; }) => coin.name.toLowerCase().includes(data.searchTerm.toLowerCase())) }
           setData(filteredData)
       }
    }, [data.searchTerm, coins])

    if( isFetching ) return <LoadingOutlined />

    return (
        <>
            {
                count > 10 &&
                <Row className="search-crypto" gutter={1}>
                    <Input placeholder="Search cryptocurrency" onChange={(e) => setData({...data, searchTerm: e.target.value})}/>
                </Row>
            }

            <Row gutter={[32, 32]} className="crypto-card-container">
                {
                    data.displayCoins.map((coin: Coin) => (
                        <Col xs={24} sm={12} lg={6} className="crypto-card" key={coin.id}>
                            <Link key={coin.id} to={`/cryptocurrencies/${coin.id}`}>
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
    )
}

export default Cryptocurrencies
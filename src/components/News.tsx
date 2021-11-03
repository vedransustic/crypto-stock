import React, { useEffect, useState } from 'react';
import { Typography, Row, Col, Avatar, Card, Input } from "antd";
import { Article, INewsState } from "../types/News";
import Default from "../img/default_news.png"
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services";
import {DISPLAY_NUMBER_OF_FILTERED_NEWS, DISPLAY_NUMBER_OF_NEWS} from "../const";
import { LoadingOutlined } from "@ant-design/icons";


const News = (props:{simplefied: boolean}) => {
    const { Text, Title } = Typography
    const count = props.simplefied ? DISPLAY_NUMBER_OF_FILTERED_NEWS : DISPLAY_NUMBER_OF_NEWS
    const {data: cryptoNews, isFetching} = useGetCryptoNewsQuery({newCategory: "Cryptocurrencies Stocks", count: count})
    const news: Array<Article> = cryptoNews && cryptoNews.value

    const [data, setData] = useState<INewsState>({
        searchTerm: '',
        displayNews: []
    })

    useEffect(() => {
        if(!isFetching){
            const filteredData = {...data, displayNews: news.filter((article: { name: string; }) => article.name.toLowerCase().includes(data.searchTerm.toLowerCase())) }
            setData(filteredData)
        }
    }, [data.searchTerm, news])

    if( isFetching ) return <LoadingOutlined />

    return (
        <>
            {
                count > 10 &&
                <Row className="search-crypto" gutter={1}>
                    <Input placeholder="Search news"
                           onChange={(e) => setData({...data, searchTerm: e.target.value})}/>
                </Row>
            }
                <Row>
                    {
                        data.displayNews.map((item, idx) => (
                            <Col xs={24} sm={12} lg={6} className="news-card" key={idx} style={{display:"flex"}}>
                                <Card className="news-card" hoverable>
                                    <a href={item.url} target="_blank" rel="noreferrer">
                                        <div className="news-image-container">
                                            <Title className="news-title" level={4}>{item.name}</Title>
                                            <img src={item?.image?.thumbnail?.contentUrl || Default}
                                                 style={{maxWidth: '200px', maxHeight: '100px'}} alt="thumbnail"/>
                                        </div>
                                        <p>
                                            {
                                                item.description.length > 100
                                                    ? `${item.description.substring(0, 100)}`
                                                    : item.description
                                            }
                                        </p>
                                        <div className="provider-container">
                                            <div>
                                                <Avatar src={item.provider[0]?.image?.thumbnail?.contentUrl || Crypto}
                                                        alt="image-alt"/>
                                                <Text className="provider-name">{item.provider[0]?.name}</Text>
                                            </div>
                                            <Text>{moment(item.datePublished).startOf('s').fromNow()}</Text>
                                        </div>
                                    </a>
                                </Card>
                            </Col>
                        ))
                    }
            </Row>
        </>
    );
}

export default News
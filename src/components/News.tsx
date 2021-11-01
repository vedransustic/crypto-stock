import React, {useState} from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import { Article } from "../types/News";
import Crypto from "../img/cryptocurrency.png"
import moment from "moment";


const News = (props:{news:Array<Article>, filtered: boolean}) => {

    const { news, filtered } = props
    const { Text, Title } = Typography
    const [newCategory, setNewsCategory] = useState('Cryprtocurrency')

    console.log(news)
    return (
        <Row gutter={[24,24]}>
            {
                !filtered &&
                    <Col span={24}>
                        <Select
                            showSearch
                            className="select-news"
                            placeholder="Select a Crypto"
                            optionFilterProp="children"
                            onChange={(val) => console.log(val)}
                            filterOption={(input, option) => option?.childre.toLowerCase().indexOf(input.toLowerCase())}
                        >
                            <Select.Option value="Cryptocurrency Stock">default</Select.Option>
                            <Select.Option value="Cryptocurrency">Cryptocurrency</Select.Option>
                            <Select.Option value="Stock">Stock</Select.Option>
                        </Select>
                    </Col>
            }
            {
                news.map((item, idx) => (
                    <Col xs={24} sm={12} lg={6} className="news-card" key={ idx }>
                        <Card className="news-card" hoverable>
                            <a href={ item.url } target="_blank" rel="noreferrer">
                                <div className="news-image-container">
                                    <Title className="news-title" level={4}>{ item.name }</Title>
                                    <img src={ item?.image?.thumbnail?.contentUrl || Crypto } style={{maxWidth: '200px', maxHeight: '100px'}} alt="thumbnail"/>
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
                                        <Avatar src={item.provider[0]?.image?.thumbnail?.contentUrl || Crypto} alt="image-alt"/>
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
    );
}

export default News;
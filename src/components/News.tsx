import React, {useEffect, useState} from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import { Article } from "../types/News";
import Default from "../img/default_news.png"
import moment from "moment";
import createHistory from 'history/createBrowserHistory'


const News = (props:{news:Array<Article>, filtered: boolean}) => {

    const { news, filtered } = props
    const { Text, Title } = Typography
    const [state, setState] = useState<Array<Article>>([])

    useEffect(() => {
        return setState(news);
    })

    return (
        <Row gutter={[24,24]}>
            {
                !filtered &&
                    <Col span={24}>

                    </Col>
            }
            {
                state.map((item, idx) => (
                    <Col xs={24} sm={12} lg={6} className="news-card" key={ idx }>
                        <Card className="news-card" hoverable>
                            <a href={ item.url } target="_blank" rel="noreferrer">
                                <div className="news-image-container">
                                    <Title className="news-title" level={4}>{ item.name }</Title>
                                    <img src={ item?.image?.thumbnail?.contentUrl || Default } style={{maxWidth: '200px', maxHeight: '100px'}} alt="thumbnail"/>
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
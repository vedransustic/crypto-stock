import React from 'react';
import { Button, Menu, Typography, Avatar} from 'antd';
import { Link } from 'react-router-dom'
import { HomeOutlined, TransactionOutlined, BulbOutlined, WalletOutlined, StockOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import icon from '../img/cryptocurrency.png'

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large"/>
                <Typography.Title level={2} className="logo">
                    <Link to="/">Cryptoverse</Link>
                </Typography.Title>

            </div>
            <Menu theme="dark">
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item icon={<WalletOutlined />}>
                    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<TransactionOutlined />}>
                    <Link to="/exchanges">Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon={<StockOutlined />}>
                    <Link to="/stocks">Stocks</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined />}>
                    <Link to="/news">News</Link>
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default Navbar;
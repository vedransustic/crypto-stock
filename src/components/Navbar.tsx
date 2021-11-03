import React, {useEffect, useState} from 'react';
import { Menu, Typography, Avatar, Button } from 'antd';
import { Link } from 'react-router-dom'
import { HomeOutlined, BulbOutlined, WalletOutlined, MenuOutlined  } from "@ant-design/icons";
import icon from '../img/cryptocurrency.png'

const Navbar = () => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState<number>(1024);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize <= 800) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large"/>
                <Typography.Title level={2} className="logo">
                    <Link to="/">Crypto Nesto</Link>
                </Typography.Title>
                <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>

            </div>
            {activeMenu &&
                <Menu theme="dark">
                    <Menu.Item icon={<HomeOutlined/>} key={"home"}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<WalletOutlined/>} key={"cryptocurrencies"}>
                        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined/>} key={"news"}>
                        <Link to="/news">News</Link>
                    </Menu.Item>
                </Menu>
            }
        </div>
    );
};

export default Navbar;
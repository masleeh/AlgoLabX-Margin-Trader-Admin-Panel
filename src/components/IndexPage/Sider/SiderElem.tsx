import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React from 'react'
import { useLocation } from 'react-router-dom';
import NavBarButtons from './NavBarButtons';
import {useNavigate} from 'react-router-dom'

const SiderElem = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const changeTab = (event: any) => {
        switch (event.key) {
            case (1):
                navigate('/account')
                break
            case (2):
                navigate('/strategies')
                break
            default:
                return
        }
    }

    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
        >
            <div className="logo">
                <div className='img-container' style={{maxWidth: 80, margin: "20px auto 5px auto", pointerEvents: "none", userSelect: "none"}}>
                    <img alt="" src='./images/android-chrome-192x192.png'/>
                </div>
                <h2 style={{color: "#fff", textAlign: "center", fontWeight: 600, fontSize: 18, marginBottom: 10, pointerEvents: "none", userSelect: "none"}}>AlgoLab-X<br />Margin Trade</h2>
            </div>
            <Menu
                onClick={(event) => changeTab(event)}
                theme="dark"
                mode="inline"
                defaultSelectedKeys={location.pathname == "/account" ? ["1"] : ["2"]}
                items={NavBarButtons}>
            </Menu>
        </Sider>
    )
} 


export default SiderElem
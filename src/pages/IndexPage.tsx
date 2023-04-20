import { Layout, Menu } from 'antd';

import React from 'react'
import SiderElem from '../components/IndexPage/Sider/SiderElem';
import MainPageContainer from '../components/IndexPage/MainPage/MainPageContainer';

const IndexPage = () => {
    return (
        <Layout>
            <SiderElem />
            <MainPageContainer />
        </Layout>
    )
}

export default IndexPage
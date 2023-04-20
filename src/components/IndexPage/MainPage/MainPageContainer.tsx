import { Layout } from 'antd'
import { Content} from 'antd/es/layout/layout';
import React, {useEffect} from 'react'
import HeaderContainer from './Header/HeaderContainer';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import AccountContainer from './SemiPages/Account/AccountContainer';
import StrategiesPage from './SemiPages/Strategies/StrategiesPage';
import axios from 'axios'
import { getUrl } from '../../../helpers/getUrl';
import { useSelector } from 'react-redux';
import { IAppState, useAppDispatch } from '../../../redux/store';
import { getAllData } from '../../../redux/thunks/getFullDataThunk';

const MainPageContainer = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const userState = useSelector((state: IAppState) => state.user)

    const getCookiesAndData = async () => {
        axios.defaults.withCredentials = true
        if (userState.user.id === 0) {
            try {
                const response = await axios.get(`${getUrl}/auth/login`)
                console.log(response.data)
                if (response.data.logged === false) {
                    navigate('/login')
                } else {
                    dispatch(getAllData(response.data.user.id))
                }
            } catch (error: any) {
                console.log(error.response.data.message)
            }   
        } else {
            dispatch(getAllData(userState.user.id))
        }
    }

    useEffect(() => {
        getCookiesAndData()
    }, [])

    return (
        <Layout>
            <HeaderContainer />
            <Content
                style={{
                    padding: 24,
                    minHeight: 280,
                    height: "calc(100vh - 64px)",
                    overflowY: 'scroll'
                }}
            >
                <Routes>
                    <Route path="/" element={<Navigate to="account"/>}/>
                    <Route path='account' element={<AccountContainer />}/>
                    <Route path='strategies' element={<StrategiesPage />}/>
                    <Route path='*' element={<div>OOPS PAGE NOT FOUND</div>}/>
                </Routes>
            </Content>
        </Layout>
    )
}

export default MainPageContainer
import { Alert, Button, Popover } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React from 'react'
import { useSelector } from 'react-redux'
import { IAppState, useAppDispatch } from '../../../../redux/store'
import { useNavigate } from 'react-router-dom'
import { getUrl } from '../../../../helpers/getUrl'
import axios from 'axios'
import { actionUserSuccess } from '../../../../redux/actions/actionUser'
import { actionExchangeSuccess } from '../../../../redux/actions/actionExchange'
import { actionStratsSuccess } from '../../../../redux/actions/actionStrategies'

const HeaderContainer = () => {
    const userState = useSelector((state: IAppState) => state.user)
    const successState = useSelector((state: IAppState) => state.success)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const terminateSession = async () => {
        try {
            await axios.get(`${getUrl}/auth/logout`)
            dispatch(actionUserSuccess({}))
            dispatch(actionExchangeSuccess({}))
            dispatch(actionStratsSuccess([]))
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    } 
    
    return (
        <Header style={{backgroundColor: 'white', display: 'flex', justifyContent: successState.message ? 'space-between' : 'end', alignItems: 'center'}}>
            {successState.message && <Alert message={successState.message} type="success" showIcon style={{maxWidth: 800, width: '100%'}}/>}
            <Popover content={<Button type="link" onClick={() => terminateSession()}>Log out</Button>} trigger="click">
                <Button type="text" size="large" style={{fontWeight: 600}} >{userState.user.alias}</Button>
            </Popover>
        </Header>
    )
}

export default HeaderContainer
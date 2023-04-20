import React, {useReducer, useEffect} from 'react'
import Account from './Account'
import { useSelector } from 'react-redux'
import { IAppState, useAppDispatch } from '../../../../../redux/store'
import { upUserReducer, upExchangeReducer, passwordReducer } from './AccountFormReducer'
import {userUpdate, exchangeUpdate, passwordRequest, passwordSuccess, passwordFailed} from './AccountFormActions'
import { nanoid } from 'nanoid'
import { userTvToken } from './AccountFormActions'
import { updateUserThunk } from '../../../../../redux/thunks/updateUserInfoThunk'
import { updateExchangeThunk } from '../../../../../redux/thunks/updateExchangeThunk'
import axios from 'axios'
import { getUrl } from '../../../../../helpers/getUrl'
import { setSuccessMessageThunk } from '../../../../../redux/thunks/setSuccessMessageThunk'
import { Modal, message } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'


const AccountContainer = () => {
    const dispatch = useAppDispatch()
    const userState = useSelector((state: IAppState) => state.user)
    const exchangeState = useSelector((state: IAppState) => state.exchange)

    const [upUserState, upUserDispatch] = useReducer(upUserReducer, userState.user)
    const [upExchangeState, upExchangeDispatch] = useReducer(upExchangeReducer, exchangeState.exchange)
    const [passwordState, passwordDispatch] = useReducer(passwordReducer, {old_password: "", 
        new_password: "", confirm_password: "", loading: false, error: ""})

    const [messageApi, contextHolder] = message.useMessage();
    const [modal, modalContextHolder] = Modal.useModal();

    
    
    const cancelUser = () => {
        upUserDispatch(userUpdate(userState.user))
    }

    const cancelExchange = () => {
        upExchangeDispatch(exchangeUpdate(exchangeState.exchange))
    }

    useEffect(() => {
        upUserDispatch(userUpdate(userState.user))
        upExchangeDispatch(exchangeUpdate(exchangeState.exchange))
    }, [userState.user, exchangeState.exchange])

    const generateToken = () => {
        const newToken = nanoid(20)
        upUserDispatch(userTvToken(newToken))
    }

    const updateUserInfo = () => {
        dispatch(updateUserThunk(userState.user.id, upUserState))
    }

    const updateExchangeInfo = () => {
        dispatch(updateExchangeThunk(userState.user.id, upExchangeState))
    }

    const copyToClipboard = (data: string, content: string) => {
        messageApi.open({
            type: "success",
            content: content
        })
        navigator.clipboard.writeText(data)
    }

    const updatePassword = async () => {
        passwordDispatch(passwordRequest())
        if (passwordState.confirm_password !== passwordState.new_password) {
            return passwordDispatch(passwordFailed("Пароли не совпадают"))
        }
        try {
            const response = await axios.post(`${getUrl}/data/p`, {
                userId: userState.user.id,
                old_password: passwordState.old_password,
                new_password: passwordState.new_password
            })
            dispatch(setSuccessMessageThunk("Ваш пароль успешно обновлён"))
            passwordDispatch(passwordSuccess())
        } catch (error: any) {
            console.log(error)
            passwordDispatch(passwordFailed(error.response.data.message))
        }
    }

    const showModal = () => {
        modal.confirm({
            title: "Вы уверены?",
            icon: <ExclamationCircleOutlined />,
            content: "После изменения ключа вам придется перенастроить уведомления TokenView",
            okText: "Изменить",
            cancelText: "Отменить",
            onOk: () => generateToken()
        })
    }

    return (
        <div className='container'>
            {modalContextHolder}
            {contextHolder}
            <Account 
                upUserState={upUserState}
                upUserDispatch={upUserDispatch}
                upExchangeState={upExchangeState}
                upExchangeDispatch={upExchangeDispatch}
                cancelUser={cancelUser}
                cancelExchange={cancelExchange}
                userError={userState.error}
                userLoading={userState.loading}
                exchangeError={exchangeState.error}
                exchangeLoading={exchangeState.loading}
                passwordState={passwordState}
                passwordDispatch={passwordDispatch}
                generateToken={generateToken}
                updateUserInfo={updateUserInfo}
                updateExchangeInfo={updateExchangeInfo}
                copyToClipboard={copyToClipboard}
                updatePassword={updatePassword}
                showModal={showModal}
            />
        </div>
    )
}

export default AccountContainer
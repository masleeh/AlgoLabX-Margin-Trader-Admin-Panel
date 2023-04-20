import { IUserState } from "../redux/reducers/UserReducer";

type IUser = {
    tg_id: number,
    id: string,
    alias: string,
    tv_access_token: string
}

type IExchange = {
    exchange_name: string,
    api_key: string,
    api_secret: string,
    enabled: boolean
}

type IPassword = {
    old_password: string,
    new_password: string,
    confirm_password: string,
    loading: boolean,
    error: string
}

export interface IAccountForm {
    upUserState: IUser,
    upUserDispatch: any,
    upExchangeState: IExchange,
    upExchangeDispatch: any,
    cancelUser: Function,
    cancelExchange: Function,
    exchangeError: string,
    exchangeLoading: boolean,
    userLoading: boolean,
    userError: string,
    passwordState: IPassword,
    passwordDispatch: Function,
    generateToken: Function,
    updateUserInfo: Function,
    updateExchangeInfo: Function,
    copyToClipboard: Function,
    updatePassword: Function,
    showModal: Function
}
export interface ILogin {
    username: string,
    password: string,
    handleChangeUsername: Function,
    handleChangePassword: Function,
    error: string,
    sendLoginData: Function,
    loading: boolean
}
import { Alert, Button, Checkbox, Form, Input } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { ILogin } from '../../types/Login'

const Login:React.FC<ILogin> = ({username, password, handleChangePassword, handleChangeUsername, error, sendLoginData, loading}) => {
    return (
        <div className='form'>
            <h2 className='form-title'>Авторизация</h2>
            <div className='form-grid'>
                <h3 className='form-input-title'>Имя пользователя</h3>
                <Input size='large' status={error ? 'error' : ''} placeholder="Username" 
                    value={username}
                    onPressEnter={() => sendLoginData()}
                    disabled={loading ? true : false}
                    onChange={(event) => handleChangeUsername(event)}/>
                <h3 className='form-input-title'>Пароль</h3>
                <Input.Password size='large' status={error ? 'error' : ''} placeholder="Password" 
                    value={password}
                    disabled={loading ? true : false}
                    onPressEnter={() => sendLoginData()}
                    onChange={(event) => handleChangePassword(event)}/>
            </div>
            {error && <Alert message={error} type="error" showIcon style={{width: "100%", marginTop: 20}}/>}
            <Button type="primary" size='large' style={{marginTop: 20}} disabled={loading ? true : false}
                onClick={() => sendLoginData()}>Войти</Button>

            <h4 className='form-subtitle'>Нет аккаунта? <Link to="/register" style={{color: "rgb(0, 106, 228)"}}>Зарегистрируйтесь</Link></h4>
        </div>
    )
}

export default Login
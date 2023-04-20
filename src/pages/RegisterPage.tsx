import React, { useState } from 'react'
import Register from '../components/RegisterPage/Register'
import { useAppDispatch } from '../redux/store'
import { useNavigate } from 'react-router-dom'
import { actionUserSuccess } from '../redux/actions/actionUser'
import { getUrl } from '../helpers/getUrl'
import axios from 'axios'

const RegisterPage = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    
    const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }
    
    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const sendLoginData = async () => {
        setError("")
        setLoading(true)
        try {
            const response: any = await axios.post(`${getUrl}/auth/register`, {
                username: username,
                password: password
            })
            if (response.data.id) {
                dispatch(actionUserSuccess({
                    id: response.data.id,
                    alias: response.data.username
                }))
                setLoading(false)
                navigate('/')
            }
        } catch (error: any) {
            setUsername("")
            setPassword("")
            setError(error.response.data.message)
            setLoading(false)
            console.log(error)
        }
    }
    return (
        <div style={{display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh"}}>
            <Register 
            username={username}
            password={password}
            handleChangeUsername={handleChangeUsername}
            handleChangePassword={handleChangePassword}
            error={error}
            sendLoginData={sendLoginData}
            loading={loading}
            />
        </div>
    )
}

export default RegisterPage
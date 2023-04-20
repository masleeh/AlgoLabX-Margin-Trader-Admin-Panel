import React, {useState} from 'react'
import Login from '../components/LoginPage/Login'
import axios from 'axios'
import { getUrl } from '../helpers/getUrl'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../redux/store'
import { actionUserSuccess } from '../redux/actions/actionUser'

const LoginPage = () => {
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
            const response: any = await axios.post(`${getUrl}/auth/login`, {
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
        }
    }

    return (
        <div style={{display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh"}}>
            <Login 
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

export default LoginPage
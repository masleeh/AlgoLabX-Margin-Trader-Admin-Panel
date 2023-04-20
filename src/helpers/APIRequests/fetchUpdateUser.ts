import axios from 'axios'
import { getUrl } from '../getUrl'

export const fetchUpdateUser = async (userId: string, userData: any) => {
    return await axios.post(`${getUrl}/data/user`, {
        id: userId,
        user: userData
    })
}
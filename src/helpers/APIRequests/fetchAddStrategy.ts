import axios from 'axios'
import { getUrl } from '../getUrl'

export const fetchAddStrategy = async (userId: string) => {
    return await axios.post(`${getUrl}/data/strategy`, {
        id: userId
    })
}
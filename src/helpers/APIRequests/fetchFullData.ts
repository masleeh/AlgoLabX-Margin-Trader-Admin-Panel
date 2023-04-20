import axios from 'axios'
import { getUrl } from '../getUrl'

export const fetchFullData = async (userId: string) => {
    return await axios.post(`${getUrl}/data`, {
        id: userId
    })
}
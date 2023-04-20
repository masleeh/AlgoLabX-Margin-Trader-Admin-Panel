import axios from 'axios'
import { getUrl } from '../getUrl'

export const fetchUpdateExchange = async (userId: string, exchange: any) => {
    return await axios.post(`${getUrl}/data/exchange_update`, {
        id: userId,
        exchange: exchange
    })
}
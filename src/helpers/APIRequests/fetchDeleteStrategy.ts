import axios from 'axios'
import { getUrl } from '../getUrl'

export const fetchDeleteStrategy = async (userId: string, strategy: any) => {
    return await axios.post(`${getUrl}/data/strategy_delete`, {
        id: userId,
        strategy: strategy
    })
}
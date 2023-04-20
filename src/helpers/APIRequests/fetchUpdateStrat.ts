import axios from 'axios'
import { getUrl } from '../getUrl'

export const fetchUpdateStrategy = async (userId: string, strategy: any) => {
    return await axios.post(`${getUrl}/data/strategy_update`, {
        id: userId,
        strategy: strategy
    })
}
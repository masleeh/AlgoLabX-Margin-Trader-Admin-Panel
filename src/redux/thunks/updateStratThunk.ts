import { fetchUpdateStrategy } from '../../helpers/APIRequests/fetchUpdateStrat'
import {actionStratsFailed, actionStratsRequest, actionStratsSuccess} from '../actions/actionStrategies'
import { setSuccessMessageThunk } from './setSuccessMessageThunk'

export const updateStratThunk = (userId: string, strategy: any) => {
    return async (dispatch: any) => {
        dispatch(actionStratsRequest())

        if (strategy.enabled && !strategy.symbol) {
            return dispatch(actionStratsFailed(`${strategy.strat_id} Укажите монету для активации стратегии`))
        }

        let summ: number = 0
        let mult: number
        let pq: number
        summ = strategy.base_order_size
        if (strategy.so_pyramiding > 0) {
            for (let i = 0; i < strategy.so_pyramiding; i++) {
                if (i == 0) {
                    mult = strategy.so_qty_value
                } else {
                    mult = mult! * strategy.so_mult_value
                }
                pq = mult * strategy.base_order_size
                summ = summ + pq
            }
        }
        if (summ > 95) {
            return dispatch(actionStratsFailed(`${strategy.strat_id} Объём всех ордеров в стратегии превысил 95%. Уменьшите количество докупок или множители.`))
        }
        try {
            const response = await fetchUpdateStrategy(userId, strategy)
            const dataObj = response.data
            dispatch(setSuccessMessageThunk(`Стратегия "${strategy.strat_name}" успешно обновлена`))
            dispatch(actionStratsSuccess(dataObj.strategies))
        } catch (error: any) {
            console.log(error)
            dispatch(actionStratsFailed(`${strategy.strat_id} ${error.response.data.message}`))
        }
    }
}
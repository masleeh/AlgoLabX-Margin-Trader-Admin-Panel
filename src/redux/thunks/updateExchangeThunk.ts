import { fetchUpdateExchange } from '../../helpers/APIRequests/fetchUpdateExchange'
import {actionExchangeFailed, actionExchangeRequest, actionExchangeSuccess} from '../actions/actionExchange'
import { setSuccessMessageThunk } from './setSuccessMessageThunk'

export const updateExchangeThunk = (userId: string, exchange: any) => {
    return async (dispatch: any) => {
        dispatch(actionExchangeRequest())
        try {
            const response = await fetchUpdateExchange(userId, exchange)
            const dataObj = response.data
            dispatch(actionExchangeSuccess(dataObj.exchange))
            dispatch(setSuccessMessageThunk("Настройки биржи успешно обновлены"))
        } catch (error: any) {
            dispatch(actionExchangeFailed(error.response.data.message))
        }
    }
}
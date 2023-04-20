import {
    actionUserFailed, actionUserRequest, actionUserSuccess
} from '../actions/actionUser'
import {
    actionExchangeFailed, actionExchangeRequest, actionExchangeSuccess
} from '../actions/actionExchange'
import {
    actionStratsFailed, actionStratsRequest, actionStratsSuccess
} from '../actions/actionStrategies'
import { fetchFullData } from '../../helpers/APIRequests/fetchFullData'




export const getAllData = (userId: string) => {
    return async (dispatch: any) => {
        dispatch(actionExchangeRequest())
        dispatch(actionStratsRequest())
        dispatch(actionExchangeRequest())
        try {
            const response = await fetchFullData(userId)
            const dataObj = response.data
            dispatch(actionExchangeSuccess(dataObj.exchange))
            dispatch(actionUserSuccess({
                tg_id: dataObj.tg_id,
                alias: dataObj.alias,
                tv_access_token: dataObj.tv_access_token,
                id: dataObj.id
            }))
            dispatch(actionStratsSuccess(dataObj.strategies))
        } catch (error: any) {
            console.log(error)
            dispatch(actionExchangeFailed(error.response.data.message))
            dispatch(actionStratsFailed(error.response.data.message))
            dispatch(actionUserFailed(error.response.data.message))
        }
    }
}
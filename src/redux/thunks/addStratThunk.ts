import { fetchAddStrategy } from '../../helpers/APIRequests/fetchAddStrategy'
import {actionStratsFailed, actionStratsRequest, actionStratsSuccess} from '../actions/actionStrategies'


export const addStratThunk = (userId: string) => {
    return async (dispatch: any) => {
        dispatch(actionStratsRequest())
        try {
            const response = await fetchAddStrategy(userId)
            const dataObj = response.data
            dispatch(actionStratsSuccess(dataObj.strategies))
        } catch (error: any) {
            console.log(error)
            dispatch(actionStratsFailed(error.response.data.message))
        }
    }
}
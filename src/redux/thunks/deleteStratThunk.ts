import { fetchDeleteStrategy } from '../../helpers/APIRequests/fetchDeleteStrategy'
import {actionStratsFailed, actionStratsRequest, actionStratsSuccess} from '../actions/actionStrategies'

export const deleteStratThunk = (id: string, strategy: any) => {
    return async (dispatch: any) => {
        dispatch(actionStratsRequest())
        try {
            const response = await fetchDeleteStrategy(id, strategy)
            const dataObj = response.data
            dispatch(actionStratsSuccess(dataObj.strategies))
        } catch (error: any) {
            dispatch(actionStratsFailed(error.response.data.message))
        }
    }
}
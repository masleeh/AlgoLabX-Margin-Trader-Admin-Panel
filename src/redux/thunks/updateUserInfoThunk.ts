import { fetchUpdateUser } from '../../helpers/APIRequests/fetchUpdateUser'
import {actionUserFailed, actionUserRequest, actionUserSuccess} from '../actions/actionUser'
import { setSuccessMessageThunk } from './setSuccessMessageThunk'

export const updateUserThunk = (userId: string, userData: any) => {
    return async (dispatch: any) => {
        dispatch(actionUserRequest())
        try {
            const response = await fetchUpdateUser(userId, userData)
            const dataObj = response.data
            dispatch(setSuccessMessageThunk("Настройки пользователя успешно обновлены"))
            dispatch(actionUserSuccess({
                id: dataObj.id,
                tg_id: dataObj.tg_id,
                alias: dataObj.alias,
                tv_access_token: dataObj.tv_access_token
            }))
        } catch (error: any) {
            dispatch(actionUserFailed(error.response.data.message))
        }
    }
}
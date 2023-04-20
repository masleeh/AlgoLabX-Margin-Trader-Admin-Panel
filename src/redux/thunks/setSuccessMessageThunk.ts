import {changeSuccess} from '../actions/actionSuccess'

export const setSuccessMessageThunk = (message: string) => {
    return async (dispatch: any) => {
        dispatch(changeSuccess(message))

        const resetSuccess = () => {
            dispatch(changeSuccess(""))
        }

        setTimeout(resetSuccess, 5000)
    }
}
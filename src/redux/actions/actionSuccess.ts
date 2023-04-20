export const ACTION_SUCCESS_CHANGE = 'ACTION_SUCCESS_CHANGE'

export const changeSuccess = (message: string) => {
    return {
        type: ACTION_SUCCESS_CHANGE,
        payload: message
    }
}
export const ACTION_USER_REQUEST = 'ACTION_USER_REQUEST'
export const ACTION_USER_SUCCESS = 'ACTION_USER_SUCCESS'
export const ACTION_USER_FAILED = 'ACTION_USER_FAILED'

export const actionUserRequest = () => {
    return {
        type: ACTION_USER_REQUEST 
    }
}

export const actionUserSuccess = (data: any) => {
    return {
        type: ACTION_USER_SUCCESS,
        payload: data
    }
} 

export const actionUserFailed = (error: any) => {
    return {
        type: ACTION_USER_FAILED,
        payload: error
    }
}
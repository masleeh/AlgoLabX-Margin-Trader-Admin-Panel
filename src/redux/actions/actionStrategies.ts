export const ACTION_STRATS_REQUEST = 'ACTION_STRATS_REQUEST'
export const ACTION_STRATS_SUCCESS = 'ACTION_STRATS_SUCCESS'
export const ACTION_STRATS_FAILED = 'ACTION_STRATS_FAILED'

export const actionStratsRequest = () => {
    return {
        type: ACTION_STRATS_REQUEST
    }
}

export const actionStratsSuccess = (data: any) => {
    return {
        type: ACTION_STRATS_SUCCESS,
        payload: data
    }
}

export const actionStratsFailed = (error: any) => {
    return {
        type: ACTION_STRATS_FAILED,
        payload: error
    }
}
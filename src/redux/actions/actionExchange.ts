export const ACTION_EXCHANGE_REQUEST = 'ACTION_EXCHANGE_REQUEST'
export const ACTION_EXCHANGE_SUCCESS = 'ACTION_EXCHANGE_SUCCESS'
export const ACTION_EXCHANGE_FAILED = 'ACTION_EXCHANGE_FAILED'

export const actionExchangeRequest = () => {
    return {
        type: ACTION_EXCHANGE_REQUEST
    }
}

export const actionExchangeSuccess = (data: any) => {
    return {
        type: ACTION_EXCHANGE_SUCCESS,
        payload: data
    }
}

export const actionExchangeFailed = (error: any) => {
    return {
        type: ACTION_EXCHANGE_FAILED,
        payload: error
    }
}
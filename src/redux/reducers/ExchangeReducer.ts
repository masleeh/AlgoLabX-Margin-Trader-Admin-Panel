import {
    ACTION_EXCHANGE_FAILED,
    ACTION_EXCHANGE_SUCCESS,
    ACTION_EXCHANGE_REQUEST
} from '../actions/actionExchange'

const initialState = {
    loading: false,
    error: "",
    exchange: {
            exchange_name: "binance",
            api_key: "",
            api_secret: "",
            enabled: false
        }
}

export type IExchange = typeof initialState

const reducer = (state: IExchange = initialState, action: any) => {
    switch (action.type) {
        case ACTION_EXCHANGE_REQUEST:
            return {
                ...state,
                error: "",
                loading: true
            }
        case ACTION_EXCHANGE_SUCCESS:
            return {
                loading: false,
                error: "",
                exchange: action.payload
            }
        case ACTION_EXCHANGE_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }
}


export default reducer
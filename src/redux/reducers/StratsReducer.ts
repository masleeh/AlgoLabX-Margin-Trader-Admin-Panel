import {
    ACTION_STRATS_FAILED,
    ACTION_STRATS_REQUEST,
    ACTION_STRATS_SUCCESS
} from '../actions/actionStrategies'

const initialState = {
    loading: false,
    error: '',
    strategies: []
}

export type IStrats = typeof initialState

const reducer = (state: IStrats = initialState, action: any) => {
    switch (action.type) {
        case ACTION_STRATS_REQUEST:
            return {
                ...state,
                error: "",
                loading: true
            }
        case ACTION_STRATS_SUCCESS:
            return {
                error: "",
                loading: false,
                strategies: action.payload
            }
        case ACTION_STRATS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }
}


export default reducer
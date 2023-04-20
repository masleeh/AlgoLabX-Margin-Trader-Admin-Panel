import {
    ACTION_USER_FAILED,
    ACTION_USER_REQUEST,
    ACTION_USER_SUCCESS
} from '../actions/actionUser'


const initialState = {
    loading: false,
    error: "",
    user: {
        tg_id: 0,
        alias: "user",
        id: 0,
        tv_access_token: ""
    }
}

export type IUserState = typeof initialState

const reducer = (state: IUserState = initialState, action: any) => {
    switch (action.type) {
        case ACTION_USER_REQUEST:
            return {
                ...state,
                error: "",
                loading: true
            }
        case ACTION_USER_SUCCESS:
            return {
                error: "",
                loading: false,
                user: action.payload
            }
        case ACTION_USER_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }
}

export default reducer
import { IUserState } from "../../../../../redux/reducers/UserReducer"


export const upUserReducer = (state: any, action: any) => {
    switch (action.type) {
        case "tg_id":
            return {
                ...state, tg_id: action.payload
            }
        case "alias":
            return {
                ...state, alias: action.payload
            }
        case "tv_access_token":
            return {
                ...state, tv_access_token: action.payload
            }
        case "update": 
            return action.payload

        default: return state
    }
}

export const upExchangeReducer = (state: any, action: any) => {
    switch (action.type) {
        case "exchange_name":
            return {
                ...state, exchange_name: action.payload
            }
        case "api_key":
            return {
                ...state, api_key: action.payload
            }
        case "api_secret":
            return {
                ...state, api_secret: action.payload
            }
        case "enabled": {
            return {
                ...state, enabled: action.payload
            }
        }
        case "update": {
            return action.payload
        }
        default: return state
    }
}


export const passwordReducer = (state: any, action: any) => {
    switch (action.type) {
        case "old_password":
            return {
                ...state, old_password: action.payload
            }
        case "new_password":
            return {
                ...state, new_password: action.payload
            }
        case "confirm_password":
            return {
                ...state, confirm_password: action.payload
            }
        case "reset":
            return {
                old_password: "",
                new_password: "",
                confirm_password: "",
                loading: false,
                error: ""
            }
        case "request":
            return {
                ...state,
                loading: true
            }
        case "success":
            return {
                old_password: "",
                new_password: "",
                confirm_password: "",
                loading: false,
                error: ""
            }
        case "failed":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }
}
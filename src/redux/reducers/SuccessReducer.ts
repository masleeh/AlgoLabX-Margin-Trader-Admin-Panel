import { ACTION_SUCCESS_CHANGE } from "../actions/actionSuccess"



const initialState = {
    message: ""
}

export type ISuccessState = typeof initialState

const reducer = (state: ISuccessState = initialState, action: any) => {
    switch (action.type) {
        case ACTION_SUCCESS_CHANGE:
            return {
                message: action.payload
            }
        default: return state
    }
}

export default reducer
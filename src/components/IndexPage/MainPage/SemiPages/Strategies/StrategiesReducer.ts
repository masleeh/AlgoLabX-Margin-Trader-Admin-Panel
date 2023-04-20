

export const upStrategiesReducer = (state: any, action: any) => {
    switch (action.type) {
        case "strat_id":
            return {
                ...state, strat_id: action.payload
            }
        case "strat_name":
            return {
                ...state, strat_name: action.payload
            }
        case "enabled":
            return {
                ...state, enabled: action.payload
            }
        case "symbol":
            return {
                ...state, symbol: action.payload
            }
        case "capital_percent":
            return {
                ...state, capital_percent: action.payload
            }
        case "base_order_size":
            return {
                ...state, base_order_size: action.payload
            }
        case "so_pyramiding":
            return {
                ...state, so_pyramiding: action.payload
            }
        case "so_qty_value":
            return {
                ...state, so_qty_value: action.payload
            }
        case "so_mult_value":
            return {
                ...state, so_mult_value: action.payload
            }
        case "take_percent":
            return {
                ...state, take_percent: action.payload
            }
        case "stop_percent":
            return {
                ...state, stop_percent: action.payload
            }
        case "so_def_order":
            return {
                ...state, so_def_order: action.payload
            }
        case "so_mult_def_value":
            return {
                ...state, so_mult_def_value: action.payload
            }
        case "update":
            return action.payload
        default: return state
    }
}


export const stratId = (data: string) => {
    return {
        type: "strat_id",
        payload: data
    }
}

export const stratName = (data: string) => {
    return {
        type: "strat_name",
        payload: data
    }
}

export const stratEnabled = (data: boolean) => {
    return {
        type: "enabled",
        payload: data
    }
}

export const stratSymbol = (data: string) => {
    return {
        type: "symbol",
        payload: data
    }
}

export const stratCapitalPercent = (data: number | null | null) => {
    return {
        type: "capital_percent",
        payload: data
    }
}

export const stratBaseOrderSize = (data: number | null) => {
    return {
        type: "base_order_size",
        payload: data
    }
}

export const stratSoPyramiding = (data: number | null) => {
    return {
        type: "so_pyramiding",
        payload: data
    }
}

export const stratSoQtyValue = (data: number | null) => {
    return {
        type: "so_qty_value",
        payload: data
    }
}

export const stratSoMultValue = (data: number | null) => {
    return {
        type: "so_mult_value",
        payload: data
    }
}

export const stratTakePercent = (data: number | null) => {
    return {
        type: "take_percent",
        payload: data
    }
}

export const stratStopPercet = (data: number | null) => {
    return {
        type: "stop_percent",
        payload: data
    }
}

export const stratSoDefOrder = (data: number | null) => {
    return {
        type: "so_def_order",
        payload: data
    }
}

export const stratSoMultDefValue = (data: number | null) => {
    return {
        type: "so_mult_def_value",
        payload: data
    }
}

export const updateStrat = (data: any) => {
    return {
        type: "update",
        payload: data
    }
}
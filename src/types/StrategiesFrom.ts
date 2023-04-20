type IStrat = {
    strat_id: string,
    strat_name: string,
    enabled: boolean,
    symbol: string,
    capital_percent: number,
    base_order_size: number,
    so_pyramiding: number,
    so_qty_value: number,
    so_mult_value: number,
    take_percent: number,
    stop_percent: number,
    so_def_order: number,
    so_mult_def_value: number
}


export interface IStrategies {
    upStratState: IStrat,
    upStratDispatch: Function,
    cancelStrat: Function,
    loading: boolean,
    error: string,
    updateStrategy: Function,
    deleteStrategy: Function,
    copyToClipboard: Function,
    calculatePercent: Function
}
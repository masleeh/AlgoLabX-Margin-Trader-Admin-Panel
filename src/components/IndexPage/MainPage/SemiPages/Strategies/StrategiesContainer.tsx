import React, {useReducer, useEffect} from 'react'
import Strategies from './Strategies'
import { upStrategiesReducer } from './StrategiesReducer'
import { updateStrat } from './StrategiesActions'
import { useSelector } from 'react-redux'
import { IAppState, useAppDispatch } from '../../../../../redux/store'
import { updateStratThunk } from '../../../../../redux/thunks/updateStratThunk'
import { deleteStratThunk } from '../../../../../redux/thunks/deleteStratThunk'
import { message } from 'antd'

interface IStrat {
    stratData: any
}

// const initialState = {
//     strat_id: 1001,
//     strat_name: "Strategy",
//     enabled: false,
//     symbol: "BTC/USDT",
//     capital_percent: 50,
//     base_order_size: 100,
//     so_pyramiding: 0,
//     so_qty_value: 1.3,
//     so_mult_value: 1.5,
//     take_percent: 0,
//     stop_percent: 0,
//     so_def_order: 0.7,
//     so_mult_def_value: 1.5
// }


const StrategiesContainer: React.FC<IStrat> = ({stratData}) => {
    const dispatch = useAppDispatch()
    const stratState = useSelector((state: IAppState) => state.strategies)
    const userState = useSelector((state: IAppState) => state.user)

    
    const [messageApi, contextHolder] = message.useMessage();

    const [upStratState, upStratDispatch] = useReducer(upStrategiesReducer, stratData)
    // console.log(upStratState)
    
    const cancelStrat = () => {
        upStratDispatch(updateStrat(stratData))
    }

    const updateStrategy = () => {
        dispatch(updateStratThunk(userState.user.id, upStratState))
    }

    const deleteStrategy = () => {
        dispatch(deleteStratThunk(userState.user.id, upStratState))
    }

    const copyToClipboard = () => {
        messageApi.open({
            type: "success",
            content: "ID стратегии скопирован в буфер обмена"
        })
        navigator.clipboard.writeText(upStratState.strat_id)
    }

    const calculatePercent = () => {
        let summ: number = 0
        let mult: number
        let pq: number
        summ = upStratState.base_order_size

        for (let i = 0; i < upStratState.so_pyramiding; i++) {
            if (i === 0) {
                mult = upStratState.so_qty_value
            } else {
                mult = mult! * upStratState.so_mult_value
            }
            pq = mult * upStratState.base_order_size
            summ = summ + pq
        }
        return summ.toFixed(2)
    }

    useEffect(() => {
        upStratDispatch(updateStrat(stratData))
    }, [stratData])

    return (
        <>
            {contextHolder}
            <Strategies 
                upStratState={upStratState}
                upStratDispatch={upStratDispatch}
                cancelStrat={cancelStrat}
                loading={stratState.loading}
                error={stratState.error}
                updateStrategy={updateStrategy}
                deleteStrategy={deleteStrategy}
                copyToClipboard={copyToClipboard}
                calculatePercent={calculatePercent}
            />
        </>
    )
}

export default StrategiesContainer
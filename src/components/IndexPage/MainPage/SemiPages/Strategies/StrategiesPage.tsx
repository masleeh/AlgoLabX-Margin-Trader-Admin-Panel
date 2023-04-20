import React from 'react'
import StrategiesContainer from './StrategiesContainer'
import { useSelector } from 'react-redux'
import { IAppState, useAppDispatch } from '../../../../../redux/store'
import { Button } from 'antd'
import { addStratThunk } from '../../../../../redux/thunks/addStratThunk'
import Link from 'antd/es/typography/Link'

const StrategiesPage = () => {
    const stratState = useSelector((state: IAppState) => state.strategies)
    const userState = useSelector((state: IAppState) => state.user)
    const dispatch = useAppDispatch()

    const renderedStrats = stratState.strategies.map((strat: any) => {
        return <StrategiesContainer key={strat.strat_id} stratData={strat}/>
    })

    const addStrat = () => {
        dispatch(addStratThunk(userState.user.id))
    }

    return (
        <div className='container'>
            <div className='acc-row' style={{marginBottom: 20, maxWidth: 938}}>
                <h2 className="strats-title" >Стратегии</h2>
                <Link id='link' target='_blank' href="https://docs.google.com/document/d/1st31CAHaMEI6qbu3uXKN9CxtG6iDtMogdKbn1gNW2Rg/edit">Мануал по стратегиям</Link>
            </div>
            {renderedStrats}
            <Button type="primary" size='large' style={{marginTop: 20}} onClick={() => addStrat()}>
                Добавить стратегию
            </Button>
        </div>
    )
}

export default StrategiesPage
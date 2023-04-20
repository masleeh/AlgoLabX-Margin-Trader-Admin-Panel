import React from 'react'
import { Alert, Button, Checkbox, Input, InputNumber, Popover, Select } from 'antd'
import { CopyFilled, QuestionCircleOutlined } from '@ant-design/icons'
import { coins } from '../../../../../data/coins'
import { IStrategies } from '../../../../../types/StrategiesFrom'
import {
    stratId, stratBaseOrderSize, stratCapitalPercent, stratEnabled, stratSoDefOrder, stratSoMultDefValue,
    stratSoMultValue, stratSoPyramiding, stratSoQtyValue, stratStopPercet, stratSymbol, stratTakePercent, stratName
} from './StrategiesActions'

type ChangeInput = React.ChangeEvent<HTMLInputElement>
type ChangeSelect = string
type ChangeNumber = number | null

const Strategies:React.FC<IStrategies> = ({upStratDispatch, upStratState, cancelStrat, loading, error, updateStrategy, deleteStrategy, copyToClipboard,
    calculatePercent}) => {
    return (
        <div className="strats">
            <div className='strats-row'>
                <div>
                    <h3 className='strats-input-title' style={{maxWidth: 500, fontSize: 16}}>Название стратегии </h3>
                    <Input placeholder="Strategy" style={{width: 300, marginTop: 5}}
                        value={upStratState.strat_name}
                        onChange={(event: ChangeInput) => upStratDispatch(stratName(event.target.value))}/>
                </div>

                <div>
                    <h3 className='strats-input-title'>ID стратегии </h3>
                    <div className="inl-row" style={{marginTop: 5}}>
                        <Input placeholder="strat_id" disabled={true} style={{width: 300, marginRight: 10}}
                            value={upStratState.strat_id}/>
                        <Button icon={<CopyFilled />} onClick={() => copyToClipboard()}/>
                    </div>
                </div>

                <Checkbox style={{marginTop: 20}} 
                    checked={upStratState.enabled} 
                    onChange={() => upStratDispatch(stratEnabled(!upStratState.enabled))}>Активно</Checkbox>
            </div>

            <div className='strats-row' style={{marginTop: 20}}>
                <div>
                    <h3 className='strats-input-title'>Пара</h3>
                    <Select
                        showSearch
                        defaultValue={upStratState.symbol}
                        onChange={(exvalue: ChangeSelect) => upStratDispatch(stratSymbol(exvalue))}
                        style={{ width: 140, marginTop: 5}}
                        options={coins.sort().map((coin) => { return {value: coin, label: coin}})}
                        />
                </div>

                <div>
                    <div className='inl-row fixed'>
                        <h3 className='strats-input-title'>
                        Процент от капитала
                        </h3>
                        <Popover content={<h1 style={{maxWidth: 300 }}>Доля от общего депозита на бирже , используемая на всех шагах сделки в сумме</h1>}
                            title="Процент от капитала" trigger="hover">
                            <QuestionCircleOutlined style={{marginLeft: 0}}/>
                        </Popover>
                    </div>
                    <InputNumber min={1} max={100} defaultValue={50} style={{marginTop: 5, width: 140}}
                        value={upStratState.capital_percent} step="0.1"
                        onChange={(exvalue: ChangeNumber) => upStratDispatch(stratCapitalPercent(exvalue))}/>
                </div>

                <div>
                    <div className='inl-row fixed'>
                        <h3 className='strats-input-title'>
                        Объем стартового ордера
                        </h3>
                        <Popover content={<h1 style={{maxWidth: 300 }}>Объем первого, начального ордера сделки, в доле от всего капитала, выделенного на сделку</h1>}
                            title="Объем стартового ордера" trigger="hover">
                            <QuestionCircleOutlined style={{marginLeft: 0}}/>
                        </Popover>
                    </div>
                    <InputNumber min={1} max={100} defaultValue={100} style={{marginTop: 5, width: 140}}
                        value={upStratState.base_order_size} step="0.1"
                        onChange={(exvalue: ChangeNumber) => upStratDispatch(stratBaseOrderSize(exvalue))}/>
                </div>

                <div>
                    <div className='inl-row fixed'>
                        <h3 className='strats-input-title'>
                        Максимальное количество страховочных ордеров
                        </h3>
                        <Popover content={<h1 style={{maxWidth: 300 }}>Максимальное количество ордеров для усреднения, которое бот может исполнить за время сделки</h1> }
                            title={<h1 style={{maxWidth: 300 }}>Максимальное количество страховочных ордеров</h1>} trigger="hover" >
                            <QuestionCircleOutlined style={{marginLeft: 0}}/>
                        </Popover>
                    </div>
                    <InputNumber min={0} max={100} defaultValue={10} parser={(value: any) => value!.replace('.', '')} style={{marginTop: 5, width: 140}}
                        value={upStratState.so_pyramiding}
                        onChange={(exvalue: ChangeNumber) => upStratDispatch(stratSoPyramiding(exvalue))}/>
                </div>

                <div>
                    <div className='inl-row fixed'>
                        <h3 className='strats-input-title'>
                            Множитель объема первого страхового ордера от стартового
                        </h3>
                        <Popover content={<h1 style={{maxWidth: 300 }}>Множитель, с помощью которого расчитывается объем первого страхового ордера от объема базового ордера</h1>}
                            title={<h1 style={{maxWidth: 300 }}>Множитель объема первого страхового ордера от стартового</h1>} trigger="hover">
                            <QuestionCircleOutlined style={{marginLeft: 0}}/>
                        </Popover>
                    </div>
                    <InputNumber min={0.1} defaultValue={1} max={10} style={{marginTop: 5, width: 140}}
                        value={upStratState.so_qty_value} step="0.1"
                        onChange={(exvalue: ChangeNumber) => upStratDispatch(stratSoQtyValue(exvalue))}/>
                </div>
            </div>

            <div className="strats-row" style={{marginTop: 20}}>
                    
                <div>
                    <div className='inl-row fixed'>
                        <h3 className='strats-input-title'>
                            Множитель объема страховых ордеров
                        </h3>
                        <Popover content={<h1 style={{maxWidth: 300 }}>Множитель, с помощью которого расчитывается объем последующих страховых ордеров от объема первого страхового ордера, путем умножения</h1>} 
                            title="Множитель объема страховых ордеров" trigger="hover">
                            <QuestionCircleOutlined style={{marginLeft: 0}}/>
                        </Popover>
                    </div>
                    <InputNumber min={0.1} max={10} defaultValue={10} style={{marginTop: 5, width: 140}}
                        value={upStratState.so_mult_value} step="0.1"
                        onChange={(exvalue: ChangeNumber) => upStratDispatch(stratSoMultValue(exvalue))}/>
                </div>

                <div>
                    <div className='inl-row fixed'>
                        <h3 className='strats-input-title'>
                        Закрытие по доходности, %
                        </h3>
                        <Popover content={<h1 style={{maxWidth: 300 }}>Сколько прибыли должен получать бот с каждой сделки. Комиссия биржи учитывается автоматически. Бот заработает ровно столько, сколько указано в этом параметре</h1>} 
                            title="Закрытие по доходности, %" trigger="hover">
                            <QuestionCircleOutlined style={{marginLeft: 0}}/>
                        </Popover>
                    </div>
                    <InputNumber min={0} max={100} defaultValue={10} style={{marginTop: 5, width: 140}}
                        value={upStratState.take_percent} step="0.1"
                        onChange={(exvalue: ChangeNumber) => upStratDispatch(stratTakePercent(exvalue))}/>
                </div>

                <div>
                    <div className='inl-row fixed'>
                        <h3 className='strats-input-title'>
                            Закрытие по убытку, %
                        </h3>
                        <Popover content={<h1 style={{maxWidth: 300 }}>Тот процент, к которому цена должна двигаться в направлении, противоположном цели по тейк-профиту, после чего бот закроет сделку по рынку, чтобы ограничить возможные убытки, чем сохранять сделку открытой.
                        Стоп лосс рассчитывается от цены срдней цены после произведенного крайнего страхового ордера</h1>} 
                            title="Закрытие по убытку, %" trigger="hover">
                            <QuestionCircleOutlined style={{marginLeft: 0}}/>
                        </Popover>
                    </div>
                    <InputNumber min={0} max={100} defaultValue={10} style={{marginTop: 5, width: 140}}
                        value={upStratState.stop_percent} step="0.1"
                        onChange={(exvalue: ChangeNumber) => upStratDispatch(stratStopPercet(exvalue))}/>
                </div>

                <div>
                    <div className='inl-row fixed'>
                        <h3 className='strats-input-title fixed'>
                        Отклонение цены для выставления страховочного ордера
                        </h3>
                        <Popover content={<h1 style={{maxWidth: 300 }}>Расстояние в % между страховочными ордерами, т.е  на акое отклонение должно произойти в от базового ордера (вниз для лонга и вверх для шорта) для совершения первого страхового ордера</h1>} 
                            title={<h1 style={{maxWidth: 300 }}>Отклонение цены для выставления страховочного ордера</h1>} trigger="hover">
                            <QuestionCircleOutlined style={{marginLeft: 0}}/>
                        </Popover>
                    </div>
                    <InputNumber min={0.1} max={1000} defaultValue={10} style={{marginTop: 5, width: 140}}
                        value={upStratState.so_def_order} step="0.1"
                        onChange={(exvalue: ChangeNumber) => upStratDispatch(stratSoDefOrder(exvalue))}/>
                </div>

                <div>
                    <div className='inl-row fixed'>
                        <h3 className='strats-input-title'>
                        Множитель шага страховочных ордеров
                        </h3>
                        <Popover content={<h1 style={{maxWidth: 300 }}>Множитель шага страховочных ордеров используется для умножения процента отклонения цены для каждого последующего страховочного ордера. Использование здесь большего значения увеличит расстояние между страховочными ордерами, и тем самым уменьшит их использование при усреднении активной сделки</h1>} 
                            title="Множитель шага страховочных ордеров" trigger="hover">
                            <QuestionCircleOutlined style={{marginLeft: 0}}/>
                        </Popover>
                    </div>
                    <InputNumber min={0.5} max={100} defaultValue={10} style={{marginTop: 5, width: 140}}
                        value={upStratState.so_mult_def_value} step="0.1"
                        onChange={(exvalue: ChangeNumber) => upStratDispatch(stratSoMultDefValue(exvalue))}/>
                </div>

            </div>

            {(upStratState.so_pyramiding > 0) && <Alert message={`Суммарный объём всех ордеров в стратегии: ${calculatePercent()}%`} type={calculatePercent() > 95 ? "warning": "info"} showIcon  style={{marginTop: 20}}/>}

            <div className='strats-row' style={{marginTop: 20}}>
                <div className='strats-row' style={{width: 340}}>
                    <Button type="primary" size="large" disabled={loading ? true : false} onClick={() => updateStrategy()}>
                        Сохранить
                    </Button>
                    <Button size="large" onClick={() => cancelStrat()}>Отменить</Button>
                    <Button danger size="large" onClick={() => deleteStrategy()}>Удалить</Button>
                </div>
                
            </div>

            {error.startsWith(upStratState.strat_id) && <Alert
                message="Ошибка"
                description={error.replace(upStratState.strat_id, "")}
                type="error"
                showIcon
                style={{marginTop: 20}}
            />}

        </div>
    )
}

export default Strategies
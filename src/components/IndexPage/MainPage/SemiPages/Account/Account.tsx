import React from 'react'
import { CopyFilled, QuestionCircleOutlined, RedoOutlined } from '@ant-design/icons'
import { Alert, Button, Card, Checkbox, Input, InputNumber, Popover, Select, Statistic } from 'antd'
import { IAccountForm } from '../../../../../types/AccountFrom'
import {
    userAlias, userTgId, exchangeName, exchangePublicKey, exchangeSecretKey, exchangeEnabled, exchangeUpdate,
    passwordOld, passwordNew, passwordConfirm
} from './AccountFormActions'
import Link from 'antd/es/typography/Link'

type ChangeInput = React.ChangeEvent<HTMLInputElement>
type ChangeSelect = string

const Account:React.FC<IAccountForm> = ({upUserState, upUserDispatch, upExchangeDispatch, upExchangeState,
    cancelExchange, cancelUser, userError, userLoading, exchangeError, exchangeLoading, passwordState,
    passwordDispatch, generateToken, updateUserInfo, updateExchangeInfo, copyToClipboard, updatePassword, showModal}) => {
    return (
        <div className='acc'>
        <h2 className='acc-title'>Настройки пользователя</h2>
        <div className='acc-row' style={{marginTop: 20}}>

            <div>
                <h3 className='acc-input-title'>Имя пользователя</h3>
                <Input size="large" placeholder="Username" style={{width: 400, marginTop: 5}} 
                    value={upUserState.alias} 
                    onChange={(event: ChangeInput) => upUserDispatch(userAlias(event.target.value))}/>
            </div>

            <div>
                <div className='inl-row'>
                    <h3 className='acc-input-title'>Telegram ID</h3>
                    <Popover content={<p>Уникальный идентификатор<br />вашего аккаунта в Telegram,<br />который можно получить<br />у нашего бота</p>} title="Telegram ID" trigger="hover">
                        <QuestionCircleOutlined style={{marginLeft: 8}}/>
                    </Popover>
                    <Link target="_blank" className='link' href="https://t.me/margin_tv_trader_bot" style={{fontSize: 14, fontWeight: 700, marginLeft: 80}}>Узнать TG_ID с помощью бота</Link>
                </div>
                <InputNumber size="large" placeholder="Telegram ID" style={{width: 400, marginTop: 5}}
                    onChange={(exvalue: any) => upUserDispatch(userTgId(exvalue))}
                    parser={(value: any) => value!.replace(/\$\s?|(,*)/g, '')}
                    value={upUserState.tg_id}
                    controls={false}/>
            </div>
        </div>

        <h3 className='acc-input-title' style={{marginTop: 20}}>Ключ для уведомлений TradingView
            <Popover content={""} title="Trading View" trigger="hover">
                <QuestionCircleOutlined style={{marginLeft: 8}}/>
            </Popover>
        </h3>
        <div className='acc-row' style={{marginTop: 5}}>
            <Input disabled size="large" placeholder="tv_access_token" style={{width: 800}} 
                value={upUserState.tv_access_token}/>
            <Button size="large" icon={<CopyFilled />} onClick={() => copyToClipboard(upUserState.tv_access_token, "Ключ для уведомлений скопирован в буфер обмена")}/>
            <Button size="large" shape="circle" icon={<RedoOutlined />} type="primary"
                onClick={() => showModal()}/>
        </div>

        {userError && <Alert message={userError} type="error" showIcon style={{marginTop: 20, maxWidth: 900}}/>}

        <div className='acc-row' style={{marginTop: 20, maxWidth: 230}}>
            <Button type="primary" size="large" onClick={() => updateUserInfo()} disabled={userLoading ? true : false}>
                Сохранить
            </Button>
            <Button danger size="large" onClick={() => cancelUser()}>Отменить</Button>
        </div>



        <h2 className='acc-title' style={{marginTop: 50}}>Биржи</h2>

        

        <div className='acc-row' style={{marginTop: 20}}>
            <div className='inl-row'>
                <Card style={{maxWidth: 220, marginTop: 0}}>
                    <h3 style={{fontSize: 14, color: 'rgba(0,0,0,.45)', fontWeight: 600}}>IP сервера:</h3>
                    <Button type="link" style={{fontSize: 20, paddingLeft: 0}} 
                        onClick={() => copyToClipboard("161.35.193.244", "IP адрес сервера скопирован в буфер обмена")}>161.35.193.244</Button>
                </Card>
                <Select
                    defaultValue={upExchangeState.exchange_name}
                    style={{ width: 180, marginLeft: 50 }}
                    size="large"
                    options={[
                        { value: 'binance', label: 'Binance' },
                    ]}
                    onChange={(exvalue: ChangeSelect) => upExchangeDispatch(exchangeName(exvalue))}
                    />
                <Checkbox checked={upExchangeState.enabled} style={{marginLeft: 50}}
                onChange={() => upExchangeDispatch(exchangeEnabled(!upExchangeState.enabled))}>Активно</Checkbox>
            </div>
        </div>

        <div className='acc-row' style={{marginTop: 20}}>
            <div>
                <h3 className='acc-input-title'>API Public Key</h3>
                <Input size="large" placeholder="API Public Key" style={{width: 400, marginTop: 5}}
                    value={upExchangeState.api_key}
                    onChange={(event: ChangeInput) => upExchangeDispatch(exchangePublicKey(event.target.value))}/>
            </div>
            <div>
                <h3 className='acc-input-title'>API Secret Key</h3>
                <Input size="large" placeholder="API Secret Key" style={{width: 400, marginTop: 5}}
                    value={upExchangeState.api_secret}
                    onChange={(event:ChangeInput) => upExchangeDispatch(exchangeSecretKey(event.target.value))}/>
            </div>
        </div>

        {exchangeError && <Alert message={exchangeError} type="error" showIcon style={{marginTop: 20, maxWidth: 900}}/>}

        <div className='acc-row' style={{marginTop: 20, maxWidth: 230}}>
            <Button type="primary" size="large" onClick={() => updateExchangeInfo()} disabled={exchangeLoading ? true : false}>
                Сохранить
            </Button>
            <Button danger size="large" onClick={() => cancelExchange()}>Отменить</Button>
        </div>



        <h2 className='acc-title' style={{marginTop: 50}}>Смена пароля</h2>
        <div className='acc-grid'>
            <h3 className='acc-input-title'>Старый пароль</h3>
            <Input.Password size="large" placeholder="Old password" style={{width: 300}}
                value={passwordState.old_password}
                onChange={(event: ChangeInput) => passwordDispatch(passwordOld(event.target.value))}/>
            <h3 className='acc-input-title'>Новый пароль</h3>
            <Input.Password size="large" placeholder="New password" style={{width: 300}}
                value={passwordState.new_password}
                onChange={(event: ChangeInput) => passwordDispatch(passwordNew(event.target.value))}/>
            <h3 className='acc-input-title'>Повторить пароль</h3>
            <Input.Password size="large" placeholder="Confirm password" style={{width: 300}}
                value={passwordState.confirm_password}
                onChange={(event: ChangeInput) => passwordDispatch(passwordConfirm(event.target.value))}/>
        </div>

        {passwordState.error && <Alert message={passwordState.error} type="error" showIcon style={{marginTop: 20, maxWidth: 900}}/>}

        <Button type="primary" size="large" disabled={passwordState.loading ? true : false} style={{marginTop: 20, marginBottom: 20}}
            onClick={() => updatePassword()}>
                Изменить
        </Button>

    </div>
    )
}

export default Account
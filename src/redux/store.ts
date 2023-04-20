import { useDispatch } from 'react-redux'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import logger from "redux-logger"
import thunk from 'redux-thunk'
import UserReducer from './reducers/UserReducer'
import ExchangeReducer from './reducers/ExchangeReducer'
import StratsReducer from './reducers/StratsReducer'
import SuccessReducer from './reducers/SuccessReducer'

const rootReducer = combineReducers({
    user: UserReducer,
    exchange: ExchangeReducer,
    strategies: StratsReducer,
    success: SuccessReducer
})



const store = createStore(rootReducer, applyMiddleware(thunk))

type IRootReducer = typeof rootReducer
export type AppDispatch = typeof store.dispatch
export type IAppState = ReturnType<IRootReducer>

export const useAppDispatch: () => AppDispatch = useDispatch

export default store
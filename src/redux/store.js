/*
    该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/
import { createStore, applyMiddleware, combineReducers } from 'redux'  // applyMiddleware 、thunk异步action中间件
import thunk from 'redux-thunk'
import adReducer from './reducer/ad'

const allReducers = combineReducers({
    ad: adReducer
})

export default createStore(allReducers, applyMiddleware(thunk))
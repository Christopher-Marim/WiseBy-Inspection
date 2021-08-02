
import { combineReducers, createStore } from 'redux'
import { AppState } from './types';

import osList from './os-list/reducer'

const reducers = combineReducers<AppState | any>({
    osList
})

const storeConfig = createStore(reducers)

export default storeConfig
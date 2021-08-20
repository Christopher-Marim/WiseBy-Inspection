
import { combineReducers, createStore } from 'redux'
import { AppState } from './types';

import osList from './os-list/reducer'
import darkModeContextReducer from './darkmode/reducer'
import EquipmentList from './equipment-list/reducer';

const reducers = combineReducers<AppState | any>({
    osList,
    darkModeContextReducer,
    EquipmentList
})

const storeConfig = createStore(reducers)

export default storeConfig
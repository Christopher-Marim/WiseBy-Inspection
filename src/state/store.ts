
import { combineReducers,createStore  } from 'redux'
//import { AppState } from './types';

import osList from './os-list/reducer'

const reducers = combineReducers({
    osList:osList
})


const storeConfig = createStore(reducers)

export default storeConfig
import {createStore, combineReducers} from 'redux'
import UserReducer from './os-list/user'
import InventoryReducer from './os-list/actions'
import ShowModalReducer from './os-list/showModal'
import BarcodeReducer from './os-list/barcodes'
import NoticiasReducer from './os-list/noticiasRedux'


const reducers = combineReducers({
    user: UserReducer,
    inventorys: InventoryReducer,
    showModal: ShowModalReducer,
    barcodes: BarcodeReducer,
    noticias: NoticiasReducer

})

const storeConfig = createStore(reducers)

export default storeConfig
import {historyReducer} from './historyReducer';
import {pointsReducer} from './pointsReducer';
import {productsReducer} from './productsReducer';
import {redeemProductsReducer} from './redeemProductsReducer';
import {userReducer} from './userReducer';
import {filterReducer} from './filterReducer'
import {combineReducers} from 'redux';

export default combineReducers({
    historyReducer,
    pointsReducer,
    productsReducer,
    redeemProductsReducer,
    userReducer,
    filterReducer
})

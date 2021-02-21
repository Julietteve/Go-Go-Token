import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import rootReducer from '../reducer';

const storeFactory = ()=> createStore(rootReducer, applyMiddleware(thunk))

export default storeFactory;
import axios from "axios";
import {getUserStart,getUserSuccess,getUserFailure} from '../redux/actions/userActions';
import {fetchProductsFailure,fetchProductsSuccess,fetchProductsStart} from '../redux/actions/productsActions';
import {fetchHistoryFailure,fetchHistoryStart,fetchHistorySuccess} from '../redux/actions/historyActions';
import {addPointsStart,addPointsSuccess,addPointsFailure} from '../redux/actions/pointsActions';
import {redeemProductsSuccess, redeemProductsFailure, redeemProductsStart} from '../redux/actions/redeemProductsActions'
import {END_POINT_URL, headerReq} from './constants';

export function getUser () {
    return async (dispatch) =>{
        dispatch(getUserStart());
        try{
            const {data: userData} = await axios.get(`${END_POINT_URL}/user/me`,{ headers: {...headerReq}});
            dispatch(getUserSuccess(userData))
        }
        catch (error){
            dispatch(getUserFailure(error))
        }
    }
}

export function getProducts () {
    return async (dispatch) => {
        dispatch(fetchProductsStart())
        try{
            const {data: products} = await axios.get(`${END_POINT_URL}/products`,{ headers: {... headerReq}})
            dispatch(fetchProductsSuccess(products))
        }
        catch(error){
            dispatch(fetchProductsFailure(error))
        }
    }
}

export function getHistory (){
    return async(dispatch) => {
        dispatch(fetchHistoryStart());
        try{
            const { data: history} = await axios.get(`${END_POINT_URL}/user/history`, { headers: {...headerReq}})
            dispatch(fetchHistorySuccess(history))
        }
        catch(error){
            dispatch(fetchHistoryFailure(error))
            console.log(error)
        }
    }
}

export function postPoints (points) {
    return async ( dispatch ) =>{
        dispatch(addPointsStart())
        try{
            const {data} = await axios.post(`${END_POINT_URL}/user/points`, {amount: points}, { headers: {...headerReq}})
            dispatch(addPointsSuccess(data))
            dispatch(getUser())
        }
        catch(error){
            dispatch(addPointsFailure(error))
        }
    }
}

export function postRedeem (idProduct){
    return async (dispatch) => {
        dispatch(redeemProductsStart())
        try{
            const {data} = await axios.post(`${END_POINT_URL}/redeem`, {productId: idProduct}, { headers: {...headerReq}})
            dispatch(redeemProductsSuccess(data))
            dispatch(getUser())
        }
        catch(error){
            dispatch(redeemProductsFailure(error))
        }
    }
}


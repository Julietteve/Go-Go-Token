import {fetchProductsStart,fetchProductsFailure,fetchProductsSuccess} from '../redux/actions/productsActions'

export const ENDPOINT = 'https://coding-challenge-api.aerolab.co'

export const apiCall = (endpoint, method) =>{
    return(dispath)=>{
        dispath(fetchProductsStart());
        fetch(endpoint,{
            headers: {
                method: method,
                "Content-Type": "application/json",
                Accept:"application/json",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
            }})
        .then(response=>response.json())
        .then (products=>dispath(fetchProductsStart(products)))
        .catch(()=>dispath(fetchProductsFailure(true)))
    }
}
import React from 'react';
import {useDispatch} from 'react-redux';
import {resetFilter} from '../../../redux/actions/filterActions'
import {CardBox} from './styles';
import CardProduct from "../CardProduct";

const CardContainer = ({products, width, deleteFilter}) => {

    const dispatch = useDispatch() 

    const io = () =>{
        dispatch(resetFilter())
    }

    return (
        <>
        {deleteFilter ? <h3 onClick={()=>io()}>Restart filters X </h3> : null}
        <CardBox>
           {products.map(product=>(
               <CardProduct
               imageProductURL={product.img.url}
               category={product.category}
               productName={product.name}
               cost={product.cost}
               key={product._id}
               id={product._id}
               width={width}
               />
           ))}
        </CardBox>
        </>
    );
};

export default CardContainer;
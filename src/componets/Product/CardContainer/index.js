import React from 'react';
import {CardBox} from './styles';
import CardProduct from "../CardProduct"

const CardContainer = ({products}) => {
    return (
        <CardBox>
           {products.map(product=>(
               <CardProduct
               imageProductURL={product.img.url}
               category={product.category}
               productName={product.name}
               cost={product.cost}
               />
           ))}
        </CardBox>
    );
};

export default CardContainer;
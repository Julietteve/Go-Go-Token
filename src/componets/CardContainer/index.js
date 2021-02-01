import React, {useEffect, useState} from 'react';
import { CardProduct } from "../index";
import {CardBox} from './styles'

const CardContainer = () => {
    const [products, setProducts]= useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
            .then(res=>console.log(res))
    })

    return (
        <CardBox>
            {products.map(product =>(
                <CardProduct
                category={product.category}
                imageProductURL={product.image}
                productName={product.title}
                />
            ))}
        </CardBox>
    );
};

export default CardContainer;
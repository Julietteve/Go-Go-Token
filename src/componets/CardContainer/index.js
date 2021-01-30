import React, {useEffect, useState} from 'react';
import { CardProduct } from "../index";

const CardContainer = () => {
    const [products, setProducts]= useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
    })

    return (
        <div>
            {products.map(product =>(
                <CardProduct
                imageProductURL={product.image}
                />
            ))}
        </div>
    );
};

export default CardContainer;
import React from 'react';
import {useDispatch} from 'react-redux';
import {CardBox} from './styles';
import Pagination from "react-js-pagination";
import CardProduct from "../CardProduct";

const CardContainer = ({products, width,  activePage, onChange, totalItemsCount}) => {

    const dispatch = useDispatch() 

    return (
        <>
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
        <Pagination
            activePage={activePage}
            itemsCountPerPage={10}
            totalItemsCount={totalItemsCount}
            pageRangeDisplayed={10}
            onChange={onChange}
          />
        </>
    );
};

export default CardContainer;
import React from 'react';
import {CardBox} from './styles';
import Pagination from "react-js-pagination";
import CardProduct from "../CardProduct";

const CardContainer = ({products, width,  activePage, onChange, totalItemsCount, categoryNull}) => {

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
        {categoryNull && 
        <Pagination
            activePage={activePage}
            itemsCountPerPage={10}
            totalItemsCount={totalItemsCount}
            pageRangeDisplayed={10}
            onChange={onChange}
          />
        }
        </>
    );
};

export default CardContainer;
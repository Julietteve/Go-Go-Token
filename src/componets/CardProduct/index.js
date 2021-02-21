import React from 'react';
import {Container, ProductImage, Category, ProductName} from './styles';

const CardProduct = ({imageProductURL, category, productName,cost}) => {
    return (
        <Container>
            <ProductImage style={{width:'200px'}} src={imageProductURL} alt={productName}/>
            <h2>{cost}</h2>
            <Category>{category}</Category>
           <ProductName>{productName}</ProductName>
        </Container>
    );
};

export default CardProduct;
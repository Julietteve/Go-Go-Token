import React from 'react';

const CardProduct = ({imageProductURL, category, productName}) => {
    return (
        <div>
            <img style={{width:'200px'}} src={imageProductURL} alt={productName}></img>
            <p>{category}</p>
           <h2>{productName}</h2>
        </div>
    );
};

export default CardProduct;
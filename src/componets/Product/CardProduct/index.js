import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { usePalette } from "react-palette";
import {Container, ProductImage, Category, ProductName} from './styles';
import {postRedeem} from '../../../utils/services';
import {redeemProductsRestartSuccess} from '../../../redux/actions/redeemProductsActions'

const CardProduct = ({imageProductURL, category, productName,cost, id, width }) => {

    const dispatch = useDispatch()
    const {isLoading,hasError,success} = useSelector((state)=>state.redeemProductsReducer)
    const [redeeming, setRedeeming] = useState(false)
  

    const handleReedemProduct = (id) => {
        dispatch(postRedeem(id))
        console.log("id" + id)
        setRedeeming(true)
        reset()
    }

    const reset = () => {
        setTimeout(()=>{
            dispatch(redeemProductsRestartSuccess())
            setRedeeming(false)
        },3000)
    }

    const { data, error } = usePalette(imageProductURL);

    return (
        <Container >
            {!redeeming &&
            <div>
                <ProductImage 
                    value={data.lightMuted} 
                    width={width} 
                    src={imageProductURL} 
                    alt={productName}
                />
                <h2>{cost}</h2>
                <Category>{category}</Category>
                <ProductName>{productName}</ProductName>
                <button style={{backgroundColor:`${data.darkVibrant}`}} onClick={()=>handleReedemProduct(id)}>Reedem</button>
            </div>
            }
            {isLoading && redeeming && <p>Reedeming</p>}
            {success && redeeming && <p>is Redeeemed!</p>}
        </Container>
    );
};

export default CardProduct;
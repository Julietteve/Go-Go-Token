import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container, ProductImage, Category, ProductName, ReedemButton, ReedemButtonContainer, ReedemIcon} from './styles';
import {postRedeem} from '../../../utils/services';
import {redeemProductsRestartSuccess} from '../../../redux/actions/redeemProductsActions';
import {CgArrowsExchange} from "react-icons/cg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardProduct = ({imageProductURL, category, productName,cost, id, width }) => {

    const dispatch = useDispatch()
    const {isLoading,hasError,success} = useSelector((state)=>state.redeemProductsReducer)
    const [redeeming, setRedeeming] = useState(false)
  

    const handleReedemProduct = (id) => {
        dispatch(postRedeem(id))
        setRedeeming(true)
        reset()
        notify()
    }

    const reset = () => {
        setTimeout(()=>{
            dispatch(redeemProductsRestartSuccess())
            setRedeeming(false)
        },3000)
    }

    const notify = () => toast.dark('Product reedemed!', {
        position: "bottom-right",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        hideProgressBar: true,
        });

    return (
        <>
        <Container >
            <div>
                <ProductImage 
                    width={width} 
                    src={imageProductURL} 
                    alt={productName}
                    />
                <ProductName>{productName}</ProductName>
                <h3>{cost}p</h3>
                <Category>{category}</Category>
                <ReedemButtonContainer>
                    <ReedemButton  onClick={()=>handleReedemProduct(id)}>
                        Reedem
                    </ReedemButton>
                    <ReedemIcon>
                        <CgArrowsExchange/>
                    </ReedemIcon>
                </ReedemButtonContainer>
            </div>
        </Container>
            {success && redeeming && 
            <ToastContainer
                hideProgressBar
                position="bottom-right"
                autoClose={5000}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            }
        </>
    );
};

export default CardProduct;
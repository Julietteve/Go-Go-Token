import React, {useEffect, useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getProducts} from '../../utils/services'
import {CardContainer,FilterBar,Nameplate,UserBar} from '../../componets';

const Main = () => {

    const dispatch = useDispatch()
    const [widthImg, setWidth] = useState('300')

    useEffect(()=>{
        dispatch(getProducts())
    }, [dispatch])
    
    const {products, isLoading} = useSelector((state)=>state.productsReducer)

    const width = {
        small: '200',
        medium : '300',
        big : '350'
    }

    return (
        <div>
            <UserBar/>
            <Nameplate/>
            <FilterBar 
                handleWidthSmall={()=>setWidth(width.small)} 
                handleWidthMedium={()=>setWidth(width.medium)} 
                handleWidthBig={()=>setWidth(width.big)} 
            />
            {isLoading? <p>isLoading...</p> : 
                <CardContainer width={widthImg} products={products}/>
            }
        </div>
    );
};

export default Main;
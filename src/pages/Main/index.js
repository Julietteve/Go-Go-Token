import React, {useEffect, useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getProducts} from '../../utils/services'
import {CardContainer,FilterBar,Nameplate,UserBar} from '../../componets';
import {sortProductsByCategory, sortProductsByPrice} from '../../utils/sortFilter'

const Main = () => {

    const dispatch = useDispatch()
    const [widthImg, setWidth] = useState('300')

    useEffect(()=>{
        dispatch(getProducts())
    }, [dispatch])
    
    const {products, isLoading} = useSelector((state)=>state.productsReducer)
    const {activeFilter, category} =useSelector(state=>state.filterReducer)

    const filteredProducts = sortProductsByPrice(products,activeFilter)
    const filteredProductsByCategory = sortProductsByCategory(products, category)
    const filteredProductsByCategoryandPrice = sortProductsByPrice(filteredProductsByCategory,activeFilter)

    const handleFilters = () => filteredProductsByCategory.length===0 || filteredProductsByCategoryandPrice.length===0 ? filteredProducts : filteredProductsByCategoryandPrice

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
                <CardContainer 
                width={widthImg} 
                products={handleFilters()}/>
            }
        </div>
    );
};

export default Main;
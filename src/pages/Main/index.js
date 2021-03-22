import React, {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getProducts} from '../../utils/services'
import {CardContainer,FilterBar,Nameplate,UserBar} from '../../componets';

const Main = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getProducts())
    }, [dispatch])
    
    const {products, isLoading} = useSelector((state)=>state.productsReducer)

    return (
        <div>
            <UserBar/>
            <Nameplate/>
            <FilterBar/>
            {isLoading? <p>isLoading...</p> : 
                <CardContainer products={products}/>
            }
        </div>
    );
};

export default Main;
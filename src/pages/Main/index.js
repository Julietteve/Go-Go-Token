import React, {useEffect, useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getProducts} from '../../utils/services'
import {CardContainer,FilterBar,Nameplate,UserBar} from '../../componets';
import {sortProductsByCategory, sortProducts} from '../../utils/sortFilter'

const Main = () => {

    const dispatch = useDispatch()
    const [widthImg, setWidth] = useState('300')
    const [ activePage, setCurrentPage ] = useState( 1 );

    useEffect(()=>{
        dispatch(getProducts())
    }, [dispatch])
    
    const {products, isLoading} = useSelector((state)=>state.productsReducer)
    const {activeFilter, category} =useSelector(state=>state.filterReducer)

    const filteredProducts = sortProducts(products,activeFilter)
    const filteredProductsByCategory = sortProductsByCategory(products, category)
    const filteredProductsByCategoryandPrice = sortProducts(filteredProductsByCategory,activeFilter)

    const handleFilters = () => filteredProductsByCategory.length===0 ? filteredProducts : filteredProductsByCategoryandPrice
    const totalProducts = handleFilters()

    const handlePageChange = ( pageNumber ) => {
        setCurrentPage( pageNumber )
     };

    const width = {
        small: '200',
        medium : '300',
        big : '350'
    }

    const articlesPerPage = 10;
    const indexOfLastArticle  = activePage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles     = filteredProducts.slice( indexOfFirstArticle, indexOfLastArticle );

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
                products={totalProducts}
                activePage={ activePage }
                totalItemsCount={ filteredProducts.length }
                onChange={ handlePageChange }
            />
            }
        </div>
    );
};

export default Main
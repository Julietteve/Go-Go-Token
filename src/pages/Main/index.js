import React, {useEffect, useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getProducts} from '../../utils/services'
import {CardContainer,FilterBar,Nameplate,UserBar,Footer} from '../../componets';
import {sortProductsByCategory, sortProducts} from '../../utils/sortFilter'

const Main = () => {

    const dispatch = useDispatch()
    const [widthImg, setWidth] = useState('300')
    const [ activePage, setCurrentPage ] = useState( 1 );

    useEffect(()=>{
        dispatch(getProducts())
    }, [dispatch])

    
    const {products, isLoading} = useSelector(state=>state.productsReducer)
    const {activeFilter, category, } =useSelector(state=>state.filterReducer)
    
    const filteredProducts = sortProducts(products,activeFilter)
    const articlesPerPage = 9;
    const indexOfLastArticle  = activePage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles     = filteredProducts.slice( indexOfFirstArticle, indexOfLastArticle );
    const filteredProductsByCategory = sortProductsByCategory(filteredProducts, category)
    const filteredProductsByCategoryandPrice = sortProducts(filteredProductsByCategory,activeFilter)

    const handleFilters = () => filteredProductsByCategory.length===0 ? currentArticles : filteredProductsByCategoryandPrice

    const handlePageChange = ( pageNumber ) => {
        setCurrentPage( pageNumber )
     };
    
    const width = {
        small: '200',
        medium : '300',
        big : '400'
    }

    return (
        <div>
            <UserBar/>
            <Nameplate/>
            <FilterBar 
                handleWidthSmall={()=>setWidth(width.small)} 
                handleWidthMedium={()=>setWidth(width.medium)} 
                handleWidthBig={()=>setWidth(width.big)} 
                emptyCategory={filteredProductsByCategory.length>0 ? true: false}
                activeCategory={category}
            />
            {isLoading? <p>isLoading...</p> : 
                <CardContainer 
                width={widthImg} 
                products={handleFilters()}
                activePage={ activePage }
                totalItemsCount={ products.length }
                onChange={ handlePageChange }
                categoryNull= {filteredProductsByCategory.length>0 ? false: true}
            />
            }
            <Footer/>
        </div>
    );
};

export default Main
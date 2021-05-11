import React, {useEffect, useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getProducts} from '../../utils/services'
import {CardContainer,FilterBar,Nameplate,UserBar,Footer, MobileNav} from '../../componets';
import {CenteredLottie} from "./styles"
import {sortProductsByCategory, sortProducts} from '../../utils/sortFilter';
import loader from '../../componets/Lotties/main-loader.json';
import Lottie from 'react-lottie';

const Main = () => {

    const dispatch = useDispatch()
    const [widthImg, setWidth] = useState('300')
    const [ activePage, setCurrentPage ] = useState( 1 );
    const [isOpen, setIsOpen]= useState(false);


    useEffect(()=>{
        dispatch(getProducts())
    }, [dispatch])

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loader,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
      };

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

    const toggle = () =>{setIsOpen(!isOpen)}

    return (
        <div>
            {isLoading? 
            <CenteredLottie>
                <Lottie options={defaultOptions}
                height={400}
                width={400}
                />
            </CenteredLottie>
                : 
                <>
                <MobileNav isOpen={isOpen} toggle={toggle}/>
                <UserBar/>
                <Nameplate toggle={toggle}/>
                <FilterBar 
                    handleWidthSmall={()=>setWidth(width.small)} 
                    handleWidthMedium={()=>setWidth(width.medium)} 
                    handleWidthBig={()=>setWidth(width.big)} 
                    emptyCategory={filteredProductsByCategory.length>0 ? true: false}
                    activeCategory={category}
                />
                
                <CardContainer 
                width={widthImg} 
                products={handleFilters()}
                activePage={ activePage }
                totalItemsCount={ products.length }
                onChange={ handlePageChange }
                categoryNull= {filteredProductsByCategory.length>0 ? false: true}
                />
                <Footer/>
                </>
            }
        </div>
    );
};

export default Main
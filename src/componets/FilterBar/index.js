import React, {useState, useEffect} from 'react';
import { Container,Children, Filter, GridIconContainer, FilterContainer} from "./styles";
import { BiFilterAlt } from 'react-icons/bi';
import {BsFillGrid3X3GapFill, BsFillGridFill} from 'react-icons/bs';
import { IoIosSquare} from 'react-icons/io'
import { Collapse } from '..';
import {useDispatch,useSelector}  from 'react-redux';
import { getProducts } from "../../utils/services";

const FilterBar = ({handleWidthSmall, handleWidthMedium, handleWidthBig}) => {

    const [filterIsOpen, setOpenFilter] = useState(false)
    const [categories, setCategories] = useState([])
    const {products} = useSelector((state)=>state.productsReducer)
    const productsByCategory = new Set(products.map(i=>i.category))
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getProducts())
        setCategories(productsByCategory)
    }, [dispatch])
    
    const toggle = () => {
        setOpenFilter(!filterIsOpen)
    }
    

    return (
        <Filter>
        <Container>
                <p>Lowest Price</p>
                <p>Highest price</p>
                <GridIconContainer>
                    <BsFillGrid3X3GapFill onClick={handleWidthSmall}/>
                    <BsFillGridFill  onClick={handleWidthMedium} />
                    <IoIosSquare  onClick={handleWidthBig}/>
                </GridIconContainer>
            <FilterContainer onClick={toggle}>
                <p>FILTER</p>
                <BiFilterAlt />
            </FilterContainer>
        </Container>
            <Collapse isOpen={filterIsOpen}>
                <Children>
                    <div>
                    <h1>Categories</h1>
                   {[...categories].map(i=><li>{i}</li>)}
                    </div>
                    <div>
                        <h1>Colors</h1>
                        <p>Brown</p>
                        <p>Blue</p>
                        <p>Black</p>
                        <p>Green</p>
                    </div>


                </Children>
            </Collapse>
        </Filter>
       
    );
};

export default FilterBar;
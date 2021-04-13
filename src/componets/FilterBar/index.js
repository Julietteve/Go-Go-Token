import React, {useState, useEffect} from 'react';
import { Container,Children, Filter, GridIconContainer, FilterContainer, FilterPrice, PriceButton, Size} from "./styles";
import {useSelector, useDispatch} from 'react-redux';
import { applyFilter,setCategory, resetFilter } from "../../redux/actions/filterActions";
import { BiFilterAlt } from 'react-icons/bi';
import {BsFillGrid3X3GapFill, BsFillGridFill} from 'react-icons/bs';
import { IoIosSquare} from 'react-icons/io'
import { Collapse } from '..';

const categories = [ "Laptops", "Cameras", "Smart Home", "Audio", "Monitors & TV", "PC Accessories", "Gaming", "Tablets & E-readers","Phones","Drones","Phone Accessories","PC Accesories"]

const FilterBar = ({handleWidthSmall, handleWidthMedium, handleWidthBig,activeCategory, emptyCategory}) => {

    const [filterIsOpen, setOpenFilter] = useState(false)
    const [activeFilter,setActiveFilter] = useState('All')
    const [category, setSelectedCategory] = useState('')

    const handleCategory = (e) => {
        const value = e.target.value
        console.log(value)
        setSelectedCategory(value)
        setOpenFilter(false)
    }

   const dispatch = useDispatch()

   useEffect (()=>{
       dispatch(applyFilter(activeFilter))
       dispatch(setCategory(category))
   }, [dispatch, activeFilter,category])
    
    const toggle = () => {
        setOpenFilter(!filterIsOpen)
    }

    const handleCategoryReset = () => {
        dispatch(resetFilter())
        setSelectedCategory('')
    }
    

    return (
        <Filter>
        <Container>
            <FilterPrice>
                <PriceButton onClick={()=>setActiveFilter('lowest-price')} >Lowest Price</PriceButton>
                <PriceButton onClick={()=>setActiveFilter('highest-price')} >Highest price</PriceButton>
            </FilterPrice>
                <GridIconContainer>
                    <Size>
                        <BsFillGrid3X3GapFill onClick={handleWidthSmall}/>
                    </Size>
                    <Size>
                        <BsFillGridFill  onClick={handleWidthMedium} />
                    </Size>
                    <Size>
                        <IoIosSquare  onClick={handleWidthBig}/>
                    </Size>
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
                        {categories.map(category => (
                            <button onClick={handleCategory} value={category}>{category}</button>
                        ))}
                    </div>
                </Children>
            </Collapse>
            {emptyCategory &&
        <div>
            <p>{activeCategory}</p>
            <button onClick={handleCategoryReset}>X</button>
        </div>}
        </Filter>
       
    );
};

export default FilterBar;
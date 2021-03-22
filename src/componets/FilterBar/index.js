import React from 'react';
import { Container } from "./styles";
import { BiFilterAlt } from 'react-icons/bi';

const FilterBar = () => {
    return (
        <Container>
            <Container>
                <p>FILTER</p>
                <BiFilterAlt/>
            </Container>
            <div>
                <ul>
                    
                </ul>
            </div>
        </Container>
       
    );
};

export default FilterBar;
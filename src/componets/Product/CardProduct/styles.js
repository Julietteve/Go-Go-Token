import styled from 'styled-components/macro';


export const Category = styled.p`
    
`;

export const ReedemButtonContainer = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:center;
    position: absolute;
    transition: all 0.3s ease-out;
    bottom:-60px;
    width:100%;
    opacity:0;
`;

export const ReedemIcon = styled.div`
    font-size:1.5rem;
    
`;


export const ReedemButton = styled.button`
    background-color: transparent;
    padding-bottom: 0.5rem;
    padding-top:1rem;
    border: none;
    border-bottom : 1px gray solid;
    cursor: pointer;
    box-sizing: border-box;
    font-size:1.1rem;
    font-family: 'Spartan', sans-serif;
    color: black;

    &:hover {
    font-weight: bolder
    }
`;

export const Container = styled.div`
    border-radius: 8px;
    margin: 5%;
    padding: 1rem;
    cursor:pointer;
    position: relative;

    &:hover {
        opacity: 0.8
    }
    &:hover ${ReedemButtonContainer}{
        opacity:1;
        bottom:0;
    }
    &:hover ${Category}{
        opacity:0;
    }
`;

export const ProductImage = styled.img`
    width: ${(props)=>props.width};
    
`;



export const ProductName = styled.h2`
    
`;




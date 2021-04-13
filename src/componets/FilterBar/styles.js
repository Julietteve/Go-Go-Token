import styled from 'styled-components';

export const Filter = styled.div`
`;

export const FilterContainer = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
`;
export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height:80px;
    cursor: pointer;
    padding-left:10%;
    padding-right:10%;
    padding:5%;
    box-sizing:border-box;
`;
 export const FilterBox = styled.div`
    display: flex;
    justify-content: center;
    margin:0.8rem;
 `;
 export const Children = styled.div`
    background-color: violet;
    width: 100%;
    justify-content:center;
    align-items: center;
    display:flex;
    flex-direction: row;
 `;

export const GridIconContainer = styled.div`
    justify-content:center;
    align-items: center;
    display:flex;
    flex-direction: row;
`;

export const FilterPrice = styled.div`
   display:flex;
`;

export const Size = styled.div`
   margin: 25%;
`;

export const PriceButton = styled.div`
   :nth-child(2){
   padding-left:20px;
   box-sizing:border-box;
   }
`;


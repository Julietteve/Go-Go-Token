import styled from 'styled-components';

export const Filter = styled.div`
`;

export const FilterContainer = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   padding-left: 1rem;
   padding-right:1rem;
   border: #E9E9E9 1px solid;
   width: 10%;
   transition: all .2s ease-in-out;
   &:hover{
      background-color: #000;
      color:white;
      border: none;
   }
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
    background-color: white;
    width: 100%;
    justify-content:center;
    align-items: center;
    display:flex;
    flex-direction: row;
    text-align:center;
 `;

 export const Child = styled.button`
   border: none;
   background-color:transparent;
   color:black;
   margin: 0.2rem;
   font-size: 0.9rem;
   font-family: 'Spartan', sans-serif;
   transition: all 0.3s ease-out;
   cursor: pointer;
   &:hover{
      font-weight:600;
   }
 `;

export const EmptyCat = styled.div`
   color: #6666;
   margin-right:5%;
   box-sizing:border-box;
   display:flex;
   justify-content: flex-end;
   align-items:center;
`
export const Exit = styled.button`
   border: none;
   background-color:transparent;
   color:#6666;
   margin: 0.2rem;
   margin-left: 2rem;
   cursor: pointer;
`;

export const Cat = styled.p`
   font-size:0.9rem;
   border: none;
   background-color:transparent;
   color: black;
   margin-right: 2rem;
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
   color: #b5abab;
   font-size: 1.5rem;

   &:hover{
      color: #000
   }
`;

export const PriceButton = styled.div`
   :nth-child(2){
   padding-left:20px;
   box-sizing:border-box;
   }
   &:hover{
      color: #000;
      font-weight:800;
   }
`;


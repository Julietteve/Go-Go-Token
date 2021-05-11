import styled from 'styled-components/macro';

export const Filter = styled.div`
`;

export const CatHolder = styled.div`
  transition: all .3s ease-in-out;
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

   @media only screen and (max-width: 768px) {
    display:none;
   
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

    @media only screen and (max-width: 768px) {
      justify-content: center;
  }
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
    transition: all 0.3s ease-out;
 `;

 export const Child = styled.button`
   border: none;
   background-color:transparent;
   color:black;
   margin: 0.2rem;
   font-size: 1.1rem;
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
   color:lightgray;
   margin: 0.2rem;
   margin-left: 2rem;
   cursor: pointer;
   font-weight:bold;
`;

export const Cat = styled.p`
   font-size:1.1rem;
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

    @media only screen and (max-width: 768px) {
    display:none;
   
  }
`;

export const FilterPrice = styled.div`
   display:flex;
   font-size: 1.2rem;
   @media only screen and (max-width: 768px) {
    font-size:1rem;
    justify-content: center;
   
  }
`;

export const Size = styled.button`
   margin: 25%;
   color: #b5abab;
   font-size: 1.5rem;
   border:none;
   background-color:transparent;
   cursor: pointer;

   &:hover{
      color: #000;
   }

   &:focus{
      color: #000;
   }
`;

export const PriceButton = styled.button`
    border:none;
    background-color:transparent;
    font-family: "Spartan";
    font-size:1.2rem;
    margin: 1rem;
    transition: all 0.3s ease-out;
    padding: 1rem;
    cursor: pointer;


    &:hover{
        background-color:#ebe9eb;
    }

    &:focus{
        background-color:#ebe9eb;
    }

    @media only screen and (max-width: 768px) {
     font-size:0.8rem;
     margin:0.3rem;
     padding:0.3rem;
  }
`;


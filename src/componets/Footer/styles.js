import styled from 'styled-components/macro'

export const Brands = styled.div`
align-items: center;
  display: flex;
  flex-direction: row;
  height: 20%;
  justify-content: flex-end;
  width: 50%;
`;

export const Sponsor = styled.img`
    width:20%;
    margin-left: 5%;
    align-self:flex-end;
    filter: grayscale(100%);
`;

export const Author = styled.div`
    display:flex;
    justify-content: flex-start;
    width:50%;
    align-self:flex-end;
`;

export const Container = styled.div`
    display:flex;
    align-items:center;
    padding: 2%;
    box-sizing:border-box;
    border-top: 1px solid lightgray;
`;
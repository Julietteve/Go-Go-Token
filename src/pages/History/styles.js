import styled from 'styled-components/macro';

export const HistoryContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    padding:4rem;
    box-sizing: border-box;
`;

export const HistoryCard = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    padding:1rem;
`;

export const Card = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:flex-start;
    padding:1rem;
    border-bottom: 1px solid lightgray;
`;

export const Date= styled.button`
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
`;

export const DateWrapper = styled.div`
    width:100%;
    display: flex;
    justify-content: flex-end;
    padding-right:2rem;
    box-sizing: border-box;
`;
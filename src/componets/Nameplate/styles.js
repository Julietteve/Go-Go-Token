import styled from 'styled-components/macro'

export const Container = styled.div`
    width:90%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #F8F8F8;
    overflow:hidden;
    padding-top: 5%;
    padding-bottom: 5%;
    border-radius:1%;
`;

export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
`;

export const LeftContainer = styled.div`
    
`;

export const Banner = styled.img`
    width:20%;
`;

export const NameplateTitle = styled.h2`
    background: linear-gradient(to right, #30CFD0 0%, #330867 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;
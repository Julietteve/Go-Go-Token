import styled from 'styled-components'
import {IoMdClose} from 'react-icons/io';


export const Container = styled.nav`
    @media only screen and (min-width:1025px){
        display:none;
    }

    @media only screen and (max-width: 768px) {
    display:flex;
    background-color:white;
    justify-content:center;
    flex-direction:column;
    position: fixed;
    z-index: 999;
    width:100%;
    height:100%;
    align-items:center;
    transition: 0.3 ease-in-out;
    opacity: ${({isOpen})=>(isOpen ? '100%' : '0')};
    top: ${({isOpen})=>(isOpen ? '0' : '-100%')};
  }
`;

export const Name = styled.div`
    color: #A5678E;
    font-family: 'Satisfy', cursive;
    text-transform:capitalize;
    font-size: 2rem;
    margin: 5%;
`;

export const MenuLinks = styled.div`
    display:flex;
    justify-content:center;
   flex-direction:column;
   text-align:center;
   width:100%;
`;

export const Social = styled.div`
    display:flex;
    justify-content:center;
   flex-direction:row;
   text-align:center;
   margin-top:10%;
   padding:10%;
`;

export const Anchor = styled.a`
    color: #A5678E;
    font-size: 2rem;
    display:inline-block;
    padding:10%;
`;

export const Item = styled.a`
    font-size:1rem;
    text-transform:uppercase;
    letter-spacing:0.5;
    text-decoration:none;
    margin:2%;
    font-family: 'Josefin Sans', sans-serif;
    vertical-align: middle;
    cursor: pointer;
    color:#1D1D1F;
    margin: 5%;
    :hover{
    color: #A5678E;
    }
`;

export const CloseIcon = styled(IoMdClose)`
   color:#1D1D1F;
`;

export const Icon = styled.div`
  position:absolute;
    top: 1rem;
    left: 1rem;
    font-size: 1.5rem;
    width:auto;
    cursor: pointer;
`;
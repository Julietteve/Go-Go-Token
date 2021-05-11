import styled from 'styled-components/macro';
import {NavLink as LinkIcon} from 'react-router-dom';
import {MdAddCircleOutline} from "react-icons/md";

export const Container = styled.div`
    width:90%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #F8F8F8;
    border-radius:1%;
    padding:2%;

 @media only screen and (max-width: 768px) {
    width:100%;
  }
`;

export const ContainerIcon = styled.div`
  display:none;
 @media only screen and (max-width: 768px) {
    width:100%;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    position:relative;
    background-color:white;
    height:4rem;
  }
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
    overflow:visible;
    width:30%;

    
  @media only screen and (max-width: 768px) {
    width:50%;
  }
`;

export const NameplateTitle = styled.h2`
    background: linear-gradient(to right, #30CFD0 0%, #330867 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

    @media only screen and (max-width: 768px) {
     font-size:0.8rem;
  }
`;

export const MenuIcon=styled.div`
display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 1rem;
    left: 1rem;
    transform: (-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: #282723;
    
  }
`;

export const Title = styled(LinkIcon)`
    text-decoration: none;
    text-transform:uppercase;
    font-weight:bold;
    transition: all .2s ease-in-out;
    color:#666666;
    display: flex;
    align-items: center;
    font-size:0.9rem;
    letter-spacing:5px;
    margin-right:3%;
`;

export const AddIcon =styled(MdAddCircleOutline)`
    cursor: pointer;
    margin:4%;
    font-size:1rem;
    color:#666666;

    &:hover{
    color: #330867;
    }
`;
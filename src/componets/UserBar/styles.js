import styled from 'styled-components';
import {NavLink as LinkIcon} from 'react-router-dom';
import {MdAddCircleOutline} from "react-icons/md";
import {RiCopperCoinLine} from 'react-icons/ri';
import { VscDebugBreakpointFunction } from "react-icons/vsc";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background-color: #ffffff;
    padding:4%;
    box-sizing:border-box;
    color:#666666;
`;


export const PointIcon =styled(VscDebugBreakpointFunction)`
    cursor: pointer;
    font-size:2rem;
`;

export const AddIcon =styled(MdAddCircleOutline)`
    cursor: pointer;
    margin:3%;
    font-size:2rem;
    color:#666666;

    &:hover{
    color: #330867;
    }
`;

export const LeftContainer = styled.div`
    width : 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const RightContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const Box = styled.div`
    display: flex;
    text-align: left;
    align-items: center;
`;

export const NavIcon = styled(LinkIcon)`
    text-decoration: none;
    text-transform:uppercase;
    margin-left:3%;
    transition: all .2s ease-in-out;
    color:#666666;
    display: flex;
    align-items: center;
    font-size:2rem;

        &:hover{
            color: #330867;
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
    font-size:1.5rem;
    margin-left:1%;
    letter-spacing:5px;
`;

export const DataUser = styled.div`
    margin-left:3%;
    font-size:1.5rem;
    text-transform:uppercase;
    color:#666666;
    display: flex;
    align-items: center;
`;

export const PointsWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:2.5rem;
`;

export const Wrapper = styled.div`
    align-items:center;
    border-bottom: 1px solid #666666;
    width:50%;
    margin:0 auto;
`;

export const AddContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
`;

export const Point = styled.button`
    display:flex;
    border:none;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    font-family: "Spartan";
    padding:2rem;
    width:100px;
    height:100px;
    margin:1rem;
    color:black;
    background-color:#ebe9eb;
    transition: all 0.1s ease-out;
    cursor: pointer;
    font-size:1.1rem;

    &:hover{
        transform: scale(1.025);
        font-weight: bold;
    }
    &:focus{
        background-color:#c6bfc8;
    }

`;

export const ButtonWrapper = styled.div`
  display:flex;
  justify-content:center;
  align-items: center;
  width:100%;
`;


export const CloseButton = styled.button`
   background-color: white;
   border: 1px solid #ebe9eb;
   border-radius:5px;
   width:200px;
   font-family: 'Spartan';
   color: black;
   font-size:1.3rem;
   text-transform: uppercase;
   padding: 1rem;
   letter-spacing:0.5px;
   transition: all 0.3s ease-out;
   cursor: pointer;

   &:hover{
    transform: scale(.99);

   }
`;

export const  AddButton = styled.button`
   background-color: black;
   border:none;
   border-radius:5px;
   width:200px;
   font-family: 'Spartan';
   color: white;
   font-size:1.3rem;
   text-transform: uppercase;
   padding: 1rem;
   letter-spacing:0.5px;
   transition: all 0.3s ease-out;
   cursor: pointer;
   margin-left:2rem;

   &:hover{
    transform: scale(.99);
   }
`;

export const  DoneButton = styled.button`
   background-color: black;
   border:none;
   border-radius:5px;
   width:200px;
   font-family: 'Spartan';
   color: white;
   font-size:1.3rem;
   text-transform: uppercase;
   padding: 1rem;
   letter-spacing:0.5px;
   transition: all 0.3s ease-out;
   cursor: pointer;
   margin-top:5rem;

   &:hover{
    transform: scale(.99);
   }
`;

export const CenteredWrap = styled.div`
    display: flex;
    flex: 1;
    height:400px;
    justify-content: center;
    align-items: center;
`;

export const CenteredWrapCol = styled.div`
    display: flex;
    flex: 1;
    height:400px;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    text-align:center;
`;

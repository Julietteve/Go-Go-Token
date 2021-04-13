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
    font-size:1.5rem;
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
    font-size:1.5rem;

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
    font-size:1rem;
    text-transform:uppercase;
    color:#666666;
    display: flex;
    align-items: center;
`;

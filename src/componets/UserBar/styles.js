import styled from 'styled-components';
import {NavLink as LinkIcon} from 'react-router-dom';
import {GrAddCircle} from "react-icons/gr";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height:50px;
    background-color: #E5E6;
    padding-top: 1%;
`;

export const AddIcon =styled(GrAddCircle)`
    cursor: pointer;
    margin:3%;
    font-size:1.5rem;
    color: white;
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
    color: white;
    display: flex;
    align-items: center;
    font-size:1.5rem;
`;

export const DataUser = styled.div`
    margin-left:3%;
    font-size:1.3rem;
    text-transform:uppercase;
    color: white;
`;

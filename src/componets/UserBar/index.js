import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUser} from '../../utils/services'
import {Container} from './styles'

const UserBar = () => {

    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getUser())
    },[dispatch])

    const {userData} = useSelector((state)=> state.userReducer) //userReducer es el nombre del reducer!!!
    const {name,points} = userData
    

    return (
        <Container >
           <p>{name}</p>
           <p>{points}</p>
        </Container>
    );
};

export default UserBar;
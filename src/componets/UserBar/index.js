import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import {getUser} from '../../utils/services'
import {Container} from './styles'


const UserBar = () => {


    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getUser())
    },[dispatch])

    const {userData} = useSelector((state)=> state.userReducer)
    const {name,points} = userData


    return (
        <Container >
            <Link to='/'>
            <h3>POINTFEVER</h3>
            </Link>
           <Link to= '/history'>
           <h3>History</h3>
           </Link>
           <div>{name}</div>
           <div>{points}</div>
           <div>
      <button type="button">
        Add Points
      </button>
    </div>
        </Container>
    );
};

export default UserBar;
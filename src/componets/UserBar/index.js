import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import {addPointsResetSuccess} from '../../redux/actions/pointsActions'
import {getUser, postPoints} from '../../utils/services'
import {Container} from './styles'
import {Modal} from '..'


const UserBar = () => {
    
    const dispatch = useDispatch()
    const [amountPoints, setAmountPoints] = useState(4000)
    const {userData} = useSelector((state)=> state.userReducer)
    const {isLoading, hasError, success} = useSelector((state)=> state.pointsReducer)
    const {name,points} = userData
    
     useEffect(()=>{
         dispatch(getUser())
     },[dispatch])


    const [isOpen, setOpenModal] = useState(false)


    const handleAddPoints = () =>{
        dispatch(postPoints(amountPoints))
    }

    const handleOpenModal = () =>{
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        dispatch(addPointsResetSuccess())
        setOpenModal(false)
    }

    window.onclick = function(event) {
        const modal = document.getElementById('modal');
        if (event.target === modal) {
            dispatch(addPointsResetSuccess())
            setOpenModal(false)
        }
    }



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
           <Modal id='modal' show={isOpen} handleClose={handleCloseModal}>

               {!isLoading && !hasError && !success &&
               <div>
                   <h2>Add Points</h2>
                   <button onClick={()=> setAmountPoints(1000)}>1000</button>
                   <button onClick={()=> setAmountPoints(5000)}>5000</button>
                   <button onClick={()=> setAmountPoints(7500)}>7500</button>
                   <button onClick={()=> handleAddPoints()}>ADD</button>
               </div>}
            {isLoading && <h1>loading</h1>}
            {success && <h1>You added {amountPoints} points !</h1>}
        </Modal>
      <button type="button" onClick= {handleOpenModal}>
        Add Points
      </button>
    </div>
        </Container>
    );
};

export default UserBar;
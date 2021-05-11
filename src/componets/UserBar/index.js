import React, {useEffect, useState} from 'react';
import {AiOutlineHistory} from 'react-icons/ai';
import {useDispatch, useSelector} from 'react-redux';
import {addPointsResetSuccess} from '../../redux/actions/pointsActions'
import {getUser, postPoints} from '../../utils/services'
import {Container, CenteredWrap, CenteredWrapCol, LeftContainer, Point, RightContainer, DataUser, NavIcon, AddIcon,Title,PointsWrapper,Wrapper,AddContainer, ButtonWrapper, CloseButton, AddButton, DoneButton} from './styles'
import spinner from '../Lotties/spinner.json';
import Lottie from 'react-lottie';
import {Modal} from '..'


const UserBar = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: spinner,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
      };
    
    const dispatch = useDispatch()
    const [amountPoints, setAmountPoints] = useState(4000)
    const {userData} = useSelector((state)=> state.userReducer)
    const {isLoading, hasError, success} = useSelector((state)=> state.pointsReducer)
    const {name,points} = userData
    
     useEffect(()=>{
         dispatch(getUser())
     },[dispatch])


    const [isOpen, setOpenModal] = useState(false)

    const handleAddPoints = () => dispatch(postPoints(amountPoints))

    const handleOpenModal = () => setOpenModal(true)

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
            <LeftContainer>
                    <Title to='/'>POINTFEVER</Title>
            </LeftContainer>
            <RightContainer>
                <DataUser>{name}</DataUser>
                <DataUser>{points}</DataUser>
                <NavIcon title="Go to History" to= '/history'>
                        <AiOutlineHistory/>
                </NavIcon>
                <AddIcon title="Add points" onClick= {handleOpenModal}/>
            </RightContainer>
            <div>
           <Modal id='modal' show={isOpen} handleClose={handleCloseModal}>
               {!isLoading && !hasError && !success &&
                   <>
                   <AddContainer>
                       <div>
                       <h2>Add Points</h2>
                        <Wrapper/>
                       </div>
                   </AddContainer>
               <PointsWrapper>
                   <Point onClick={()=> setAmountPoints(1000)}>1000</Point>
                   <Point onClick={()=> setAmountPoints(5000)}>5000</Point>
                   <Point onClick={()=> setAmountPoints(7500)}>7500</Point>
               </PointsWrapper>
               <ButtonWrapper>
                    <CloseButton onClick={handleCloseModal}>Cancel</CloseButton>
                    <AddButton onClick={()=> handleAddPoints()}>Add</AddButton>
                </ButtonWrapper>
                   </>
               }
            {isLoading && 
            <CenteredWrap>
                <Lottie options={defaultOptions}
                height={400}
                width={400}
                />
            </CenteredWrap>
            }
            {success && 
            <CenteredWrapCol>
                <div>
                    <h2>You added {amountPoints} points !</h2>
                    <DoneButton onClick={handleCloseModal}>Done</DoneButton>
                </div>
            </CenteredWrapCol>
            }
        </Modal>
    </div>
        </Container>
    );
};

export default UserBar;
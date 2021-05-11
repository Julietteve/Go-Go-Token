import React, {useState} from 'react';
import {Container, NameplateTitle, Banner, Box,MenuIcon, ContainerIcon, Title, AddIcon} from './styles';
import {ButtonWrapper,CloseButton,AddButton,CenteredWrap,CenteredWrapCol,DoneButton, AddContainer,Wrapper,PointsWrapper,Point} from "../UserBar/styles"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {FiMenu}  from "react-icons/fi";
import {useDispatch, useSelector} from 'react-redux';
import {addPointsResetSuccess} from '../../redux/actions/pointsActions'
import {postPoints} from '../../utils/services'
import spinner from '../Lotties/spinner.json';
import Lottie from 'react-lottie';
import {Modal} from '..'

const Nameplate = ({toggle}) => {

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
    const {isLoading, hasError, success} = useSelector((state)=> state.pointsReducer)

    const [isOpen, setOpenModal] = useState(false)

    const handleAddPoints = () => dispatch(postPoints(amountPoints))

    const handleOpenModal = () => setOpenModal(true)

    const handleCloseModal = () => {
        dispatch(addPointsResetSuccess())
        setOpenModal(false)
    }

    var w = window.innerWidth;
    
    return (
        <>
        <ContainerIcon>
        <MenuIcon onClick={toggle} >
            <FiMenu/>
        </MenuIcon>
            <Title to='/'>POINTFEVER</Title>
            <AddIcon title="Add points" onClick= {handleOpenModal}/>
        </ContainerIcon>
        <Box>
            <Container>
                <NameplateTitle>All you can redeem</NameplateTitle>
                <Banner src='images/watches.png'/>
            </Container>
        </Box>
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
        </>
        
    );
};

export default Nameplate;
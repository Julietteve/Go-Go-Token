import React from 'react';
import {RiCloseFill} from "react-icons/ri"
import {ModalMain,ModalDisplay,CloseIconWrap} from './styles'

const Modal = ({handleClose, handleAdd, show, children,id}) => {
    return (
        <ModalDisplay id={id} display={show ? 'block' : 'none'}>
            <ModalMain>
            <CloseIconWrap onClick={handleClose}>
                <RiCloseFill/>
            </CloseIconWrap>
                {children}
            </ModalMain>
        </ModalDisplay>
    );
};

export default Modal;
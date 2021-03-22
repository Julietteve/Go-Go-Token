import React from 'react';
import {ModalMain, CloseButton, ModalDisplay} from './styles'

const Modal = ({handleClose, show, children,id}) => {
    return (
        <ModalDisplay id={id} display={show ? 'block' : 'none'}>
            <ModalMain>
                {children}
                <CloseButton onClick={handleClose}>Close</CloseButton>
            </ModalMain>
        </ModalDisplay>
    );
};

export default Modal;
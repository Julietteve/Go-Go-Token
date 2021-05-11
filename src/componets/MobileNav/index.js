import React from 'react';
import { Container, Icon, CloseIcon} from "./styles";


const MobileNav = ({isOpen,toggle}) => {
    return (
       <Container isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            
       </Container>
    );
};

export default MobileNav;
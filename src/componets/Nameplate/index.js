import React from 'react';
import {Container, NameplateTitle, Banner, Box} from './styles'

const Nameplate = () => {
    return (
        <Box>
            <Container>
                <NameplateTitle>All you can redeem</NameplateTitle>
                <Banner src='images/watches.png'/>
            </Container>
        </Box>
        
    );
};

export default Nameplate;
import React from 'react';
import {Sponsor,ContainerSponsor,Author, Container, Brands} from './styles'

const Footer = () => {
    return (
        <Container>
                <Author>
                    <span>@PointFever by Julie</span>
                </Author>
                <Brands>
                        <Sponsor src='images/arolab.png'/>
                        <Sponsor src='images/acamica.png'/>
                </Brands>
        </Container>
    );
};

export default Footer;
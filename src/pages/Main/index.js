import React from 'react';
import {CardContainer,FilterBar,Nameplate,UserBar} from '../../componets'

const Main = () => {
    return (
        <div>
            <UserBar/>
            <Nameplate/>
            <FilterBar/>
            <CardContainer/>
        </div>
    );
};

export default Main;
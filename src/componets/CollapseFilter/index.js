import React, {useEffect, useState, useRef} from 'react';
import {Collapse} from './styles'

const CollapseFilter = ({children, isOpen}) => {
 
    const [childHeight, setHeight] = useState(0)
    const height = useRef(null)

    useEffect (()=>{
        const childHeightRaw = height.current.clientHeight;
        console.log(childHeightRaw)
        const childHeight = `${childHeightRaw / 16}rem`;
        setHeight({ childHeight });
    }, [])

    return (
        <Collapse maxHeight = {isOpen ? childHeight : 0}>
          <div ref={height}>{children}</div>
        </Collapse>
    );
};

export default CollapseFilter;


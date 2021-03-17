import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getHistory} from '../../utils/services'
import {UserBar} from '../../componets'

const History = () => {

    const distpatch = useDispatch()

    useEffect(()=>{
        distpatch(getHistory())
    },[distpatch])

    const {history, isLoading} = useSelector((state)=> state.historyReducer)
    return (
        <div>
        <UserBar/>

            {isLoading? <p>loading</p> : history.map(i=>(
                <>
                <h1>{i.name}</h1>
                <p>{i.createDate}</p>
                </>
            ))}
        </div>
    );
};

export default History;
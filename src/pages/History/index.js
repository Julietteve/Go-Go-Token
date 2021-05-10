import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {sortProducts} from '../../utils/sortFilter'
import * as dayjs from "dayjs";
import {HistoryContainer, HistoryCard, Card, Date, DateWrapper} from "./styles"
import {getHistory} from '../../utils/services'
import {UserBar} from '../../componets';

const History = () => {

    const distpatch = useDispatch()
    const [filter, setFilter] = useState('latest')

    useEffect(()=>{
        distpatch(getHistory())
    },[distpatch])

    const {history, isLoading} = useSelector((state)=> state.historyReducer)

    const historysorted = sortProducts(history,filter)

    return (
        <div>
        <UserBar/>
        <DateWrapper>
            <Date onClick={()=>setFilter('latest')}>Latest ▲</Date>
            <Date onClick={()=>setFilter('oldest')}>Oldest ▼</Date>
        </DateWrapper>
            <HistoryContainer>
            {isLoading? <p>loading</p> : historysorted.map(i=>(
                <Card>
                <img src={i.img.url}/>
                <HistoryCard>
                <h1>{i.name}</h1>
                <p> Reedem on : {dayjs(i.createDate.split("T")[0]).format("DD/MM/YYYY")}</p>
                </HistoryCard>
                </Card>
            ))}
            </HistoryContainer>
        </div>
    );
};

export default History;
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {sortProducts} from '../../utils/sortFilter'
import * as dayjs from "dayjs";
import {HistoryContainer, HistoryCard, Card, Date, DateWrapper,SplitLine} from "./styles"
import {getHistory} from '../../utils/services'
import {UserBar} from '../../componets';
import loader from '../../componets/Lotties/main-loader.json';
import Lottie from 'react-lottie';
import { CenteredLottie } from '../Main/styles';

const History = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loader,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
      };

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
        <SplitLine></SplitLine>
        <DateWrapper>
            <Date onClick={()=>setFilter('latest')}>Latest ▲</Date>
            <Date onClick={()=>setFilter('oldest')}>Oldest ▼</Date>
        </DateWrapper>
            <HistoryContainer>
            {isLoading? 
                <CenteredLottie>
                    <Lottie options={defaultOptions}
                    height={400}
                    width={400}
                    />
                </CenteredLottie>
            : historysorted.map(i=>(
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
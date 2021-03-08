import React, {useEffect, useState} from 'react';
import { CardProduct } from "../index";
import {CardBox} from './styles';


const CardContainer = () => {
   
   
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('https://coding-challenge-api.aerolab.co/products',{
        headers: {
            method: 'GET',
            "Content-Type": "application/json",
            Accept:"application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
        }})
        .then(res=> res.json())
        .then(res=>{
            setData(res)
           console.log(res)
            console.log(new Set (res.map(i=>i.category)))
        }
        
        )
        .catch(err=>console.log(err))


    },[])
    
    return (
        <CardBox>
           {data.map(d=>(
               <CardProduct
               imageProductURL={d.img.url}
               category={d.category}
               productName={d.name}
               cost={d.cost}
               />
           ))}
        </CardBox>
    );
};

export default CardContainer;
import {useState} from 'react'

export const ENDPOINT = 'https://coding-challenge-api.aerolab.co'

export const HEADER = {
    "Content-Type": "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
}

export const useFetch = (initialState = {}) => {

    const [data, setData] = useState(initialState)

    const fetchData = async (url)=>{
        try
        {
            const userRes = await fetch(url,{header:HEADER})
            const userData = await userRes.json()
            setData(userData)
        }
        catch(err)
        {
            console.log(err)
        }

        return [data,fetchData]
    }
}
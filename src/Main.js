import './App.css';
import Card from './Card'
import React, { useState, useEffect } from "react";
import Axios from 'axios'
import {forwardRef, useImperativeHandle} from 'react';

const Main = forwardRef((props, ref) => {
 const [events,setEvents] = useState([]);
 const [enterTime,setEnterTime] = useState(getStartTime())
 const [endTime,setEndTime] = useState(getEndTime())
 const [sinceCount,setSinceCount] = useState(1)
 const [size,setSize] = useState(100)
 const [loadingText,setLoadingText] = useState('Load More')
 const [getPostsStatus, setGetPostsStatus] = useState('Loading Posts...')


 useEffect(() => {
    setEnterTime(getStartTime())
    setEndTime(getEndTime())
    getPosts()
},[])

function getStartTime() {
    var currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    var epochTime = currentDate.getTime();
    return epochTime/1000;
}

function getEndTime() {
    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    currentDate.setHours(23, 59, 59, 0);
    var epochTime = currentDate.getTime();
    return epochTime/1000;
}

async function getPosts(time=enterTime, relayName='wss://relay.nostr.band') {
    try {   
        const {data} =await Axios.get(`https://api.postre.io/notes?page=0&size=${size}&start_time=${enterTime}&end_time=${endTime}&filter=${props.filter}`)
        console.log(data)
         setEvents([...data.content])
    } catch(err) {
        setGetPostsStatus('Some error occured while getting posts.Please try reloading page!')
    }
}

async function searchQuery(query) {
    setGetPostsStatus('Searching...')
    setEvents([])
    try {
        console.log('loading start')
        const {data} = await Axios.get(`https://api.postre.io/notes/search?query=${query}&page=${sinceCount}&size=${size}&start_time=${enterTime}&end_time=${endTime}&filter=${props.filter}`)
        console.log(data)
        setEvents([...data.content])
        if(data.content.length === 0) setGetPostsStatus('No Posts Found!')
    } catch(err) {
        setGetPostsStatus('Some error occured while getting posts.Please try reloading page!')
    }
}

async function loadMore() {
    setLoadingText('Loading...')
    await setSinceCount(Number(sinceCount)+1||1);
    try {
        const {data} =await Axios.get(`https://api.postre.io/notes?page=${sinceCount}&size=${size}&start_time=${enterTime}&end_time=${endTime}&filter=${props.filter}`)
        console.log(data)
        setEvents([...events,...data.content])
        setLoadingText('Load More')
    } catch(err) {
        setLoadingText('Error! Click Again')
    }
}

useImperativeHandle(ref, () => ({
    searchQuery
}));


return (
    <div>


        {events.length>0? <div>
    {
        
            events.map((element,index)=> {
            return ( (props.filter === 'posts' || element[props.filter]=== true)  ?
                <Card
                    key={index}
                    content={element.content}
                    pubkey={element.pubkey}
                    created_at={element.created_at}
                    todayReactionCount={element.todayReactionCount}
                />
            :'')
        }) }
    </div> 
     : <div className=' flex items-center justify-center  mt-24'><p className={getPostsStatus=== 'Loading Posts...'? 'p-0 m-0 w-36 bg-blue-500 rounded text-white':'p-2 m-0 w-128 border-solid border-gray-200 border-2 bg-white rounded text-red-400'}>{getPostsStatus}</p></div>  }
    {events.length>size-1?<button className="m-2 text-center text-white bg-blue-500 rounded p-2" onClick={loadMore}>{loadingText}</button>:''}
    </div>
)

})

export default Main;
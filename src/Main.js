import './App.css';
import Card from './Card'
import NoStrNav from './NoStrNav';
import React, { useState, useEffect } from "react";
import Axios from 'axios'
function Main(props) {
 const [events,setEvents] = useState([]);
 const [enterTime,setEnterTime] = useState(Math.round(new Date().getTime() / 1000))
 const [sinceCount,setSinceCount] = useState(0)
 const [loadingText,setLoadingText] = useState('Load More')


 useEffect(() => {
    setEnterTime(Math.round(new Date().getTime() / 1000));
    getPosts()
},[])

async function getPosts(time=enterTime, relayName='wss://relay.nostr.band') {
    const {data} =await Axios.get(`http://142.93.209.153:80/notes?page=0&size=20&start_time=1676278400&end_time=1696278400&filter=${props.filter}`)
    console.log(data)
     setEvents([...data.content])
}

async function loadMore() {
    setLoadingText('Loading...')
    await setSinceCount(Number(sinceCount)+1||1);
    const {data} =await Axios.get(`http://142.93.209.153:80/notes?page=${sinceCount}&size=20&start_time=1676278400&end_time=1696278400&filter=${props.filter}`)
    console.log(data)
     setEvents([...events,...data.content])
     setLoadingText('Load More')
}

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
     : <div className='p-2 bg-blue-500 text-white mt-36  rounded w-36' style={{'margin-left':"25rem"}}>Loading Posts...</div>  }
    {events.length>10?<button className="m-2 text-center text-white bg-blue-500 rounded p-2" onClick={loadMore}>{loadingText}</button>:''}
    </div>
)

}

export default Main;
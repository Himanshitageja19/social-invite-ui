import './App.css';
import Card from './Card'
import NoStrNav from './NoStrNav';
import React, { useState, useEffect } from "react";
import Axios from 'axios'
function Main(props) {
 const [events,setEvents] = useState([]);
 const [enterTime,setEnterTime] = useState(Math.round(new Date().getTime() / 1000))
 const [sinceCount,setSinceCount] = useState(1)
 const [loadingText,setLoadingText] = useState('Load More')
 const [getPostsStatus, setGetPostsStatus] = useState('Loading Posts...')


 useEffect(() => {
    setEnterTime(Math.round(new Date().getTime() / 1000));
    getPosts()
},[])

async function getPosts(time=enterTime, relayName='wss://relay.nostr.band') {
    try {   
        const {data} =await Axios.get(`https://api.postre.io/notes?page=0&size=500&start_time=1676278400&end_time=1696278400&filter=${props.filter}`)
        console.log(data)
         setEvents([...data.content])
    } catch(err) {
        setGetPostsStatus('Some error occured while getting posts.Please try reloading page!')
    }
}

async function loadMore() {
    setLoadingText('Loading...')
    await setSinceCount(Number(sinceCount)+1||1);
    try {
        const {data} =await Axios.get(`https://api.postre.io/notes?page=${sinceCount}&size=500&start_time=1676278400&end_time=1696278400&filter=${props.filter}`)
        console.log(data)
        setEvents([...events,...data.content])
        setLoadingText('Load More')
    } catch(err) {
        setLoadingText('Error! Click Again')
    }
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
     : <div className=' flex items-center justify-center  mt-24'><p className={getPostsStatus=== 'Loading Posts...'? 'p-0 m-0 w-36 bg-blue-500 rounded text-white':'p-2 m-0 w-128 border-solid border-gray-200 border-2 bg-white rounded text-red-400'}>{getPostsStatus}</p></div>  }
    {events.length>499?<button className="m-2 text-center text-white bg-blue-500 rounded p-2" onClick={loadMore}>{loadingText}</button>:''}
    </div>
)

}

export default Main;
import './App.css';
import Card from './Card'
import AppBar from './AppBar'
import NoStrNav from './NoStrNav';
import React, { useState, useEffect } from "react";
import { relayInit, nip19 } from 'nostr-tools';
import Search from './Search';
import InfiniteScroll from "react-infinite-scroller";

function Main() {
 const [events,setEvents] = useState([]);
 const [enterTime,setEnterTime] = useState(Math.round(new Date().getTime() / 1000))
 const [sinceCount,setSinceCount] = useState(0)


 useEffect(() => {
    setEnterTime(Math.round(new Date().getTime() / 1000));
    // setEnterTime(1685916750);
    getPostsBetweenHour();
    // console.log('enter time', enterTime)
    // const relay = relayInit('wss://relay.nostr.band')
    // relay.on("connect", async () =>{
    //     console.log(`connected to relay ${relay.url}`);
    //     console.log(relay);
        
    //     const newEvents = await relay.list([{
    //         kinds:[1],
    //         authors:undefined,
    //         search: undefined,
    //         since: (enterTime-(sinceCount*3600))-3600,
    //         until: (enterTime-(sinceCount*3600))
    //     }])
    //     console.log(events.length);
    //     setEvents([...events,...newEvents]);
    //     events.forEach(element => {
    //         console.log(element);
    //     }); 
    //     setSinceCount(sinceCount+1);
    // });

    // relay.on("error", async () => {
    //     console.log(`failed connected to relay ${relay.url}`);
    // });
    // relay.connect();
    // relay.close();

},[])

async function getPostsBetweenHour(time=enterTime, relayName='wss://relay.nostr.band') {
    console.log('since count' ,sinceCount);
    console.log('since',(1685916750-(sinceCount*3600))-3600)
        console.log('until', (1685916750-(sinceCount*3600)))    
const relay = relayInit('wss://relay.nostr.band')
    relay.on("connect", async () =>{
        console.log(`connected to relay ${relay.url}`);
        console.log(relay);
        
        const newEvents = await relay.list([{
            kinds:[1],
            authors:undefined,
            search: undefined,
            since: (1685916750-(sinceCount*3600))-3600,
            until: (1685916750-(sinceCount*3600))
        }])
        console.log(events.length);
        setEvents([...events,...newEvents]);
        events.forEach(element => {
            console.log(element);
        }); 
        setSinceCount(sinceCount+1);
    });

    relay.on("error", async () => {
        console.log(`failed connected to relay ${relay.url}`);
    });
    await relay.connect();
    // const relay = relayInit(relayName);
    
    // const newEvents = await relay.list([{
    //     kinds:[1],
    //     authors:undefined,
    //     search: undefined,
    //     since: (1685916750-(sinceCount*3600))-3600,
    //     until: (1685916750-(sinceCount*3600))
    // }])
    // setEvents([...events,...newEvents]);
    // console.log(events.length);
    // setSinceCount(sinceCount+1);    
}

return (
    <div>
        <AppBar/>
        <Search/>
        <div className="text-center font-bold text-4xl mt-4 mb-2">
            Discover <span className='text-purple-800'>Nostr</span>
        </div>
        <div className='text-center mb-2 text-xl'>Learn what is trending <span className='text-purple-800'>today</span></div>
        <NoStrNav/>
        {events.length>10? <div>
    {
        
        events.map((element,index)=> {
            return (
                <Card
                    key={index}
                    content={element.content}
                    pubkey={element.pubkey}
                    created_at={element.created_at}
                />
            )
        }) }
    </div>: <div>Loading Posts...</div>  }
    {events.length>10?<button className="m-2 text-center" onClick={getPostsBetweenHour}>Load More..</button>:''}
    </div>
)
}

export default Main;
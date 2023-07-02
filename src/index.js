import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Grid from '@mui/material/Grid';
import Main from './Main';
import  AppBar from './AppBar';
import Search from './Search';
import NoStrNav from './NoStrNav';
import {useRef} from 'react';

export default function App() {
  const videoRef = useRef(null)
  const hashtagRef = useRef(null)
  const audioRef = useRef(null)
  const imageRef = useRef(null)
  const linkRef = useRef(null)
  const postRef = useRef(null)

  const handleSearch = (query) => {
    console.log('query from parent', query)
    console.log('location', window.location.pathname)
    switch (window.location.pathname) {
      case '/Links':
        linkRef.current.searchQuery(query);
        break;
      case '/Video':
        videoRef.current.searchQuery(query);
        break;
      case '/Audio':
        audioRef.current.searchQuery(query);
        break;
      case '/Images':
        imageRef.current.searchQuery(query);
        break;
      case '/Hashtags':
        hashtagRef.current.searchQuery(query);
        break;
      default:
        postRef.current.searchQuery(query);
    }
  }

  return (
    <>
    <Grid container>
      <Grid item sm={2} xs={1}></Grid>
    <Grid item sm={8} xs={10} className="App">
    <AppBar/>
        <Search handleSearch={handleSearch}/>
        <div className="text-center font-bold text-4xl mt-4 mb-2">
            Discover <span className='text-purple-800'>Nostr</span>
        </div>
        <div className='text-center mb-2 text-xl'>Learn what is trending <span className='text-purple-800'>today</span></div>
    <BrowserRouter>
      <NoStrNav/>
          <Route path="/" exact component={()=><Main ref={postRef} filter="posts"/>}/>
          <Switch>
          <Route path="/Video" exact component={()=><Main ref={videoRef} filter="video"/>} />
          <Route path="/Hashtags" exact component={()=><Main ref={hashtagRef} filter="hashtag"/>}/>
          <Route path="/Audio" exact component={()=><Main ref={audioRef} filter="audio"/>}  />
          <Route path="/Images" exact component={()=><Main ref={imageRef} filter="image"/>} />
          <Route path="/Links" exact component={()=><Main ref={linkRef} filter="link"/>} />
          </Switch>
    </BrowserRouter>
    </Grid>
    </Grid>
    <Grid container>
      <Grid item sm={12} xs={12}>
        <div className='w-full text-right text-xs mt-16 '>
           <span className='mr-4'> @version: 1.0.7 </span>
        </div>
      </Grid>
    </Grid>
    </>
    
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

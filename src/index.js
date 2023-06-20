import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes,Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Grid from '@mui/material/Grid';
import Main from './Main';
import  AppBar from './AppBar';
import Search from './Search';
import NoStrNav from './NoStrNav';

export default function App() {
  return (
    <>
    <Grid container>
      <Grid item sm={2} xs={1}></Grid>
    <Grid item sm={8} xs={10} className="App">
    <AppBar/>
        <Search/>
        <div className="text-center font-bold text-4xl mt-4 mb-2">
            Discover <span className='text-purple-800'>Nostr</span>
        </div>
        <div className='text-center mb-2 text-xl'>Learn what is trending <span className='text-purple-800'>today</span></div>
    <BrowserRouter>
      <NoStrNav/>
          <Route path="/" exact component={()=><Main filter="posts"/>}/>
          <Switch>
          <Route path="/Video" exact component={()=><Main filter="video"/>} />
          <Route path="/Hashtags" exact component={()=><Main filter="hashtag"/>}/>
          <Route path="/Audio" exact component={()=><Main filter="audio"/>}  />
          <Route path="/Images" exact component={()=><Main filter="image"/>} />
          <Route path="/Links" exact component={()=><Main filter="link"/>} />
          </Switch>
    </BrowserRouter>
    </Grid>
    </Grid>
    <Grid container>
      <Grid item sm={12} xs={12}>
        <div className='w-full text-right text-xs mt-16 '>
           <span className='mr-4'> @version: 1.0.5 </span>
        </div>
      </Grid>
    </Grid>
    </>
    
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

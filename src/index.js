import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes,Switch, Route,Outlet } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Wrapper from './Wrapper';
import Grid from '@mui/material/Grid';
import Main from './Main';
import  AppBar from './AppBar';
import Search from './Search';
import NoStrNav from './NoStrNav';

export default function App() {
  return (
    <Grid container>
      <Grid item sm={2} xs={0}></Grid>
    <Grid item sm={8} xs={12} className="App">
    <AppBar/>
        <Search/>
        <div className="text-center font-bold text-4xl mt-4 mb-2">
            Discover <span className='text-purple-800'>Nostr</span>
        </div>
        <div className='text-center mb-2 text-xl'>Learn what is trending <span className='text-purple-800'>today</span></div>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Main filter="post"/>}>
          <Route path="Video" element={<AppBar filter="video" />} />
          <Route path="Hashtags" element={<Main filter="hashtag" />} />
          <Route path="/Audio" element={<Main filter="audio" />} />
          <Route path="/Images" element={<Main filter="image" />} />
          <Route path="/Links" element={<Main filter="link" />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    <Outlet/>
    </Grid>
    </Grid>
    
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

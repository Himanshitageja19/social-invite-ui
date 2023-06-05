import './App.css';
import Main from './Main'
import Grid from '@mui/material/Grid';

function App() {
  return (
    <Grid container>
      <Grid item sm={2} xs={0}></Grid>
    <Grid item sm={8} xs={12} className="App">
     <Main/>
    </Grid>
    </Grid>
  );
}
export default App;

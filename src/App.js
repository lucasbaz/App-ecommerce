import './App.css';
import './components/NavBar.css';
import NavBar from './components/NavBar';
import CardItem from './components/Cards/Card';
import { Container, Grid } from '@mui/material';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1>e-commerce APP v0.1</h1>
      <div>
        <p>Entrega de desafio 1 - <strong>creacion del CLI</strong> </p>
      </div>
      <Container>
        <Grid container>
          <Grid item md={3}>
            <CardItem></CardItem>
          </Grid>
          <Grid item md={3}>
            <CardItem></CardItem>
          </Grid>
          <Grid item md={3}>
            <CardItem></CardItem>
          </Grid>
          <Grid item md={3}>
            <CardItem></CardItem>
          </Grid>
        </Grid>
      </Container>
      
    </div>
  );
}

export default App;

import './App.css';
import './components/NavBar.css';
import './components/Cards/Card.css';
import NavBar from './components/NavBar';
import { Container} from '@mui/material';
import CardList from './components/CardList/CardList';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1>e-commerce APP v0.1</h1>
      <div>
        <p>Entrega de desafio 1 - <strong>creacion del CLI</strong> </p>
      </div>
      <Container>
        <CardList />
      </Container>
      
    </div>
  );
}

export default App;

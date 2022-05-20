import './App.css';
import './components/NavBar.css';
import NavBar from './components/NavBar';
import Card from './components/Cards/Card';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1>e-commerce APP v0.1</h1>
      <div>
        <p>Entrega de desafio 1 - <strong>creacion del CLI</strong> </p>
      </div>
      <Card></Card>
    </div>
  );
}

export default App;

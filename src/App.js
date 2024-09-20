import './App.css';
import Card from './components/Card';

const App = () => {
  return (
    <div className="App">
      <Card titulo="Card 1" descricao="Meu primeiro card" style={{ backgroundColor: 'lightblue'}}></Card>
      <Card titulo="Card 2" descricao="Meu segundo card"></Card>
      <Card titulo="Card 3" descricao="Meu terceiro card" style={{ backgroundColor: 'lightcoral'}}></Card>
    </div>
  );
}

export default App;

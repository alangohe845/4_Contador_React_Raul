import './App.css';
import BasicExample from './components/barraSuperior';
import Cartas from './components/cartas';
import Contador from './components/Contador.js';

function App() {
  return (
    <div className='App'>
      <BasicExample />
      <Contador />
      <Cartas />
    </div>
  );
}

export default App;

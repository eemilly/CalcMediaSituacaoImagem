import logo from './logo.svg';
import './App.css';
import MediaNotas from './components/MediaNotas';
import Situacao from './components/Situacao';
import './components/MediaNotas.css';
import Imagem from './components/Imagem';

function App() {
  return (
    <div className="App">
      <MediaNotas></MediaNotas>
      <Situacao/>
      <Imagem/>
    </div>
  );
}


export default App;
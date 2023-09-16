import './App.css';
import Logo from './componentes/Logo'
import OpcoesHeader from './componentes/OpcoesHeader';
import OpcoesIcones from './componentes/OpcoesIcones';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <OpcoesHeader></OpcoesHeader>
        <OpcoesIcones></OpcoesIcones>
      </header>
    </div>
  );
}

export default App;
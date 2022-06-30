import QuemSomos from './pages/quemsomos/quemsomos'
import Faleconosco from './pages/faleconosco/faleconosco'
import Rodape from './components/Rodape'
import Cabecalho from './components/Cabecalho'
import Menu from './components/Menu'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Cabecalho />
        <Menu />
        <Routes>
        <Route path='/quemsomos'  component={QuemSomos} />
        <Route path='/faleconosco' component={Faleconosco} />
        </Routes>
     
        <Rodape />
      </div>
    </BrowserRouter>
  );
}

export default App;

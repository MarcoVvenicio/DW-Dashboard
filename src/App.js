
import QuemSomos from './pages/quemsomos/quemsomos'
import Faleconosco from './pages/faleconosco/faleconosco'
import Rodape from './components/Rodape/Rodape'
import Cabecalho from './components/Cabecalho/Cabecalho'
import Menu from './components/Menu/Menu'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
      <div className="App">
        <BrowserRouter>
        <Cabecalho />
        <Menu />
        <Routes>
        <Route path='/quemsomos' element={<QuemSomos />} />
        <Route path='/faleconosco' element={<Faleconosco />} />
        </Routes>
     
        <Rodape />
        </BrowserRouter>
      </div>
  );
}

export default App;

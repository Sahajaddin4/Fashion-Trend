import React from 'react';
import Header from './Layouts/Header';
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './Home';

function App() {
  return (
  <>
  <Header/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} ></Route>
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;

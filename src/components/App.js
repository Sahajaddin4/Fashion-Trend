import React from 'react';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminPage from './pages/AdminPage/AdminPage';
function App() {
  return (
  <>
  <Header/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} ></Route>
      <Route path='/about' element={<About/>} ></Route>
      <Route path='/contact' element={<Contact/>} ></Route>
      <Route path='/admin' element={<AdminPage />} />
    </Routes>
    </BrowserRouter>
    <Footer/>
  </>
  );
}

export default App;

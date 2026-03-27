import { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Register';
import Home from './Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Login';
import Header from './Header';
import Carosels from './Carosels';
import Products from './Products';
import Footerr from './Footerr';


function App() {

return (

  <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/coro' element={<Carosels/>}></Route>
        <Route path='/products' element={<Products/>}></Route>


      </Routes>
      <Footerr/>
    </BrowserRouter>

    </>  
  );
}

export default App;

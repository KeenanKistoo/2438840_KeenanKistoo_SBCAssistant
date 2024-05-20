import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Design from './Pages/Design/Design';
import Theory from './Pages/Theory/Theory';
import Blog from './Pages/Blog/Blog';
import Assistant from './Pages/Assistant/Assistant';
import Art from './Pages/Art/Art';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/design' element={<Design/>}/>
          <Route path='/theory' element={<Theory/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/assistant' element={<Assistant/>}/>
          <Route path='/Art' element={<Art/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

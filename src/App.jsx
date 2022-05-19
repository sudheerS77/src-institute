import React from 'react'
import { Route, Routes } from 'react-router-dom';

//Pages
import Master from './Pages/master';
import Home from './Pages/Home';
import Event from './Pages/Event';


import HomeLayoutHoc from './HOC/Home.Hoc';

// React-Slick css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AdminHomePage from './Pages/Admin/admin.home';
import AdminMaster from './Pages/Admin/adminMaster';


const App = () => {
  return (
    <>
      {/* <Route path="/sdfkl" exact>
        <Redirect to="/home" />
      </Route> */}
      {/* <Route path='/' component={Home} /> */}
      <Routes>
        <Route path="/" element={<Home/>} />            
        <Route path="/:type"  element={<Master />} />
        {/* <Route path="/admin" element={<Master />} /> */}
        <Route path="/admin" element={<AdminHomePage />} />
        <Route path="/admin/:type" element={<AdminMaster/>} />
      </Routes>

      
      
    </>
  )
}

export default App;
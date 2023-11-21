import React from "react";
import { Routes, Route, Navigate} from "react-router-dom";

import Home from "../../pages/Home.jsx";
import Login from "../../pages/Login.jsx";
import Main from "../../pages/Main.jsx";
import CurrencyDetails from "../../pages/CurrencyDetails.jsx";

const Routers = () => {
  return (
  <Routes>
    <Route path='/' element={<Navigate to='/home'/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path="/main" element={<Main/>}/>
    <Route path='/currencies/:id' element={<CurrencyDetails/>}/>
  </Routes>
  )
};

export default Routers;

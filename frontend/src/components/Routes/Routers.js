import React from "react";
import { Routes, Route, Navigate} from "react-router-dom";

import Home from "../../pages/Home.jsx";
import Login from "../../pages/Login.jsx";
const Routers = () => {
  return (
  <Routes>
    <Route path='/' element={<Navigate to='/home'/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
  </Routes>
  )
};

export default Routers;

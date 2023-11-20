import React from "react";
import Home from './Pages/Home';
import { Route, Routes } from "react-router-dom";
import Login from './Pages/Login'
import Signup from './Pages/Signup'


function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/singup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const[user,setLogin]=useState({})

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ user && user._id ? <Home setLogin={setLogin}></Home> : <Login setLogin={setLogin}></Login>}> </Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/login" element={<Login setLogin={setLogin}></Login>} >
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

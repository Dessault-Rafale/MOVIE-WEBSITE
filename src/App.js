import Navbar from "./Components/Navbar/Navbar";
import Bottom from "./Components/Bottom/Bottom";
import { useState, } from "react"
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Router from "./Components/Router/Router";
import Home from "./Pages/Home";


function App() {
  
  return (
    
      <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/routerpage/:id" element={<Router/>}></Route>
  </Routes>
  </BrowserRouter>
  
    
    
  );
}

export default App;

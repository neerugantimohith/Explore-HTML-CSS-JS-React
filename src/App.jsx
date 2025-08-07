import React from "react";
import {BrowserRouter,Routes,Route}from "react-router-dom";
import Home from "./Home";
import Html from "./components/Html";
import Css from "./components/Css";
import Javascript from "./components/Javascript";
import Reactjs from "./components/Reactjs";


const App =()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Html" element={<Html></Html>}></Route>
            <Route path="/Javascript" element={<Javascript></Javascript>}></Route>
            <Route path="/Css" element={<Css></Css>}></Route>
            <Route path="/Reactjs" element={<Reactjs></Reactjs>}></Route>
        </Routes>
        
        </BrowserRouter>
    );
}

export default App;
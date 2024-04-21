import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import History from "../pages/history";
import Graphic from "../pages/graphic";
import { useState } from "react";
import Context from "../context/context";
import Login from "../pages/login";

function Router() {
  const [dataDate, setDataDate] = useState({
    dataSensor:null,
    item: '',
    date: ''
  });

  return ( 
    <BrowserRouter>
      <Context.Provider value={{dataDate, setDataDate}}>
        <Routes>
            <Route path="/" element={<Login></Login>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/history" element={<History/>}></Route>
            <Route path="/g" element={<Graphic/>}></Route>
        </Routes>
      </Context.Provider>
    </BrowserRouter>
   );
}

export default Router;
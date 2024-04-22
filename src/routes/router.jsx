import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import History from "../pages/history";
import Graphic from "../pages/graphic";
import { useContext, useState } from "react";
import Context from "../context/context";
import UserContext from "../context/userContext";
import Login from "../pages/login";
import { PrivateRoute } from "../components/privateRoute";

function Router() {

  const [dataDate, setDataDate] = useState({
    dataSensor:null,
    item: '',
    date: ''
  });

  const [userState, setUserState] = useState(null)

  return ( 
    <BrowserRouter>
      <Context.Provider value={{dataDate, setDataDate}}>
        <UserContext.Provider value={{userState, setUserState}}>
          <Routes>
              <Route path="/" element={<Login></Login>}></Route>
              <Route element={<PrivateRoute stateUser={userState} />}>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/history" element={<History/>}></Route>
              </Route>
              <Route path="/g" element={<Graphic/>}></Route>
          </Routes>
        </UserContext.Provider>
      </Context.Provider>
    </BrowserRouter>
   );
}

export default Router;
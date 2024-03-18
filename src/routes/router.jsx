import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import History from "../pages/history";

function Router() {
  return ( 
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/history" element={<History/>}></Route>
      </Routes>
    </BrowserRouter>
   );
}

export default Router;
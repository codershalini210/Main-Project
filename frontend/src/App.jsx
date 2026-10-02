import All_Employees from "./components/All_Employees";
import Card from "./components/Card";
import Count from "./components/Count";
import Regeg from "./components/Regeg";
import Services from "./components/Services";
import TAkinvaluefromstate from "./components/TAkinvaluefromstate";
import Users from "./components/Users";
import WorkingwithImages from "./components/WorkingwithImages";
import Home from "./components/Home";

import { Route,Routes } from "react-router-dom";
import Menubar from "./components/Menubar";
export default function App(){
  return(
<>
<h1>This is above routes</h1>
<Menubar></Menubar>
<Routes>
  <Route path="/" element={<Home></Home>}></Route>
    <Route path="/Count" element={<Count></Count>}></Route>
    <Route path="/Services" element={<Services></Services>}></Route>
    <Route path="/employees" element={<All_Employees></All_Employees>}></Route>
</Routes>
<h1>This is Below routes</h1>
      </> 
    
  )
}
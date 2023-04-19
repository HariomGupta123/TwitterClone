import React from "react"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import DashBoard from "./DashBoard";


const Component=()=>{
    return<>
    <BrowserRouter>
        <Routes>
              <Route path="/" element={ <DashBoard/>} />
              
              
        </Routes>
    </BrowserRouter>
    </>
}
export default Component;
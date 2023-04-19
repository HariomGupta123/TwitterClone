import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./DashBoard/Home";
import Notifications from "./DashBoard/Notifications";
import More from "./DashBoard/More";
import Explore from "./DashBoard/Explore";
import Profile from "./DashBoard/Profile";
import BookMarks from "./DashBoard/BookMarks";
import Masseges from "./DashBoard/Masseges";
import Sidebar from "./SideBar";
const App=()=>{
    return<>
        <BrowserRouter>
            <Sidebar>
            <Routes>
                <Route exact path="/home" element={<Home/>}/>
                <Route axact path="/notifications" element={<Notifications/>}/>
                <Route axact path="/more" element={<More/>}/>
                <Route path="/explore" element={<Explore/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/bookmark" element={<BookMarks/>}/>
                <Route path="/masseges" element={<Masseges/>}/>
            </Routes>
            </Sidebar>
            
        </BrowserRouter>
    </>
}
export default App;
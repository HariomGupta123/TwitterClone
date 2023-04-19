import React from "react"
import Home from "./DashBoard/Home";
import Notifications from "./DashBoard/Notifications";
import Explore from "./DashBoard/Explore";
import Masseges from "./DashBoard/Masseges";
import BookMarks from "./DashBoard/BookMarks";
import More from "./DashBoard/More";
import Profile from "./DashBoard/Profile";
const DashBoard=()=>{
    return<>
        <Home/>
        <Notifications/>
        <Explore/>
        <Masseges/>
        <More/>
        <Profile/>
        <BookMarks/>
    </>
}
export default DashBoard;
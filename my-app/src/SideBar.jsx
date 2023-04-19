import React from "react";
import "./App.css"
import { FaBell, FaBookmark, FaHashtag, FaHome, FaIcicles, FaMailBulk,  FaMale, FaTwitter } from "react-icons/fa"
import { NavLink } from "react-router-dom";

const Sidebar=({children})=>{
    const menuItem=[
        {
            path:"/home",
            name:"",
            icon:<FaTwitter/>
        },
        {
            path:"/home",
            name:"Home",
            icon:<FaHome/>
        },
        {
            path:"/masseges",
            name:"Masseges",
            icon:<FaMailBulk/>
        },
        {
            path:"/profile",
            name:"Profile",
            icon:<FaMale/>
        },
        {
            path:"/notifications",
            name:"Notifications",
            icon:<FaBell/>
        },
        {
            path:"/explore",
            name:"Explore",
            icon:<FaHashtag/>
        },
        
        {
            path:"/bookmark",
            name:"Bookmark",
            icon:<FaBookmark/>
        },
        {
            path:"/twitter_blue_sign_up",
            name:"Twitter Blue",
            icon:<FaHome/>
        },
        {
            path:"/more",
            name:"More",
            icon:<FaIcicles/>
        },
    ]
    return<>
        <div className="container">
           <div className="sidebar">
            {menuItem.map((item,index)=>{
                return(
                <NavLink to={item.path} key={index} className="link" activeclassName="active">
                <div className="icon">
                    {item.icon}
                </div>
                <div className="link_text">
                    {item.name}
                </div>

                </NavLink>)
            })}
            
            <div>
                   <h2 className="tweet"> Tweet</h2> 
            </div>
            </div>
            <main>{children}</main>
        </div> 
        
       
    </>

}
export default Sidebar
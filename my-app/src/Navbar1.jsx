import React from "react"
import {  NavLink } from "react-router-dom";
import  "./twitter.css"
const Navbar1=()=>{
    return<>
        <div className="navbar1">
       
            <ul>
                    <li>
                        <NavLink to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/bookmark">bookmark</NavLink>
                    </li>
                    <li>
                        <NavLink to="/explore">Explore</NavLink>
                    </li>
                    <li>
                        <NavLink to="/more">More</NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile">Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/masseges">masseges</NavLink>
                    </li>
                    <li>
                        <NavLink to="/notifications">Notifications</NavLink>
                    </li>
                    
            
            </ul>
           
        </div>
    </>
}
export default Navbar1;
import React from 'react';
import "./NavStyles.css"
import login from "../../assets/login.png";


export default function NavContent() {
    return (
        <div>
                <li className="navItem"><a href="../Home" className="navItemLink">Sign Out</a></li>
                {/* <li className="navItem"><a href=""><img src={login} alt="Login" id="loginbutton"></img></a></li> */}
        </div>
    )
}
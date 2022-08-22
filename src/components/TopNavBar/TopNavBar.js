import React, {useState} from 'react';
import logo from "../../assets/img.png";
import "./NavStyles.css"
import NavContent from "./NavContent";

const App = () => {

    return (
        <div id="mainNavBar">
            <a href="../Home"><img src={logo} alt="Logo" id="headerLogo"/></a>
            <div id="desktopMenu" className="navMenu">
                <ul> <NavContent /> </ul>
            </div>
        </div>
    );
}

export default App;
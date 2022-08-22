import React from 'react';
import TopNavBar from '../TopNavBar/TopNavBar'
import "./HomeStyles.css"

const App = () => {
    return (
        <div id="main">
        <TopNavBar />
            <div id="contentWrapper">
                <div id = "hookTextArea">
                    <p className='hookText' id = "hookLine1"> Let's</p>
                    <p className='hookText' id = "hookLine2"> Go</p>
                    <a href='' className='hookText'><p className='grow hookText' id = "hookLine3" style={{color: "#7bafd4"}}>Tarheels</p></a>                 
                </div>
            </div>
        </div>
    );
}

export default App;
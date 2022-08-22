import React from 'react';
import TopNavBar from '../TopNavBar/TopNavBar'
import "./HomeStyles.css"

const App = () => {
    return (
        <div id="main">
        <TopNavBar />
            <div id="contentWrapper">
                <div id = "hookTextArea">
                    <p className='hookText' id = "line 1"> Let's</p>
                    <p className='hookText' id = "line 2"> Go</p>
                    <p className='hookText' id = "line 3" style={{color: "#7bafd4"}}> Tarheels</p>
                </div>
            </div>
        </div>
    );
}

export default App;
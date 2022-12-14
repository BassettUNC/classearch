import React from 'react';
import TopNavBar from '../TopNavBar/TopNavBar'
import "./HomeStyles.css"

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "@firebase/auth";
import { collection, doc, getFirestore, setDoc } from '@firebase/firestore';
import app from '../../firebase/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';


const auth = getAuth(app);
const db = getFirestore(app);

const App = () => {
    let uid = false;
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          uid = true;
          console.log("signed in");
        } else {
            return;
        }
      });

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
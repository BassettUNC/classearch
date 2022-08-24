import React, {useRef, useState} from 'react';
import "./NavStyles.css"
import { getAuth, onAuthStateChanged, signOut, } from "@firebase/auth";
import app from '../../firebase/firebase';
import { collection, doc, getFirestore, setDoc } from '@firebase/firestore';

const auth = getAuth(app);
const db = getFirestore(app);




export default function NavContent() {
    const [loggedIn, setLoggedIn] = useState(true)
    onAuthStateChanged(auth, (user) => { 
        if (user) {
           setLoggedIn(true);
    
        } else {
            setLoggedIn(false);
        }
      });
    console.log(loggedIn)
    return (
        <div>
        {loggedIn ? (
            <li className="navItem"><a href="../Home" className="navItemLink">Dashboard</a></li>
        ) : (
            <li className="navItem"><a href="../Login/Login" className="navItemLink">Sign in</a></li>
        )}
                {/* <li className="navItem"><a href="../Home" className="navItemLink">{(uid ? 'minor' : 'major')}</a></li> */}
                {/* <li className="navItem"><a href=""><img src={login} alt="Login" id="loginbutton"></img></a></li> */}
        </div>
    )
}
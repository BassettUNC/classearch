import React from 'react';
import "./NavStyles.css"
import { getAuth, onAuthStateChanged, signOut, } from "@firebase/auth";
import app from '../../firebase/firebase';
import { collection, doc, getFirestore, setDoc } from '@firebase/firestore';

const auth = getAuth(app);
const db = getFirestore(app);
let uid;


onAuthStateChanged(auth, (user) => {
    if (user) {
       uid = true;

    } else {
        uid = false;
    }
  });

export default function NavContent() {
    console.log(uid)
    return (
        <div>
        {uid ? (
            <li className="navItem"><a href="../Home" className="navItemLink">Dashboard</a></li>
        ) : (
            <li className="navItem"><a href="../Login/Login" className="navItemLink">Sign in</a></li>
        )}
                {/* <li className="navItem"><a href="../Home" className="navItemLink">{(uid ? 'minor' : 'major')}</a></li> */}
                {/* <li className="navItem"><a href=""><img src={login} alt="Login" id="loginbutton"></img></a></li> */}
        </div>
    )
}
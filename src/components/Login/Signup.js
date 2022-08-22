import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";
import { collection, doc, getFirestore, setDoc } from '@firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Card, Form, Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import app from '../../firebase/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Login/Login.css';
import { Link } from 'react-router-dom';

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [school, setSchool] = useState("");
    const schools = ["UNC"];
    const [isDisabled, setIsDisabled] = useState(true);

    const updateEmail = (e) => {setEmail(e.target.value)};
    const updatePassword = (e) => {setPassword(e.target.value)};
    const updateName = (e) => {setName(e.target.value)};
    const updateSchool = (e) => {setSchool(e.target.value)};
    let history = useHistory();

    const handleSchoolChange = (e) => {
        setSchool(schools[e.target.value]);
    }


    const auth = getAuth(app);
    const db = getFirestore(app);

    const handleSignup = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((UserCredential) => {
            const user = UserCredential.user;
                (setDoc(doc(collection(db, "users"), user.uid), {
                    email: email, name: name, school: school
                }))
        })

        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
        }
        );
    };
    
    return (
        <Container 
            className='d-flex align-items-center justify-content-center'
            style={{ minHeight: "100vh" }}
        >
            <div className="w-100" style={{ maxWidth: "500px"}}>
                <Card id='login'>
                    <Card.Body>
                        <h2 className="text-center mb-4">Create Account</h2>
                        <Form>
                            <Form.Group id="email">
                                <Form.Label>Email </Form.Label>
                                <Form.Control type="email" onChange={updateEmail} placeholder="Enter email" required></Form.Control>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password </Form.Label>
                                <Form.Control type="password" onChange={updatePassword} placeholder="Enter password" required></Form.Control>
                            </Form.Group>
                            <Form.Group id="name">
                                <Form.Label>Name </Form.Label>
                                <Form.Control type="name" onChange={updateName} placeholder="Enter name" required></Form.Control>
                            </Form.Group>
                            <Form.Group id="roles">
                            <Form.Label>School </Form.Label>
                                <Form.Select onChange={handleSchoolChange}>
                                    <option>Select School</option>
                                    {schools.map((currentSchool, key) => <option value={key}>{currentSchool}</option>)}
                                </Form.Select>
                            </Form.Group>
                            &nbsp;
                            <Button className="w-100" type="submit" id='button' onClick={handleSignup}>Create Account</Button>
                        </Form>
                        &nbsp;
                        <div className='d-flex align-items-center justify-content-center'>
                            Already have an account?&nbsp;<Link to="/login">Login</Link>
                        </div> 
                    </Card.Body>
                </Card>
            </div>
        </Container>     
    )
}
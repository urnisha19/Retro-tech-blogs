import React, { useContext, useRef } from 'react';
import { UserContext } from '../../App';
import firebase from 'firebase/app';
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import { useForm } from "react-hook-form";
import './Login.css';
import { Container } from 'react-bootstrap';
import NavBar from '../NavBar/NaBar';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    let [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);
    const history = useHistory();
    const location = useLocation();

    const { register, errors, watch } = useForm({});
    const password = useRef({});

    const { from } = location.state || { from: { pathname: "/" } };


    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }

    const handleBlur = (e) => {
        let isFieldValid = true;
        // if (e.target.name === 'email') {
        //     isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        // }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value;
            isFieldValid = isPasswordValid;
        }
        if (isFieldValid) {
            const newUserInfo = { ...loggedInUser };
            newUserInfo[e.target.name] = e.target.value;
            setLoggedInUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
        if (loggedInUser.password === "#2021dev") {
            firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
                .then((res) => {
                    const newUserInfo = { ...loggedInUser };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    newUserInfo.isSignedIn = true;
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                })
                .catch((error) => {
                    const newUserInfo = { ...loggedInUser };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setLoggedInUser(newUserInfo);
                });
        }

        if (!newUser && loggedInUser.email && loggedInUser.password) {
            firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
                .then((res) => {
                    const newUserInfo = { ...loggedInUser }; //
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    newUserInfo.isSignedIn = true;
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                })
                .catch((error) => {
                    const newUserInfo = { ...loggedInUser }; //
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setLoggedInUser(newUserInfo);
                });
        }
        e.preventDefault();

    }

    return (
        <div>
            <NavBar />
            <div className='login'>
                <h1 className="header-text">Admin Login</h1>
                <form onSubmit={handleSubmit} className="login-form">
                    <h4 className="p-3" id="confirmLogin" style={{ color: "#CB594D" }}>Use default email and password</h4>
                    <input type="text" name='email' onBlur={handleBlur} placeholder="Admin Email" required />
                    <br />
                    <input type="password" name="password" onBlur={handleBlur} placeholder='Default Password' ref={register({
                        required: "You must specify a password",
                        minLength: {
                            value: "#2021dev",
                            message: "use default password!"
                        }
                    })} />
                    <br />
                    <input className='button-login' type="submit" value='Log in' />
                </form>
                 <p style={{ color: 'red' }}>{loggedInUser.error}</p>
            </div>
        </div>
    );
};

export default Login;
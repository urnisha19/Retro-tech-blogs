import React, { useContext } from 'react';
import { UserContext } from '../../App';
import firebase from 'firebase/app';
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import { useForm } from "react-hook-form";
import './Login.css';

const Login = () => {
    let [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register } = useForm({});
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
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
        if (loggedInUser.password === "#2021dev" && loggedInUser.email === "test@test.com") {
            firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
                .then((res) => {
                    const newUserInfo = { ...loggedInUser };
                    newUserInfo.isSignedIn = true;
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                })
                .catch((error) => {
                    const newUserInfo = { ...loggedInUser };
                    setLoggedInUser(newUserInfo);
                });
        }
        e.preventDefault();
    }

    return (
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <input type="text" name='email' onBlur={handleBlur} placeholder="Admin Email" required />
                <br />
                <input type="password" name="password" onBlur={handleBlur} placeholder='Default Password' ref={register({ required: "You must specify a password" })} />
                <br />
                <input className='button-login' type="submit" value='Log in' />
            </form>
            {
                (loggedInUser.password === "#2021dev" && loggedInUser.email === "test@test.com") ? <p>Successfully logged in. </p> : <p>Use default email and password!</p>
            }
        </div>
    );
};

export default Login;
import React from 'react';
import './Login.css';
import Logo from './../../images/logos/logo.png'
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.Config';
import { useContext } from 'react';
import { UserContext } from '../../App';

firebase.initializeApp(firebaseConfig);



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    var googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then(result => {

                const { displayName, email } = result.user;
                const signInUserInfo = {
                    name: displayName,
                    email: email
                }
                setLoggedInUser(signInUserInfo);
                history.replace(from);

            })
    }
    return (
        <div className="container-fluid">

            <div style={{ height: '100vh', width: '100vw' }} className="row login text-center justify-content-center align-items-center">
                <div className="col-md-5 ">
                    <img className="img-fluid w-25" src={Logo} alt="" />
                    <div className="login-box">
                        <h4 className="mb-3" style={{ fontWeight: '700' }}>Login With</h4>
                        <button className="login-container" onClick={handleGoogleSignIn}>
                            <div>
                                <img src="https://iili.io/2xnMx9.png" className="googleIcon" alt="" />
                            </div>
                            <p className="lead mt-2 mr-3">Continue with google</p>
                        </button>
                        <p>Don't Have account?<Link to="/login"> Create n account</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
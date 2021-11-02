import React, { useEffect } from 'react';
import GoogleButton from 'react-google-button';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../context/useAuth';
import Logo from './../../images/logos/logo.png';
import './Login.css';





const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const { loggedInUser, handleGoogleSignIn, error } = useAuth()
    useEffect(() => {
        if (loggedInUser) {
            history.replace(from);
        }
    }, [loggedInUser, history, from])

    return (
        <div className="container-fluid">

            <div style={{ height: '100vh', width: '100vw' }} className="row login text-center justify-content-center align-items-center">
                <div className="col-md-5 ">
                    <img className="img-fluid w-25" src={Logo} alt="" />
                    <div>
                          <div className="login-box">
                        <button onClick={()=> history.push('/')}  className="btn btn-info btnBack">Home</button>
                        <h4 className="mb-3" style={{ fontWeight: '700' }}>Login With</h4>
                        <GoogleButton
                            type="dark"
                            onClick={handleGoogleSignIn}
                        />
                    <div className="text-danger mt-4">{error && error}</div>
                    </div>
                    </div>
                  
                </div>
            </div>
        </div>
    );
};

export default Login;
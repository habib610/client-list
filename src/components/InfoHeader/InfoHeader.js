import React from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import Logo from './../../images/logos/logo.png'

const InfoHeader = ({info}) => {
    const[loggedInUser] = useContext(UserContext);
    let history = useHistory();
    const goHome = ()=>{
        history.push("/home")
    }
    return (
        <div className="row my-2">
            <div className="col-md-2">
                <img onClick={goHome} src={Logo} className="w-50 img-fluid" alt=""/>
            </div>
            <div className="col-md-8">
            <h4>{info}</h4>
            </div>
            <div className="col-md-2">
    <h5>{loggedInUser.name}</h5>
    <img src={loggedInUser.userphoto} className="w-25 img-fluid rounded-circle" alt=""/>
            </div>
        </div>
    );
};

export default InfoHeader;
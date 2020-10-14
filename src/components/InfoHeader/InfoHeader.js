import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import Logo from './../../images/logos/logo.png'

const InfoHeader = ({info}) => {
    const[loggedInUser] = useContext(UserContext);
    return (
        <div className="row my-2">
            <div className="col-md-2">
                <img src={Logo} className="w-50 img-fluid" alt=""/>
            </div>
            <div className="col-md-8">
            <h4>{info}</h4>
            </div>
            <div className="col-md-2">
    <h5>{loggedInUser.name}</h5>
            </div>
        </div>
    );
};

export default InfoHeader;
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Loader from 'react-loader-spinner';
import { UserContext } from '../../App';
import AdminSideBar from '../Admin/AdminSideBar/AdminSideBar';
import InfoHeader from '../InfoHeader/InfoHeader';
import OrderCard from './OrderCard/OrderCard';


const ServiceList = () => {
    const headerMiddleInfo = "My Order";
    const [loggedInUser] = useContext(UserContext);
    const [takenService, setTakenService] = useState([]);


    // takenServices
    useEffect(() => {
        fetch(`http://localhost:5000/takenServices?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setTakenService(data))
    },[])
 
    return (
        <div className="container-fluid">
            <InfoHeader info={headerMiddleInfo} />
            <div className="row no-gutters">
                <AdminSideBar></AdminSideBar>
                <div className="col-md-10" style={{ background: '#C6FFE0', height: '100%', }}>

                       {
                        takenService.length === 0 &&  
                                <Loader
                                   type="Puff"
                                   color="#111430"
                                   height={100}
                                   width={100}
                       /> }
                       <div className="row">
                       {
                               takenService.map(service => <OrderCard key={service.id} service={service}></OrderCard>)
                           }
                       </div>

                       

                </div>
            </div>
        </div>
    );
};

export default ServiceList;
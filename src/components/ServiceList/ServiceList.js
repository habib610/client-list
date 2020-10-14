import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Loader from 'react-loader-spinner';
import { UserContext } from '../../App';
import InfoHeader from '../InfoHeader/InfoHeader';
import Sidebar from '../Sidebar/Sidebar';
import service1 from './../../images/icons/service1.png'
import service2 from './../../images/icons/service2.png'
import OrderCard from './OrderCard/OrderCard';


const servicesTaken =[
    {
        id: 1,
        icon: service1,
        name: "Web and Mobile Design",
        detail: "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
        status: 'Pending',
    },
    {
        id: 2,
        icon: service2,
        name: "Web Development",
        detail: "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
        status: 'Done',
    }
]
const ServiceList = () => {
    const headerMiddleInfo = "Order";
    const [loggedInUser] = useContext(UserContext); //for filtering specific user
    const [takenService, setTakenService] = useState([]);

    console.log(takenService);
    // takenServices
    useEffect(()=>{
        fetch(`http://localhost:5000/takenServices?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setTakenService(data))
    }, [])
    return (
        <div className="container-fluid">
        <InfoHeader info={headerMiddleInfo}/>
        <div className="row no-gutters">
                <Sidebar></Sidebar>
            <div className="col-md-10">
                <div style={{background: '#C6FFE0', height: '100%'}}>
                <div className="row">
                <div className="col-md-12 bg-light d-flex-justify-content-center">
             {   takenService.length === 0 &&<Loader
                type="Puff"
                color="#111430"
                height={100}
                width={100}
              />}
              </div>
                    {
                        takenService.map(service => <OrderCard key={service.id} service={service}></OrderCard>)
                    }
                </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ServiceList;
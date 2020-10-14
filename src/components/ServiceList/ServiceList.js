import React from 'react';
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
        description: "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
        status: 'Pending',
    },
    {
        id: 2,
        icon: service2,
        name: "Web Development",
        description: "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
        status: 'Done',
    }
]
const ServiceList = () => {
    const headerMiddleInfo = "Order"
    return (
        <div className="container-fluid">
        <InfoHeader info={headerMiddleInfo}/>
        <div className="row no-gutters">
                <Sidebar></Sidebar>
            <div className="col-md-10">
                <div style={{background: '#C6FFE0', height: '92vh'}}>
                <div className="row">
                    {
                        servicesTaken.map(service => <OrderCard key={service.id} service={service}></OrderCard>)
                    }
                </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ServiceList;
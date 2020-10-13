import React from 'react';
import Service from '../Service/Service';
import service1 from './../../../images/icons/service1.png'
import service2 from './../../../images/icons/service2.png'
import service3 from './../../../images/icons/service3.png'

const services =[
    {
        id: 1,
        icon: service1,
        name: "Web and Mobile Design",
        description: "We craft stunning and amazing web UI, using a well drrafted UX to fit your product."
    },
    {
        id: 2,
        icon: service2,
        name: "Web Development",
        description: "With well written codes, we build amazing apps for all platforms, mobile and web apps in general."
    },
    {
        id: 3,
        icon: service3,
        name: "Web and Mobile Design",
        description: "We craft stunning and amazing web UI, using a well drrafted UX to fit your product."
    },
]
const AwesomeServices = () => {
    return (
        <section className=" py-5">
            <div className="container ">
                <div className="row my-5">
                    <div className="col-md-12 text-center">
                        <h2>Provided Awesome <span >Services</span> </h2>
                    </div>
                   {
                       services.map(service => <Service key={service.id} service={service}></Service>)
                   }
                </div>
            </div>
        </section>   
        );
};

export default AwesomeServices;
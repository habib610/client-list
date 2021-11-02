import React, { useEffect, useState } from 'react';
import Loader from "react-loader-spinner";
import AdminUpdatedServices from '../AdminUpdatedServices/AdminUpdatedServices';


const AwesomeServices = () => {
    const [services, serServices] = useState(null)
    useEffect(() => {
        fetch('https://murmuring-everglades-58263.herokuapp.com/getService')
            .then(res => res.json())
            .then(data => serServices(data))
    }, [])
    return (
        <section className=" my-5 ">
            <div className="container ">
                <div className="row ">
                    <div className="col-md-12 text-center my-5">
                        <h2>Provided Awesome <span >Services</span> </h2>
                    </div>
                    {services === null ? (<div className="col-md-12 text-center my-5">
                        <Loader type="Puff" color="#009444" height={100} width={100} />
                    </div>
                    ) : services.length === 0 ? (
                        <h1>No Service Available </h1>
                    ) :
                        services.map(service => <AdminUpdatedServices key={service._id} service={service}></AdminUpdatedServices>)
                    }
                </div>
            </div>
        </section>
    );
};

export default AwesomeServices;
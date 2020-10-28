import React, { useEffect, useState } from 'react';
import AdminUpdatedServices from '../AdminUpdatedServices/AdminUpdatedServices';



const AwesomeServices = () => {
    const [services, serServices] = useState([])
    useEffect(()=>{
        fetch('https://murmuring-everglades-58263.herokuapp.com/getService')
        .then(res=> res.json())
        .then(data => serServices(data))
    }, [])

    return (
        <section className=" my-5 ">
            <div className="container ">
                <div className="row ">
                    <div className="col-md-12 text-center my-5">
                        <h2>Provided Awesome <span >Services</span> </h2>
                       
                    </div>

                    {
                            services.map(service => <AdminUpdatedServices key={services._id} service={service}></AdminUpdatedServices>)
                        }
                </div>
            </div>
        </section>   
        );
};

export default AwesomeServices;
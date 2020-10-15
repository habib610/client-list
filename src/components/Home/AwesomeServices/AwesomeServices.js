import React, { useEffect, useState } from 'react';
import AdminUpdatedServices from '../AdminUpdatedServices/AdminUpdatedServices';



const AwesomeServices = () => {
    const [services, serServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/getService')
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
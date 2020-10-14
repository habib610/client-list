import React from 'react';
import fakeData from '../../fakeData/fakeData';
import Service from '../Service/Service';


const allServices = fakeData;

const AwesomeServices = () => {
    return (
        <section className=" py-5">
            <div className="container ">
                <div className="row my-5">
                    <div className="col-md-12 text-center">
                        <h2>Provided Awesome <span >Services</span> </h2>
                    </div>
                   {
                       allServices.map(service => <Service key={service.id} service={service}></Service>)
                   }
                </div>
            </div>
        </section>   
        );
};

export default AwesomeServices;
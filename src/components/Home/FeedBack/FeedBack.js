import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import FeedBackCard from '../FeedBackCard/FeedBackCard';





const FeedBack = () => {
    const [customerInfo, setCustomerInfo] = useState([]);

    useEffect(()=>{
        fetch(`https://murmuring-everglades-58263.herokuapp.com/getReviews`)
        .then(res=>res.json())
        .then(data => setCustomerInfo(data))
    },[])


    return (
        <section className="feedback py-5">
            <div className="container ">
                <div className="row my-5">
                    <div className="col-md-12 text-center">
                        <h2 className="brand-text mb-5">Clients <span>Feedback</span> </h2>
                    </div>
                    {
                        customerInfo.map(customer => <FeedBackCard info={customer} key={customer.id}></FeedBackCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default FeedBack;
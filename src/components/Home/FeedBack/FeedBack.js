import React from 'react';
import FeedBackCard from '../FeedBackCard/FeedBackCard';
import Customer1 from './../../../images/customer-1.png';
import Customer2 from './../../../images/customer-2.png';
import Customer3 from './../../../images/customer-3.png';

const CustomerInfo = [
    {
        id: 1,
        avatar: Customer1,
        name: "Nash Patrik",
        designation: "CEO, Manpal",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat "
    },
    {
        id: 1,
        avatar: Customer2,
        name: "Meraiam Barron",
        designation: "CEO, Manpal",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat "
    },
    {
        id: 1,
        avatar: Customer3,
        name: "Bria Malone",
        designation: "CEO, Manpla",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat "
    }
]


const FeedBack = () => {
    return (
        <section className="feedback py-5">
            <div className="container ">
                <div className="row my-5">
                    <div className="col-md-12 text-center">
                        <h2 className="brand-text mb-5">Clients<span>Feedback</span> </h2>
                    </div>
                    {
                        CustomerInfo.map(customer => <FeedBackCard info={customer} key={customer.id}></FeedBackCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default FeedBack;
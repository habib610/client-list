import React from 'react';
import Airbnb from './../../../images/logos/airbnb.png'
import Google from './../../../images/logos/google.png'
import NetFlex from './../../../images/logos/netflix.png'
import Slack from './../../../images/logos/slack.png'
import Uber from './../../../images/logos/uber.png'
const Company = () => {
    return (
        <section className="container my-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-sm-6 col-md-2 my-3">
                    <img src={Slack} className=" img-fluid  " alt=""/>
                </div>
                <div className="col-sm-6 col-md-2 my-3">
                    <img src={Google} className="img-fluid " alt=""/>
                </div>
                <div className="col-sm-6 col-md-2 my-3">
                    <img src={Uber} className="img-fluid w-75" alt=""/>
                </div>
                <div className="col-sm-6 col-md-2 my-3">
                    <img src={NetFlex} className="img-fluid w-75" alt=""/>
                </div>
                <div className="col-sm-6 col-md-2 my-3">
                    <img src={Airbnb} className="img-fluid w-75" alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Company;
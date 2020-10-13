import React from 'react';
import FooterForm from '../FooterForm/FooterForm';

const Footer = () => {
    return (
        <footer className="footer  pt-5">
        <div className="container">
            <div className="row mb-5">
                <div className="col-md-5">
                    <h1 className="brand-text">Let us handle your <br/> project, professionally.</h1>
                    <p className="py-4">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>
              <FooterForm></FooterForm>
            </div>
        <div className="row mt-5">
            <div className="col-12 text-center">
    <p className="lead">Copyright, Habib {new Date().getFullYear()}</p>
            </div>
        </div>
        </div>
        </footer>
    );
};

export default Footer;
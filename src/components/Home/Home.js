import React from 'react';
import AwesomeServices from './AwesomeServices/AwesomeServices';
import Company from './Company/Company';
import FeedBack from './FeedBack/FeedBack';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import OurWorks from './OurWorks/OurWorks';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Company></Company>
            <AwesomeServices></AwesomeServices>
            <OurWorks></OurWorks>
            <FeedBack></FeedBack>
            <Footer></Footer>
        </div>
    );
};

export default Home;

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
            <div id="service"><AwesomeServices /></div>
            <div id="works"><OurWorks /></div>
            <FeedBack />
            <div id="contact"><Footer /></div>
        </div>
    );
};

export default Home;

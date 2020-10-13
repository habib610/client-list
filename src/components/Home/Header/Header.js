import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';


const Header = () => {
    return (
        <main className="header-bg">
            <div className="container">
                <Navbar></Navbar>
                <HeaderMain></HeaderMain>
            </div>
        </main>
    );
};

export default Header;
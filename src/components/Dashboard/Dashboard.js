import React from 'react';

import AdminDashBoard from '../Admin/AdminDashBoard/AdminDashBoard';
import AdminSideBar from '../Admin/AdminSideBar/AdminSideBar';

import InfoHeader from '../InfoHeader/InfoHeader';

const Dashboard = () => {
    
    const headerMiddleInfo = "Service List";

    return (
        <div className="container-fluid">
            <InfoHeader info={headerMiddleInfo} />
            <div className="row no-gutters">
                <AdminSideBar></AdminSideBar>
                <div className="col-md-10" style={{ background: '#C6FFE0', height: '100%', }}>
                <AdminDashBoard></AdminDashBoard>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;
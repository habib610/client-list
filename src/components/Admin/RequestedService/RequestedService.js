import React from 'react';
import InfoHeader from '../../InfoHeader/InfoHeader';
import AddService from '../AddService/AddService';
import AdminSideBar from '../AdminSideBar/AdminSideBar';

const RequestedService = () => {
    const headerMiddleInfo = "Add Services"
    return (
        <div className="container-fluid">
        <InfoHeader info={headerMiddleInfo} />
        <div className="row no-gutters">
            <AdminSideBar></AdminSideBar>
            <div className="col-md-10" style={{ background: '#C6FFE0', height: '100%', }}>
            <AddService></AddService>
            </div>
        </div>
    </div>
    );
};

export default RequestedService;
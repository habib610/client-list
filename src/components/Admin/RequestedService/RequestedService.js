import React from 'react';
import InfoHeader from '../../InfoHeader/InfoHeader';
import AddService from '../AddService/AddService';
import AdminSideBar from '../AdminSideBar/AdminSideBar';

const RequestedService = () => {
    const headerMiddleInfo = "Add Services"
    return (
        <div className="container-fluid">
            <InfoHeader info={headerMiddleInfo}/>
            <div className="row no-gutters">
                    <AdminSideBar></AdminSideBar>
                <div className="col-md-10">
                    <div style={{background: '#C6FFE0', height: '92vh'}}>
                    <AddService></AddService>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestedService;
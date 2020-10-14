import React from 'react';
import InfoHeader from '../../InfoHeader/InfoHeader';
import OrderForm from '../../Order/OrderForm/OrderForm';
import Sidebar from '../../Sidebar/Sidebar';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import AdminTable from '../AdminTable/AdminTable';

const AdminDashBoard = () => {
    const headerMiddleInfo = "Service List";

    return (
        <div className="container-fluid">
            <InfoHeader info={headerMiddleInfo}/>
            <div className="row no-gutters">
                    <AdminSideBar></AdminSideBar>
                <div className="col-md-10">
                <div style={{background: '#C6FFE0', height: '98vh', }}>
            <div style={{background: 'gray'}} className="row text-white text-center ml-2">
            <div className="col-xs-2 col-sm-2  col-md-2 py-2">Name</div>
            <div className="col-xs-2 col-sm-2  col-md-2 py-2">Email Id</div>
            <div className="col-xs-2 col-sm-2  col-md-2 py-2">Service</div>
            <div className="col-xs-2 col-sm-2  col-md-2 py-2">Project Details</div>
            <div className="col-xs-2 col-sm-2  col-md-2 py-2">Status</div>
            </div>
                    <AdminTable></AdminTable>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashBoard;
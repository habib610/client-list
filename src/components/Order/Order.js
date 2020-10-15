import React from 'react';
import { useParams } from 'react-router-dom';
import AdminSideBar from '../Admin/AdminSideBar/AdminSideBar';
import InfoHeader from '../InfoHeader/InfoHeader';
import OrderForm from './OrderForm/OrderForm';

const Order = () => {
    const headerMiddleInfo = "Order";
    const {projectName} = useParams();

    return (
        <div className="container-fluid">
        <InfoHeader info={headerMiddleInfo} />
        <div className="row no-gutters">
            <AdminSideBar></AdminSideBar>
            <div className="col-md-10" style={{ background: '#C6FFE0', height: '100vh', }}>
            <OrderForm projectName={projectName}></OrderForm>
            </div>
        </div>
    </div>
    );
};

export default Order;
import React from 'react';
import { useParams } from 'react-router-dom';
import InfoHeader from '../InfoHeader/InfoHeader';
import Sidebar from '../Sidebar/Sidebar';
import OrderForm from './OrderForm/OrderForm';

const Order = () => {
    const headerMiddleInfo = "Order";
    const {projectName} = useParams();

    return (
        <div className="container-fluid">
            <InfoHeader info={headerMiddleInfo}/>
            <div className="row no-gutters">
                    <Sidebar></Sidebar>
                <div className="col-md-10">
                    <div style={{background: '#C6FFE0', height: '92vh'}}>
                    <OrderForm projectName={projectName}></OrderForm>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
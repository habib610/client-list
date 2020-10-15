import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

import AdminDashBoard from '../Admin/AdminDashBoard/AdminDashBoard';
import AdminSideBar from '../Admin/AdminSideBar/AdminSideBar';

import InfoHeader from '../InfoHeader/InfoHeader';
import OrderForm from '../Order/OrderForm/OrderForm';

const Dashboard = () => {
    
    const headerMiddleInfo = "Service List";
    const [loggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState(false);

    useEffect(()=>{
        fetch(`http://localhost:5000/getAdmin?email=${loggedInUser.email}`)
        .then(res=> res.json())
        .then(data => setAdmin(data))
    }, )

    return (
        <div className="container-fluid">
            <InfoHeader info={headerMiddleInfo} />
            <div className="row no-gutters">
                <AdminSideBar></AdminSideBar>
                <div className="col-md-10" style={{ background: '#C6FFE0', height: '100%', }}>
               {admin ? <AdminDashBoard></AdminDashBoard>: <OrderForm></OrderForm>}
                </div>
            </div>
        </div>

    );
};

export default Dashboard;
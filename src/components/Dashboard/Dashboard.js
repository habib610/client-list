import React, { useEffect, useState } from 'react';
import AdminDashBoard from '../Admin/AdminDashBoard/AdminDashBoard';
import AdminSideBar from '../Admin/AdminSideBar/AdminSideBar';
import useAuth from '../context/useAuth';
import InfoHeader from '../InfoHeader/InfoHeader';
import OrderForm from '../Order/OrderForm/OrderForm';




const Dashboard = () => {
    
    const headerMiddleInfo = "Service List";
    const {loggedInUser} = useAuth();
    const [admin, setAdmin] = useState(false);

    useEffect(()=>{
        fetch(`https://murmuring-everglades-58263.herokuapp.com/getAdmin?email=${loggedInUser.email}`)
        .then(res=> res.json())
        .then(data => setAdmin(data))
    }, [loggedInUser.email])

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
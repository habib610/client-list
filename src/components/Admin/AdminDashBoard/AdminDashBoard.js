import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import InfoHeader from '../../InfoHeader/InfoHeader';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import AdminTable from '../AdminTable/AdminTable';
import Loader from "react-loader-spinner";
const AdminDashBoard = () => {
const[users, serUsers] = useState([]);

    const headerMiddleInfo = "Service List";
    useEffect(()=>{
        fetch('http://localhost:5000/allUsers')
        .then(res=> res.json())
        .then(data => serUsers(data))
    }, [])

    return (
        <div className="container-fluid">
            <InfoHeader info={headerMiddleInfo}/>
            <div className="row no-gutters">
                    <AdminSideBar></AdminSideBar>
                {/* <div className=""> */}
                <div style={{background: '#C6FFE0', height: '100%', }}>
            <div style={{background: 'gray'}} className="row text-white text-center ">
                <div className="col-md-12 bg-light d-flex-justify-content-center">
             {   users.length === 0 &&<Loader
                type="Puff"
                color="#111430"
                height={100}
                width={100}
              />}
              </div>
            <div className="col-xs-2 col-sm-2  col-md-2 py-2">Name</div>
            <div className=" col-md-4 py-2">Email Id</div>
            <div className="col-xs-2 col-sm-2  col-md-2 py-2">Service</div>
            <div className="col-xs-2 col-sm-2  col-md-2 py-2">Project Details</div>
            <div className="col-xs-2 col-sm-2  col-md-2 py-2">Status</div>
            </div>

            {
             users.map(user => <AdminTable user={user}></AdminTable>)
            }
                    
                    </div>
                </div>
            </div>
        // </div>
    );
};

export default AdminDashBoard;
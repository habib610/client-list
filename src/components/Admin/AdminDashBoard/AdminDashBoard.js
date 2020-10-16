import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from 'react-loader-spinner';
import AdminTable from '../AdminTable/AdminTable';
import ServiceListHeader from '../ServiceListHeader/ServiceListHeader';
const AdminDashBoard = () => {
    const [users, serUsers] = useState([]);



    useEffect(() => {
        fetch('http://localhost:5000/allUsers')
            .then(res => res.json())
            .then(data => serUsers(data))
    }, [])
    return (
        <div>
            <ServiceListHeader></ServiceListHeader>
            {
                users.length === 0 && <div style={{ height: "95vh" }} className="row d-flex justify-content-center align-items-center">
                    <Loader
                        type="Puff"
                        color="#111430"
                        height={100}
                        width={100}
                    />
                </div>
            }
            {
            users.map(user => <AdminTable key={user._id} user={user}></AdminTable>)
            }
        </div>
    );
};

export default AdminDashBoard;
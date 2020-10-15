import React from 'react';
import InfoHeader from '../../InfoHeader/InfoHeader';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import MakeAdminForm from '../MakeAdminForm/MakeAdminForm';

const MakeAdmin = () => {
        const headerMiddleInfo = "Make Admin";
        return (
            <>
            <div className="container-fluid">
                <InfoHeader info={headerMiddleInfo}/>
                <div className="row no-gutters">
                        <AdminSideBar></AdminSideBar>
                        <div style={{background: '#C6FFE0'}} className="col-md-10">
                        <MakeAdminForm></MakeAdminForm>
                        </div>
                </div>
            </div>
            </>
    );
};

export default MakeAdmin;
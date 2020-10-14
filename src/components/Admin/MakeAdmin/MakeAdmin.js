import React from 'react';
import InfoHeader from '../../InfoHeader/InfoHeader';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import MakeAdminForm from '../MakeAdminForm/MakeAdminForm';

const MakeAdmin = () => {
        const headerMiddleInfo = "Make Admin"
        return (
            <div className="container-fluid">
                <InfoHeader info={headerMiddleInfo}/>
                <div className="row no-gutters">
                        <AdminSideBar></AdminSideBar>
                    <div className="col-md-12">
                        <div style={{background: '#C6FFE0', height: '92vh'}}>
                        <MakeAdminForm></MakeAdminForm>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default MakeAdmin;
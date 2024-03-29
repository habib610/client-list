import React from 'react';
import AdminSideBar from '../Admin/AdminSideBar/AdminSideBar';
import InfoHeader from '../InfoHeader/InfoHeader';
import ReviewForm from './ReviewForm/ReviewForm';

const Review = () => {
    const headerMiddleInfo = "Review";
    return (
        <div className="container-fluid">
        <InfoHeader info={headerMiddleInfo} />
        <div className="row no-gutters">
            <AdminSideBar></AdminSideBar>
            <div className="col-md-10" style={{ background: '#C6FFE0', minHeight: '100%',  }}>
            <ReviewForm></ReviewForm>
            </div>
        </div>
    </div>
    );
};

export default Review;
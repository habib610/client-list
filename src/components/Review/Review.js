import React from 'react';
import InfoHeader from '../InfoHeader/InfoHeader';
import OrderForm from '../Order/OrderForm/OrderForm';
import Sidebar from '../Sidebar/Sidebar';
import ReviewForm from './ReviewForm/ReviewForm';

const Review = () => {
    const headerMiddleInfo = "Order";
    return (
        <div className="container-fluid">
            <InfoHeader info={headerMiddleInfo}/>
            <div className="row no-gutters">
                    <Sidebar></Sidebar>
                <div className="col-md-10">
                    <div style={{background: '#C6FFE0', height: '92vh'}}>
                    <ReviewForm></ReviewForm>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
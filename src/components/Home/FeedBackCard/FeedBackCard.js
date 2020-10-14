import React from 'react';

const FeedBackCard = ({ info }) => {
    const { name, designation, details, avatar } = info;
    return (
        <div className="col-md-4">
            <div className="card p-4">
                <div className="card-body">
                    <div className="d-flex  align-items-center">
                        <img src={avatar} className="img-fluid w-25 mr-3" alt="" />
                        <div>
                            <h5 className="card-title">{name}</h5>
                            <h6>{designation}</h6>
                        </div>
                    </div>
                    <p className="card-text py-3">{details}</p>
                </div>
            </div>
        </div>
    );
};

export default FeedBackCard;
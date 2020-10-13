import React from 'react';

const FeedBackCard = ({ info }) => {
    const { name, designation, details, avatar } = info;
    return (
        <div class="col-md-4">
            <div class="card p-4">
                <div class="card-body">
                    <div className="d-flex  align-items-center">
                        <img src={avatar} className="img-fluid w-25 mr-3" alt="" />
                        <div>
                            <h5 class="card-title">{name}</h5>
                            <h6>{designation}</h6>
                        </div>
                    </div>
                    <p class="card-text py-3">{details}</p>
                </div>
            </div>
        </div>
    );
};

export default FeedBackCard;
import React from 'react';

const FeedBackCard = ({ info }) => {
    const { name, designation, description, userPhoto, } = info;
    return (
        <div className="col-md-4" >
            <div className="card p-4 my-3" style={{height: "250px"}}>
                <div className="card-body">
                    <div className="d-flex  align-items-center">
                        <img src={userPhoto} className="img-fluid w-25 mr-3 rounded-circle" alt="" />
                        <div>
                         
                            <h5 className="card-title mb-0">{name}</h5>
                            <p className="m-0">{designation}</p>
                        </div>
                    </div>
                    <p className="card-text py-3">{description.slice(0,80)}{description.length > 80 ? "..." : null} </p>
                </div>
            </div>
        </div>
    );
};

export default FeedBackCard;
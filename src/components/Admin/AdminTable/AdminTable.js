import React from 'react';

const AdminTable = ({user}) => {
    const {name, email, work, detail, status} = user;
    return (
        <div className="row text-dark  px-2">
            <div className=" col-md-2 my-2 font-weight-bold"><p>{name}</p></div>
            <div className="col-md-4 my-2 font-weight-bold"><p>{email}</p></div>
            <div className=" col-md-2 my-2 font-weight-bold"><p>{work}</p></div>
            <div className=" col-md-2 my-2 font-weight-bold"><p>{detail}</p></div>
            <div className=" col-md-2 my-2 font-weight-bold"><select className={`${status}`}>
    <option value="" >{status==="Pending"?"Pending":"Done" }</option>
    <option value="">{status==="Pending"?"Done":"Pending" }</option>
                </select></div>
            {/* <div className="col-xs-2 col-sm-2 col-md-2 my-2"><p className={`${status}`}>{status}</p></div> */}
        </div>
    );
};

export default AdminTable;
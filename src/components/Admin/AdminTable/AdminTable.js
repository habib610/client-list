import React from 'react';

const AdminTable = ({ user }) => {
    const { name, email, work, detail, status, _id } = user;



    const handleChange = (e) => {

        const uniqueKey = e.currentTarget.name;
        const status = "Done";
        const field = { status };


        fetch(`http://localhost:5000/updateStatus/${uniqueKey}`, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(field)
        })
            .then(res => res.json())
            .then(data => {
                console.log("updated successfully")
            })
    }



    return (
        <div className="row text-dark  px-2">
            <div className=" col-md-2 my-2 font-weight-bold"><p>{name}</p></div>
            <div className="col-md-4 my-2 font-weight-bold"><p>{email}</p></div>
            <div className=" col-md-2 my-2 font-weight-bold"><p>{work}</p></div>
            <div className=" col-md-2 my-2 font-weight-bold"><p>{detail}</p></div>
            <div className=" col-md-2 my-2 font-weight-bold">
                <select
                    onChange={handleChange} id="options" name={`${_id}`} className={`${status}`}>
                    <option value="" >{status === "Pending" ? "Pending" : "Done"}</option>
                    <option value="">{status === "Pending" ? "Done" : "Pending"}</option>
                </select></div>

        </div>
    );
};

export default AdminTable;
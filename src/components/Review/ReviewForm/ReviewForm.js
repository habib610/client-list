import React from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
      console.log(data);
    };
    return (
        <div className="row">
            <div className="col-md-8">
            <form onSubmit={handleSubmit(onSubmit)} className="p-4" style={{ width: "40vw" }}>


< div className="form-group my-0">
    <input type="text" name="name" ref={register({ required: true })} className="form-control" placeholder="Your name / Company's Name" /> <br />
    {errors.name && <span className="text-danger">Name is required</span>}
</div>


< div className="form-group my-0">
    <input type="text" name="designation" ref={register({ required: true })} className="form-control" placeholder="Your Email Address" /> <br />
    {errors.designation && <span className="text-danger">Designation is required</span>}
</div>

< div className="form-group my-0">
    <textarea type="text" name="description"  cols="30" rows="5"  ref={register({ required: true })} className="form-control" placeholder="Description" ></textarea> <br />
    {errors.description && <span className="text-danger">Description is required</span>}
</div>
<input type="submit" className="btn common-btn" />
</form>
            </div>
        </div>
    );
};

export default ReviewForm;
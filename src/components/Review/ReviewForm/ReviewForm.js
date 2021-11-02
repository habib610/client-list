import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Loader from "react-loader-spinner";
import useAuth from '../../context/useAuth';


const ReviewForm = () => {
    const { loggedInUser } = useAuth();
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data, e) => {
        setLoading(true)
        data.userPhoto = loggedInUser.userPhoto;

        fetch('https://murmuring-everglades-58263.herokuapp.com/takeReview', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res) {
                    setLoading(false)
                    alert("Review Posted Successfully!");
                    e.target.reset();
                }
            })

    };
    return (
        <div className="row">
            <div className="col-md-8">
                <form onSubmit={handleSubmit(onSubmit)} className="p-4" style={{ width: "40vw" }}>
                    < div className="my-0">
                        <input type="text" name="name" ref={register({ required: true })} className="form-control" placeholder="Your name / Company's Name" /> <br />
                        {errors.name && <span className="text-danger mt-0">Designation is required</span>}
                    </div>
                    < div className="my-0">
                        <input type="text" name="designation" ref={register({ required: true })} className="form-control" placeholder="Your Designation" /> <br />
                        {errors.designation && <span className="text-danger">Designation is required</span>}
                    </div>
                    < div className=" mb-0 my-0">
                        <textarea type="text" name="description" cols="30" rows="5" ref={register({ required: true })} className="form-control" placeholder="Description" ></textarea> <br />
                        {errors.description && <span className="text-danger">Description is required</span>}
                    </div>
                 <button disabled={loading} type="submit" className="btn common-btn">{loading ? <Loader type="Puff" color="#FBD062" height={20} width={20} /> :  "Submit"}</button>
                </form>
            </div>
        </div>
    );
};

export default ReviewForm;
import React from 'react';
import { useForm } from "react-hook-form";

const MakeAdminForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className="row">
            <div className="col-md-10">
                <form onSubmit={handleSubmit(onSubmit)} className="p-4" >
                    <div className="row">
                        <div className="col-md-6">
                            <input type="email" name="email" ref={register({ required: true })} className="form-control" placeholder="Service Title" /> <br />
                            {errors.email && <span className="text-danger">Email is required</span>}
                        </div>
                        <div className="col-md-4">
                            <input style={{ background: 'green', padding: '7px 20px', color: 'white', fontWeight: '700', border: "none", marginTop: '2px' }} type="submit" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MakeAdminForm;
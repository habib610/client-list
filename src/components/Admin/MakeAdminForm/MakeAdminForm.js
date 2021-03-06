import React from 'react';
import { useForm } from "react-hook-form";

const MakeAdminForm = () => {
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = (data, e) => {
        console.log(data);

        fetch('https://murmuring-everglades-58263.herokuapp.com/makeAdmin',{
            method: "POST",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res=>{
            if(res){
                alert("Admin Added successfully Successfully!");
                e.target.reset();
            }
        })


        e.target.reset();
    }
    return (
        <div className="row">
            <div className="col-md-10">
                <form onSubmit={handleSubmit(onSubmit)} className="p-4" >
                    <div className="row no-gutters">
                        <div className="col-md-6">
                            <input type="email" name="email" ref={register({ required: true })} className="form-control " placeholder="example@mail.com" /> <br />
                            {errors.email && <span className="text-danger">Email required</span>}
                        </div>
                        <div className="col-md-4">
                            <input className="btn adminBtn" type="submit" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MakeAdminForm;
import React from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

const AddService = () => {
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
                            < div className="form-group my-0">
                                <label htmlFor="title">Service Title</label>
                                <input type="text" name="title" ref={register({ required: true })} className="form-control" placeholder="Service Title" /> <br />
                                {errors.title && <span className="text-danger">Title is required</span>}
                            </div>
                            < div className="form-group my-0">
                                <label htmlFor="title">Description</label>
                                <textarea type="text" cols="30" rows="5" name="description" ref={register({ required: true })} className="form-control" placeholder="Service Description" ></textarea> <br />
                                {errors.description && <span className="text-danger">Description is required</span>}
                            </div>

                        </div>

                        <div className="col-md-4 ">
                            <div className="form-group">
                                <p style={{fontWeight:"700"}}>Icon</p>
                                <label for="file" className="imageUpload" >   <FontAwesomeIcon icon={faCloudUploadAlt} className="mx-2 fa-lg " /> Choose File </label>
                                <input name="file" type="file" accept="image/*" id="file" ref={register({ required: true })} className="form-control display-none" placeholder="File" /> <br />
                      
                                {errors.tel && <span className="text-danger ">Image required</span>}
                            </div>
                        </div>
                    </div>





                    <input type="submit" className="btn common-btn my-4" />
                </form>
            </div>
        </div>
    );
};

export default AddService;
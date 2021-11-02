import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Loader from "react-loader-spinner";
import useAuth from '../../context/useAuth';

const OrderForm = ({ projectName }) => {
    const [services, serServices] = useState([])
    const [loading, setLoading] = useState(false)
    const [title, setTitle] = useState(projectName !== undefined ? projectName : "Web design and Development")
    useEffect(() => {
        fetch('https://murmuring-everglades-58263.herokuapp.com/getService')
            .then(res => res.json())
            .then(data => serServices(data))
    }, [])


    const { register, handleSubmit, errors } = useForm();

    const { loggedInUser } = useAuth();


    const photo = services.find(project => project.title === title);


    const onSubmit = (data, e) => {
        setLoading(true)
        data.status = "Pending";
        data.icon = photo;
        data.work = title
          fetch('https://murmuring-everglades-58263.herokuapp.com/takeOrder',{
              method: "POST",
              headers:{'Content-Type': 'application/json'},
              body: JSON.stringify(data)
          })
          .then(res=>{
              if(res){
                    setLoading(false)
                  alert("Order Request Sent Successfully!")
                  e.target.reset();
              }
          })
    };



    return (
        <div className="row">
            <div className="col-md-8">
                <form onSubmit={handleSubmit(onSubmit)} className="p-4" style={{ width: "40vw" }}>
                    < div className="form-group my-0">
                        <input type="name" name="name" ref={register({ required: true })} className="form-control" placeholder="Your name / Company's Name" /> <br />
                        {errors.name && <span className="text-danger">Name is required</span>}
                    </div>
                    < div className="form-group my-0">
                        <input type="email" name="email" value={loggedInUser.email} ref={register({ required: true })} className="form-control" placeholder="Your Email Address" /> <br />
                        {errors.email && <span className="text-danger">Email is required</span>}
                    </div>               
                        <select className="select-box  mb-4" value={title} onChange={(e)=> setTitle(e.target.value)} >  
                            <option selected value="Web design and Development">Web design and Development</option>
                            <option value="Graphic design">Graphic design</option>
                            <option value="Product Photography">Product Photography</option>
                            <option value="React Application ">React Application </option>
                            <option value="Mobile Application Development">Mobile Application Development</option>
                        </select>
                    < div className="form-group my-0">
                        <input type="text" name="detail" ref={register({ required: true })} className="form-control" placeholder="Project Details" /> <br />
                        {errors.detail && <span className="text-danger">Project Details is required</span>}
                    </div>

                    <div className="form-group my-0 row">
                        <div className="col-4">
                            <input name="price" ref={register({ required: true })} className="form-control" placeholder="Price" /> <br />
                            {errors.price && <span className="text-danger">Price is required</span>}
                        </div>

                        <div className="col-6 offset-2">
                            <label htmlFor="file" className="imageUpload" >   <FontAwesomeIcon icon={faCloudUploadAlt} className="mx-2 fa-lg " /> Choose File </label>
                            <input name="file" type="file"  id="file" className="form-control display-none" placeholder="File" /> <br />
                        </div>
                    </div>
                    
                   <button disabled={loading} type="submit" className="btn common-btn">{loading ? <Loader type="Puff" color="#FBD062" height={20} width={20} /> :  "Submit"}</button>
                </form>
            </div>
        </div>
    );
};

export default OrderForm;
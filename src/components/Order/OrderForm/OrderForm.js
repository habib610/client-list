import React from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import fakeData from '../../fakeData/fakeData';

const OrderForm = ({projectName}) => {
    const { register, handleSubmit, errors } = useForm();

    const [loggedInUser] = useContext(UserContext);

    let icon = 'https://iili.io/2tmDQ4.png';
    if(projectName !== undefined){
        const imageUrl =   fakeData.find(project => project.name === projectName);
         icon = imageUrl.icon;
    }


    const onSubmit = (data, e) => {

      data.status = "Pending";
      data.icon = icon;

      fetch('http://localhost:5000/takeOrder',{
          method: "POST",
          headers:{'Content-Type': 'application/json'},
          body: JSON.stringify(data)
      })
      .then(res=>{
          if(res){
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
< div className="form-group my-0">
    <input type="text" name="work" value={projectName} ref={register({ required: true })} className="form-control" placeholder="Project name" /> <br />
    {errors.work && <span className="text-danger">Project name is required</span>}
</div>
< div className="form-group my-0">
    <input type="text" name="detail"  ref={register({ required: true })} className="form-control" placeholder="Project Details" /> <br />
    {errors.detail && <span className="text-danger">Project Details is required</span>}
</div>

<div className="form-group my-0 row">


    <div className="col-4">
    <input  name="price" ref={register({ required: true })} className="form-control" placeholder="Price" /> <br />
    {errors.price && <span className="text-danger">Price is required</span>}
    </div>

    <div className="col-6 offset-2">
        <label htmlFor="file" className="imageUpload" >   <FontAwesomeIcon icon={faCloudUploadAlt}className="mx-2 fa-lg " /> Choose File </label>
    <input   name="file" type="file" accept="image/*" id="file"  className="form-control display-none" placeholder="File" /> <br />
    </div>

</div>






<input type="submit" className="btn common-btn" />
</form>
            </div>
        </div>
    );
};

export default OrderForm;
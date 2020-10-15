import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

const AddService = () => {
    const [info, setInfo] = useState({});
    const [file , setFile] = useState(null);

    const handleBlur = (e)=>{
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }


    const handleFileChange =(e) =>{
        const newFile = e.target.files[0];
        setFile(newFile);

    }

    const handleImageUpload = event => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('description', info.description)
        formData.append('title', info.title)
      
        fetch('http://localhost:5000/addServices', {
          method: 'POST',
          body: formData
        })

        .then(response => response.json())
        .then(data => {
          if(data){
              alert("Service Added successfully");
            }
        })
        .catch(error => {
            console.error(error)
        })
        
        event.preventDefault();
        event.target.reset();
      }
    return (
        <div className="row">
            <div className="col-md-10">
                <form onSubmit={handleImageUpload} className="p-4" >
                    <div className="row">
                        <div className="col-md-6">
                            < div className="form-group my-0">
                                <label htmlFor="title">Service Title</label>
                                <input type="text" onBlur={handleBlur} name="title" className="form-control" placeholder="Service Title" /> <br />
                            </div>

                            < div className="form-group my-0">
                                <label htmlFor="description">Description</label>
                                <textarea type="text" cols="30" rows="5" onBlur={handleBlur} name="description" className="form-control" placeholder="Service Description" ></textarea> <br />
                            </div>
                        </div>

                        <div className="col-md-4 ">
                            <div className="form-group">
                                <p style={{ fontWeight: "700" }}>Icon</p>
                                <label htmlFor="file" className="imageUpload" >   <FontAwesomeIcon icon={faCloudUploadAlt} className="mx-2 fa-lg " /> Choose File </label>
                                <input name="file" onChange={handleFileChange} type="file" accept="image/*" id="file" className="form-control display-none" placeholder="File" /> <br />

                            </div>
                        </div>
                    </div>





                    <input type="submit" className="btn adminBtn my-4" />
                </form>
            </div>
        </div>
    );
};

export default AddService;
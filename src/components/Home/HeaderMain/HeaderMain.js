import React from 'react';
import Frame from './../../../images/logos/Frame.png'
const HeaderMain = () => {
    return (
       <div className="container my-5">
           <div className="row">
               <div className="col-md-5 align-self-center">
            <h1 className="brand-text " style={{fontWeight: '800'}}>Let’s Grow Your Brand To The <br/> Next Level</h1>
            <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
            <button className="btn common-btn">Hire Us</button>
               </div>
               <div className="col-md-7">
            <img src={Frame} className="w-100 img-fluid" alt=""/>
               </div>
           </div>
       </div>
    );
};

export default HeaderMain;
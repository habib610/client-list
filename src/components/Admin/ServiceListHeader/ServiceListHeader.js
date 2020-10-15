import React from 'react';

const ServiceListHeader = () => {
    return (

            <div className="row bg-dark py-2 ml-1 text-white">
               {/* <div className="col-md-12">
      users.length === 0 &&<Loader
                type="Puff"
                color="#111430"
                height={100}
                width={100}
              />
               </div>  */}

            <div className="col-md-2 font-weight-bold">Name</div>
            <div className="col-md-4 font-weight-bold">Email Id</div>
            <div className="col-md-2 font-weight-bold">Service</div>
            <div className="col-md-2 font-weight-bold">Project Details</div>
            <div className="col-md-2 font-weight-bold">Status</div>
            </div>
      

    );
};

export default ServiceListHeader;
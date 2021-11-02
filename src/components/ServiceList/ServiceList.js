import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import AdminSideBar from "../Admin/AdminSideBar/AdminSideBar";
import useAuth from "../context/useAuth";
import InfoHeader from "../InfoHeader/InfoHeader";
import OrderCard from "./OrderCard/OrderCard";

const ServiceList = () => {
    const headerMiddleInfo = "My Order";
    const { loggedInUser } = useAuth();
    const [takenService, setTakenService] = useState(null);

    // takenServices
    useEffect(() => {
        fetch(
            `https://murmuring-everglades-58263.herokuapp.com/takenServices?email=${loggedInUser.email}`
        )
            .then((res) => res.json())
            .then((data) => setTakenService(data));
    }, [loggedInUser.email]);

    return (
        <div className="container-fluid">
            <InfoHeader info={headerMiddleInfo} />
            <div className="row no-gutters">
                <AdminSideBar></AdminSideBar>
                <div
                    className="col-md-10"
                    style={{ background: "#C6FFE0", minHeight: "50vh" }}
                >
                    {takenService === null ? ( <div className="puff-container">
                         <Loader type="Puff" color="#009444" height={100} width={100} />
                    </div>
                       
                    ) : takenService.length === 0 ? (
                        <h1>You have no service available</h1>
                    ) : (
                        <div className="container">
                            <div className="row">
                                {takenService.map((service) => (
                                    <OrderCard key={service.id} service={service}></OrderCard>
                                ))}
                            </div>
                        </div>

                    )}
                </div>
            </div>
        </div>
    );
};

export default ServiceList;

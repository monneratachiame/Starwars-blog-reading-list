import React, { useContext } from 'react';
import PropTypes from "prop-types"
import { Context } from "../store/appContext";

export const CardVehicles = () => {
    const { store, actions } = useContext(Context);

    const dataVehicles = store?.cars?.[0]?.result.properties;
    console.log("alo", dataVehicles);


    return (
        <div className="card mb-3" style={{maxWidth: "540px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src="https://thorntons-investments.co.uk/wp-content/uploads/2017/08/400x200.png" className="img-fluid rounded-start h-100" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Name: {dataVehicles?.name}</h5> 
                    <p className="card-text">model: {dataVehicles?.model}</p>
                    <p className="card-text">length: {dataVehicles?.length}</p>
                    <p className="card-text">cargo capacity: {dataVehicles?.cargo_capacity} </p>
                </div>
                </div>
            </div>
        </div>
    );
}
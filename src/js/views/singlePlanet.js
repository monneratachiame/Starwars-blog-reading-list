import React, { useContext } from 'react';
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const CardPlanet = () => {
    const { store, actions } = useContext(Context);

    const dataPlanet = store?.planets?.[0]?.result.properties;
    console.log("alo", dataPlanet);

    return (
        <div className="card mb-3" style={{maxWidth: "540px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src="https://thorntons-investments.co.uk/wp-content/uploads/2017/08/400x200.png" className="img-fluid rounded-start h-100" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Name: {dataPlanet?.name}</h5> 
                    <p className="card-text">diameter: {dataPlanet?.diameter}</p>
                    <p className="card-text">population: {dataPlanet?.population}</p>
                    <p className="card-text">surface_water: {dataPlanet?.surface_water} </p>
                </div>
                </div>
            </div>
        </div>
    );
}

                    
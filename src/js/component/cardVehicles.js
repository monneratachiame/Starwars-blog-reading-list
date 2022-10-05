import React from 'react';
import PropTypes from "prop-types"
import {Link} from "react-router-dom"

//we renamed the component to MyCard 

function CardVehicles(props){
    return (
        <div className="card" style={{width: "18rem"}}> 
          <img className="card-img-top" src="https://thorntons-investments.co.uk/wp-content/uploads/2017/08/400x200.png" alt="Card image cap" /> 
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <Link to="/singleVehicle">
            <button onClick={props.learnMore} className="btn btn-primary" >Learn More</button>
            </Link>
            <span onClick={props.favCars}> <i className="fa fa-heart text-danger" /></span>
          </div>
        </div>
    );
}

CardVehicles.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,	
  learnMore: PropTypes.func,
  favCars: PropTypes.func
};

export default CardVehicles;
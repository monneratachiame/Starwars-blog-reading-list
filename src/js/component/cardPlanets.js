import React from 'react';
import PropTypes from "prop-types"
import {Link} from "react-router-dom"

//we renamed the component to MyCard 

function CardPlanets(props){
    return (
        <div className="card" style={{width: "18rem"}}> 
          <img className="card-img-top" src="https://thorntons-investments.co.uk/wp-content/uploads/2017/08/400x200.png" alt="Card image cap" /> 
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <Link to="/singlePlanet">
            <button onClick={props.learnMore} className="btn btn-primary" >Learn More</button>
            </Link>
            <span onClick={props.favPlanets}> <i className="fa fa-heart text-danger" /></span>
          </div>
        </div>
    );
}

CardPlanets.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
  learnMore: PropTypes.func,
  favPlanets: PropTypes.func
};

export default CardPlanets;

import React, { useState, useContext } from 'react';
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import "../../styles/cardCharacteres.css"
import propTypes from 'prop-types';
import { Context } from "../store/appContext";

//we renamed the component to MyCard 
    
function CardChacarteres(props){

  const { store, actions } = useContext(Context); 
  const [isfav, SetIsfav] = useState(true)

  console.log(isfav)

  const favorites = (Name, url) => {
    isfav === true ? actions.HandleFavorites(Name, url) : actions.DeleteFavorites(Name, url)
  }

    return (
        <div className="card" style={{width: "18rem"}}> 
          <img className="card-img-top" src="https://thorntons-investments.co.uk/wp-content/uploads/2017/08/400x200.png" alt="Card image cap" /> 
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <Link to="/singleCharacter">
                <button onClick={props.learnMore} className="btn btn-primary" >Learn More</button>
            </Link>
            <button type="button" className="btn border border-warning" onClick={() => {SetIsfav(!isfav); favorites(props.Name, props.url)}}><span className="text-warning">&#9825;</span></button>
          </div>
        </div>
    );
}

// addfav={() => {actions.HandleFavorites(item.name, item.url)}}
// delfav={() => {actions.DeleteFavorites(item.name, item.url)}}

CardChacarteres.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
  learnMore: PropTypes.func,
  favCharacteres: PropTypes.func,
  addfav: PropTypes.func,
  delfav: PropTypes.func,
  Name: PropTypes.string,
  url: PropTypes.string,
  // CounterFav: PropTypes.func
};

export default CardChacarteres;

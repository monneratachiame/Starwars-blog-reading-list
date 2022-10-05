import React, { useReducer, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const listFav = store?.favorites?.map((item, index) => {
		 
		return (
			<li key={index} >
				
				 	<a className="dropdown-item" onClick={() => {actions.SingleCharacteres(item.url)}}> {item.Name} </a>
				 
			</li>
			)
		})


	return (
		 <nav className="navbar navbar-light bg-light mb-3 px-4">
			<Link to="/">
				<img src="https://raw.githubusercontent.com/JuanRR17/Starwars-blog-reading-list/master/src/img/starWars.png" alt="..." width="90px"/>
			</Link>
			<div className="ml-auto">
			<div className="dropdown">
				<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</button>
				<ul className="dropdown-menu">
				<Link to="/singleCharacter">
					{listFav}
				</Link>
				</ul>
				</div>
			</div>	
		</nav> 
	);
};


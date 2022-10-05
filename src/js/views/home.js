import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import CardChacarteres from "../component/cardCharacteres";
import CardPlanet from "../component/cardPlanets";
import CardVehicles from "../component/cardVehicles";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context); 

	// const [countFavorite, setCountFavorite] = useState(0);
	const [characteres, setCharacteres] = useState();  
	const [planets, setPlanets] = useState();
	const [vehicles, setVehicles] = useState();
	const [favorites, setFavorites] = useState([]); //[] pq é um array, se for objeto é chaves {}
	const [urlChar, setUrlChar] = useState();
	const [urlVehi, setUrlVehi] = useState();
	const [urlPlan, setUrlPlan] = useState();
	const [isfav, SetIsfav] = useState(false)

	useEffect(() => {
		fetch('https://www.swapi.tech/api/people', {
			method: "GET",
			headers: {
			  "Content-Type": "application/json"
			}
		  })
		  .then((response) => response.json()) // a resposta que vier destransforma em string pra que eu possa trabalhar com ela
		  .then((data) => setCharacteres(data))
	}
	,[])
	
	// função pra next Characteres

	useEffect(() => {
		fetch(urlChar
		// 	, {
		// 	method: "GET",
		// 	headers: {
		// 	  "Content-Type": "application/json"
		// 	}
		//   }
		  )
		  .then((response) => response.json()) // a resposta que vier destransforma em string pra que eu possa trabalhar com ela
		  .then((data) => setCharacteres(data))
		  console.log("no", characteres)
	}
	,[urlChar])
	
	// função pra next Vehicules

	useEffect(() => {
		fetch(urlVehi, {
			method: "GET",
			headers: {
			  "Content-Type": "application/json"
			}
		  })
		  .then((response) => response.json()) // a resposta que vier destransforma em string pra que eu possa trabalhar com ela
		  .then((data) => setVehicles(data))
		  console.log("no", vehicles)
	}
	,[urlVehi])
	
	// função pra next Planets

	useEffect(() => {
		fetch(urlPlan, {
			method: "GET",
			headers: {
			  "Content-Type": "application/json"
			}
		  })
		  .then((response) => response.json()) // a resposta que vier destransforma em string pra que eu possa trabalhar com ela
		  .then((data) => setPlanets(data))
		  console.log("no", planets)
	}
	,[urlPlan])
	
	// 

	const listpeople = characteres?.results?.map((item, index) => {
		 
		return (<div style={{width: "18rem"}} key={index}>
			<CardChacarteres 
			title={item.name}
			learnMore={() => {actions.SingleCharacteres(item.url)}}
			// addfav={() => {actions.HandleFavorites(item.name, item.url)}}
			// delfav={() => {actions.DeleteFavorites(item.name, item.url)}}
			Name={item.name}
			url={item.url}
			/>
			</div>)
})

	// console.log("store", store?.people)

	const listcars = vehicles?.results?.map((item, index) => {
		const addFavotires = () => {
			
			setFavorites([...favorites, item.name])
		}

		return (<div style={{width: "18rem"}} key={index}>
			<CardVehicles 
			title={item.name}
			learnMore={() => {actions.SingleVehicle(item.url)}}
			favCars={() => {actions.HandleFavorites(item.name, item.url)}}
			/>
			</div>)
}) 

	const listplanets = planets?.results?.map((item, index) => {
		const addFavotires = () => {
			setFavorites([...favorites, item.name])
		}

		return (<div style={{width: "18rem"}} key={index}>
			<CardPlanet 
			title={item.name}
			learnMore={() => {actions.SinglePlanet(item.url)}}
			favPlanets={() => {actions.HandleFavorites(item.name, item.url)}}
			/>
			</div>)
}) 


	useEffect(() => {
		fetch('https://www.swapi.tech/api/planets', {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
			})
			.then((response) => response.json()) // a resposta que vier destransforma em string pra que eu possa trabalhar com ela
			.then((data) => setPlanets(data))
	}
	,[])

		useEffect(() => {
			fetch('https://www.swapi.tech/api/vehicles', {
				method: "GET",
				headers: {
				  "Content-Type": "application/json"
				}
			  })
			  .then((response) => response.json()) // a resposta que vier destransforma em string pra que eu possa trabalhar com ela
			  .then((data) => setVehicles(data))
		}
		,[])

	return (
		
	<div className="container">
		<div>
			<h4>Characteres</h4>
		</div>
		<div className="row scrolling-wrapper flex-nowrap mt-4 pb-4 pt-2 overflow-scroll">{listpeople}</div>
			<button type="button" className="btn btn-outline-dark" onClick={() => {console.log("hello"); setUrlChar(characteres?.previous)}} >previous</button>
			<button type="button" className="btn btn-outline-dark" onClick={() => {console.log("hello"); setUrlChar(characteres?.next)}} >next</button>
			<br></br>
		<br></br>
		<div>
			<h4>Vehicles</h4>
		</div>
		<div className="row scrolling-wrapper flex-row flex-nowrap mt-4 pb-4 pt-2 overflow-scroll">{listcars}</div>
			<button type="button" className="btn btn-outline-dark" onClick={() => {console.log("hello"); setUrlVehi(vehicles?.previous)}} >previous</button>
			<button type="button" className="btn btn-outline-dark" onClick={() => {console.log("hello"); setUrlVehi(vehicles?.next)}} >next</button>
		<br></br>
		<br></br>
		<div>
			<h4>Planets</h4>
		</div>
		<div className="row scrolling-wrapper flex-row flex-nowrap mt-4 pb-4 pt-2 overflow-scroll">{listplanets}</div>
			<button type="button" className="btn btn-outline-dark" onClick={() => {console.log("hello"); setUrlPlan(planets?.previous)}} >previous</button>
			<button type="button" className="btn btn-outline-dark" onClick={() => {console.log("hello"); setUrlPlan(planets?.next)}} >next</button>
	</div>
);
	}
import {useState} from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [],
			people: [],
			cars: [],
			planets: [],
			favorites: [],
		},
		actions: {

			SingleCharacteres: (singChar) => {
				fetch(singChar)
				  .then((response) => response.json()) 
				  .then((data) => setStore({
					people: [data], }))
			},

			SingleVehicle: (singVehi) => {
				fetch(singVehi)
				  .then((response) => response.json()) 
				  .then((data) => setStore({
					cars: [data], }))
			},

			SinglePlanet: (singPlan) => {
				fetch(singPlan)
				  .then((response) => response.json()) 
				  .then((data) => setStore({
					planets: [data], }))
			},

			HandleFavorites: (name, url) => {
				setStore({
					favorites: [...getStore().favorites, {"Name": name, "Url": url}]
				});
				console.log("hello", getStore().favorites)		
			},

			DeleteFavorites: (name, url) => {
				let newFavorites =  getStore().favorites.filter((element) => element.Name !== name);
				setStore({
					favorites: newFavorites
				});
				console.log("bye", getStore().favorites)
			},
			

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;


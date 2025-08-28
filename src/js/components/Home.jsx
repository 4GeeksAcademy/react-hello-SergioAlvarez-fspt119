import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// components
import { Card } from "./Card";
import { Jumbotron } from "./Jumbotron";
import { Navbar } from "./Navbar";

import { driver } from "driver.js";
import "driver.js/dist/driver.css";


const driverObj = driver({
  showProgress: true,
  steps: [
	  { element: '#jumbotron', popover: { title: 'Basicamente, esto es el "Jumbotron"', description: '¿Porqué se llama Jumbotron...?' } },
    { element: '#tittle', popover: { title: 'Este es el título', description: 'Que maskina' } },
    { element: '#apruebame', popover: { title: 'Me lo he currado esta vez', description: 'No puedes decir lo contrario' } },
    { element: '#documentacionBS', popover: { title: 'Boton interactivo', description: 'Este botón te lleva a Bootstrap' } },
    { element: '#cards', popover: { title: 'Cards responsivas', description: 'Tienen mas agilidad que mis meniscos' } },
  ]
});

export const tour = () =>{
    driverObj.drive()
}





	//create your first component
	const Home = () => {
		return (
			
			<>
			<Navbar></Navbar>
			<Jumbotron></Jumbotron>
			<Card></Card>
			</>
	);
};


export default Home
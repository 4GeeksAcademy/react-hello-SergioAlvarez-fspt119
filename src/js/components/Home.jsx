import React from "react";

// components
import { Card } from "./Card";
import { Jumbotron } from "./Jumbotron";
import { Navbar } from "./Navbar";



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
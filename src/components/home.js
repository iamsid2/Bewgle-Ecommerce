import React, { Component } from "react";
import Button from "./buttons";
import Imagepage from "./images";
import Reviews from "./reviews";

class Home extends Component {
	render() {
		return (
			<div className="row home">
				<Imagepage/>
				<Button/>
				<Reviews/>
			</div>
		);
	}
}

export default Home;

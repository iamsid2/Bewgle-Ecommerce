import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
	render() {
		return (
			<header>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
					<div className="container">

					<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
							<img src="amazon.png" className="Amazonimg" alt="AmazonImage" width="80" height="60"/>
					</li>
					</ul>

						<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<input type="search" id="search" placeholder="Search..." />
					</li>

						<li className="nav-item active">
							<Link className="nav-link" to="/aboutus">
								<strong>STORES</strong>
								<span className="sr-only" />
							</Link>
						</li>
							<li className="nav-item active">
								<Link className="nav-link  fs" to="/">
									<i class="fa fa-shopping-cart"></i>
									<span className="sr-only" />
								</Link>
							</li>
						</ul>
						<br/>
						<div>
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<Link className="nav-link" to="/aboutus">
									<strong>HEADPHONES</strong>
									<span className="sr-only" />
								</Link>
							</li>
							<li className="nav-item active">
								<Link className="nav-link" to="/">
									<strong>SPEAKERS</strong>
									<span className="sr-only" />
								</Link>
							</li>
						</ul>
					</div>
					</div>
				</nav>
			</header>
		);
	}
}

export default Header;

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Button extends React.Component {

  render() {
    return (
      <div className="container">
      <Link className="btn btn-warning nav-link" to="/">
         Add to Cart</Link>
       <Link to="/" className="nav-link btn btn-success">Buy</Link>
       </div>
    );
  }
}

export default Button;

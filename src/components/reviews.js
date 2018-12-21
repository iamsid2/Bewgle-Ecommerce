import React, { Component } from "react";

class Reviews extends Component {
	render() {
		return (
			<div className="nav-item active container">
          <br/><b>ReviewCount: 3013 </b><br/><br/>
          <div className="row">
            <p>Sound Quality:4.2</p>
            </div>
            <div>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            </div>
            <div className="row">
              <p>Bass:4.2</p>
              </div>
              <div>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              </div>
              <div className="row">
                <p>Design and Built:4.2</p>
                </div>
                <div>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                </div>
                <div className="row">
                  <p>Battery Backup:4.2</p>
                  </div>
                  <div>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  </div>
			</div>
		);
	}
}

export default Reviews;

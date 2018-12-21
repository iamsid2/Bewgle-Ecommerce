import React, { Component } from "react";

class Imagepage extends Component{

    render()
    {
      return (
        <div className="container">

        <ul className="navbar-nav mr-auto">

        <li className="nav-item active">
        <h1> JBL Bluetooth Speaker</h1><br/>
        </li>
        <li className="nav-item active">
                  <img
                    src="../img/jbl.jpg"

                    alt="Blackwave"
                    height="500"
                    width="490"
                  />
                </li>
                <br/>
                <br/>
                    <li className="nav-item active">
                    <h5>JBL Go Portable Wireless Bluetooth Speaker with Mic (Black)</h5>
                    Bluetooth Speakers
                      <h3>₹ 1,799.000</h3>
                      IN STOCK

                      </li>
                      <li className="nav-item active">
                      <p>Product Id -:ABCD1234</p>
                      <p>CreatedAt -: 2018-08-31T09:36:08.448Z</p>
                      </li>
                    </ul>
                </div>
      );
 }
}
export default Imagepage;

import React from "react";
import "./Footer.css";
//import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <div className="f_left">
        <div>
          <h1>Besnik.</h1>
        </div>
        <div className="lef_p">
          <p>Submit your Phone number to order your food on call</p>
        </div>
        <div>
          <input type="text" placeholder="+91-934000xx" />
          <button>Submit</button>
        </div>
        <div className="term">
          <p>Terms & Conditions</p>
        </div>
      </div>

      <div className="f_right">
        <div className="info">
          <p>Information</p>
          <a href="#=">About us</a>
          <a href="#=">Testimonial</a>
          <a href="#=">Events</a>

          {/* <Link to="">About us</Link>
     <Link to="">About us</Link>
     <Link to="">About us</Link> */}
        </div>

        <div className="categ">
          <p>Categories</p>
          <a href="#=">Vegetarian</a>
          <a href="#=">Non Vegetarian</a>
          <a href="#=">Hot Drinks</a>
          <a href="#=">Cool Drinks</a>
          <a href="#=">Deserts</a>
        </div>

        <div className="useful">
          <p>Useful Links</p>
          <a href="#=">Payment & Tax</a>
          <a href="#=">Terms Of service</a>
          <a href="#=">Your Account</a>
          <a href="#=">Privacy Policy</a>
        </div>

        <div className="social">
          <p>Social</p>
          <a href="#=">Facebook</a>
          <a href="#=">Instagram</a>
          <a href="#=">Whatsapp</a>
          <a href="#=">Twitter</a>
        </div>
      </div>
      <div className="copy">
        <p>
          <i class="fa-regular fa-copyright"></i> Copyright 2023 All rights
          reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

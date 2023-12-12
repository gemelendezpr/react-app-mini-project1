import React from "react";
import "../Hero/Hero.css";
import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_image from "../assets/hero_image.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Sale - Up to 20% Off</h2>
        <div>
          <div className="hero-hand-icon">
            <p>NEW</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>GIFTS</p>
          <p>FOR EVERYONE</p>
        </div>
        <div className="hero-latest-btn">
          <Link
            to="/explore"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div>Explore Collection</div>
          </Link>

          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;

//Sale - Up to 40% Off

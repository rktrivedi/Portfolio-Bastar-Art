import React from "react";
import "./Hero.css";
import arrow_icon from "../Assets/arrow.png";
import hand_icon from "../Assets/hand_icon.png";
import hero_image from "../Assets/hero_image.jpg";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="herp-left">
        <h2>New Arriavals Only</h2>
        <div>
          <div className="hand-hand-icon">
            <p>new</p>
            <img src="hand_icon" alt="handIcon" />
          </div>
          <p>Collections</p>
          <p>for Everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="arrowIcon" />
        </div>
      </div>
      <div className="hero-right">
        <img src="hero_image" alt="" />
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import HomeBg from '../assets/img/fft.png'
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className="hero-cont">
      <div className="hero-text-cont">
        <div className="hero-text-wrapper">
          <h3 className="hero-text-h3">Nile Collection 2024</h3>
          <h2 className="hero-text-h2">Summer Arc</h2>
          <button className="hero-btn" onClick={() => navigate('/products')}>SHOP NOW</button>
        </div>
      </div>
      <div className="hero-img-cont">
        <img
          src={HomeBg}
          alt="humanImg"
          style={{ width: "100%", objectFit: "contain", height: '100vh' }}
        />
      </div>
    </div>
  );
};

export default Hero;

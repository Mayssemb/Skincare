import React from "react";
import heroImage from "../assets/images/hero-banner-1.jpg"; // Use an image from your assets
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Glow from Within</h1>
        <p>Your beauty, our passion. Discover skincare products that work for you.</p>
        <button className="cta-btn">Shop Now</button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Skincare products" />
      </div>
    </section>
  );
}

export default HeroSection;

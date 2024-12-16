import React, { useEffect, useState } from "react";
import heroImage1 from "../assets/images/hero-banner-1.jpg";
import heroImage2 from "../assets/images/hero-banner-2.jpg";
import product1 from "../assets/images/product-01.jpg";
import product2 from "../assets/images/product-02.jpg";
import product3 from "../assets/images/product-03.jpg";
import product4 from "../assets/images/product-04.jpg";
import ProductCard from "./ProductCard"; // Import ProductCard
import "./HeroSection.css";

const products = [
  {
    id: 1,
    name: "Product 1",
    image: product1,
    description: "This is a great skincare product for glowing skin.",
    price: "$30"
  },
  {
    id: 2,
    name: "Product 2",
    image: product2,
    description: "Nourish your skin with this hydrating moisturizer.",
    price: "$25"
  },
  {
    id: 3,
    name: "Product 3",
    image: product3,
    description: "Nourish your skin with this hydrating moisturizer.",
    price: "$25"
  },
  {
    id: 4,
    name: "Product 4",
    image: product4,
    description: "Nourish your skin with this hydrating moisturizer.",
    price: "$25"
  }
];

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.hero-section');
      const sectionPosition = section.getBoundingClientRect();
      if (sectionPosition.top < window.innerHeight && sectionPosition.bottom > 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToCart = (product) => {
    console.log("Adding to cart:", product);
    // Handle add to cart logic
  };

  return (
    <section className={`hero-section ${isVisible ? "fade-in" : ""}`}>
      <div className="card">
        <div className="hero-image">
          <img src={heroImage1} alt="Skincare" />
          <div className="text-overlay">
            <h2>Glow From Within</h2>
            <p>Embrace your natural beauty</p>
          </div>
        </div>
      </div>

      <div className="product-cards">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      <div className="card">
        <div className="hero-image">
          <img src={heroImage2} alt="Skincare" />
          <div className="text-overlay">
            <h2>Radiate Confidence</h2>
            <p>Feel fabulous with our skincare essentials</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

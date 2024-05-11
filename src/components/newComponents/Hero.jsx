import React from "react";

import "../../assets/css/hero.css";
// import heroImg from "../../assets/images/hero-image.png";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";

const Hero = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="hero-section__text">
        <h1 className="hero-heading">Your Gateway to Smart Education</h1>
        <p className="hero-subheading">
          Unite for a transformative education journey – where teachers,
          students, and parents join hands in lifelong learning.
        </p>
        {!isLoggedIn && (
          <div className="hero-buttons">
            <Button
              type="default"
              text="Join us"
              onClick={() => navigate("/contact-us")}
            />
            <Button
              type="info"
              text="Log In"
              onClick={() => navigate("/login")}
            />
          </div>
        )}
      </div>
      <div className="hero-section__image">
        <div className="hero-image">
          <img src="/hero-image.png" alt="Hero Image" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import './Website.css';
import { Link, useNavigate } from 'react-router-dom'
import backgroundPhoto from '../../Images/Untitled Project (5).png';
import logo from '../../Images/logo_maybe_2-removebg-preview.png';
import Footer from '../Footer/Footer';
import image1 from '../../Images/4991050-removebg-preview.png';
import image2 from '../../Images/5050518-removebg-preview.png'
import image3 from '../../Images/6036925-removebg-preview.png'

const Website = () => {

  return (
    <>
      <div className="outer-container">
        <img src={backgroundPhoto} className="background-container" alt="Background"></img>
        <div className="container">
          <div className="left-header">
            <img src={logo} className="logo left-header-items" alt="Logo"></img>
          </div>
          <div className="right-header">
            <Link className="login" to ="/login">Login</Link>
            <Link className="signup" to="/signup">Sign Up</Link>
          </div>
        </div>
        <div className="center-div">
          <div className="main-heading">IMAGINE A PLACE...</div>
          <div className="main-paragraph">where your fitness journey becomes a vibrant community experience. Where you're completing your fitness goals, sharing your progress and chatting with like-minded individuals.</div>

          <div className="paragraph-2">
            <button className="signup-button">Sign Up now!</button>
            <Link className="login-button" to="#">or Login if you are one of us!</Link>
          </div>

        </div>


      </div>
      <div className="outer-container-2">
        <img className="left-section image-section" src={image3}></img>
        <div className="right-section"><div class="right-section-heading">Fithub is more than just a fitness app</div>
          <div class="right-section-paragraph">It's your personal trainer, nutritionist, and social hub all in one. Whether you're looking to lose weight, build muscle, or improve your overall health!</div>
        </div>
      </div>
      <div className="outer-container-2" id="outer-container-3">
        <div className="right-section"><div class="right-section-heading">It is YOUR personal journey</div>
          <div class="right-section-paragraph">Personalized fitness and meal plans tailored to your goals and preferences. Fithub's AI-powered platform creates a plan that fits your lifestyle.
          </div>
        </div>
        <img className="left-section image-section" src={image2}></img>
      </div>
      <div className="outer-container-2">
        <img className="left-section image-section" src={image1}></img>
        <div className="right-section"><div class="right-section-heading">Track your progress and share it</div>
          <div class="right-section-paragraph">Detailed analytics and charts to track your journey and engage in friendly competition with group challenges.
          </div>
        </div>
      </div>
      <Footer />
    </>

  );
}

export default Website;

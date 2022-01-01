import React from 'react';
import banner1 from '../../../images/Banner/banner (1).jpg'
import banner2 from '../../../images/Banner/banner (2).jpg'
import banner3 from '../../../images/Banner/banner (3).jpg'

import './Banner.css'

const Banner = () => {
    return (
        <div id="carouselExampleDark" className="carousel  carousel-dark slide text-white" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner ">
          <div className="carousel-item active text-white" data-bs-interval="10000">
            <img src={banner3} className="img-fluid" alt="..."/>
            <div className="carousel-caption  text-center ">
              <h2 >WELCOME TO Urban Estate </h2>
                  <p className="para">“Urban Estate” has been a strong seller of brand Estate.</p>
                  <button className="btn btn-warning text-white mx-2 mb-2">GET STARTED NOW → </button>
                  <button className="btn btn btn-outline-warning text-white "> LEARN MORE </button>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={banner2} className="img-fluid" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h2>FIND YOUR DREAM Land</h2>
                  <p className="para"> Find the latest homes for sale, property news & real estate market data.</p>
                  <button className="btn btn-warning text-white mx-3">GET STARTED NOW → </button>
                  <button className="btn btn btn-outline-warning text-white "> LEARN MORE </button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner1}className="img-fluid" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h2>BEST PLACE FOR Buy Property!</h2>
                  <p className="para">We are the best seller in the world</p>
                  <button className="btn btn-warning text-white mx-3">GET STARTED NOW → </button>
                  <button className="btn btn btn-outline-warning text-white "> LEARN MORE </button>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
          </div>
    );
};

export default Banner;
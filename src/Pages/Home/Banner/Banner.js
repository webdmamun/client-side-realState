import React from "react";
<<<<<<< HEAD
// import banner1 from "../../../images/Banner/banner (1).jpg";
// import banner2 from "../../../images/Banner/banner (2).jpg";
// import banner3 from "../../../images/Banner/banner (3).jpg";

=======
>>>>>>> b9920792ed5310d5bfa3fe1959606356e1025877
import "./Banner.css";

const Banner = () => {
  return (
    <div
      id="carouselExampleDark"
      className="carousel  carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner ">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src="https://i.ibb.co/mqPrGZ3/4.png"
            className="img-fluid"
            style={{ opacity: 0.5 }}
            alt="..."
          />
          <div className="carousel-caption  text-center ">
            <h2 className="banner-text">WELCOME TO Urban Estate </h2>
            <p className="para">
              “Urban Estate” has been a strong seller of brand Estate.
            </p>
            <button className="btn btn-success mx-2 mb-2">
              GET STARTED NOW →{" "}
            </button>
            <button className="btn btn btn-outline-success ">
              {" "}
              LEARN MORE{" "}
            </button>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            style={{ opacity: 0.5 }}
            src="https://i.ibb.co/ygKBdY0/1.png"
            className="img-fluid"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h2 className="banner-text">FIND YOUR DREAM Land</h2>
            <p className="para">
              {" "}
              Find the latest homes for sale, property news & real estate market
              data.
            </p>
            <button className="btn btn-success mx-3">GET STARTED NOW → </button>
            <button className="btn btn btn-outline-success ">
              {" "}
              LEARN MORE{" "}
            </button>
          </div>
        </div>
        <div className="carousel-item">
          <img
            style={{ opacity: 0.5 }}
            src="https://i.ibb.co/bHt5dFj/3.png"
            className="img-fluid"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h2 className="banner-text">BEST PLACE FOR Buy Property!</h2>
            <p className="para">We are the best seller in the world</p>
            <button className="btn btn-success mx-3">GET STARTED NOW → </button>
            <button className="btn btn btn-outline-success ">
              {" "}
              LEARN MORE{" "}
            </button>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;

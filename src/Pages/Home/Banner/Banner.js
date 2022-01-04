import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <figure className="banner-effect">
          <img
            className="d-block w-100"
            src="https://i.ibb.co/mqPrGZ3/4.png"
            alt="First slide"
          />
          <figcaption>Urban Estate</figcaption>
        </figure>
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <figure className="banner-effect">
          <img
            className="d-block w-100"
            src="https://i.ibb.co/ygKBdY0/1.png"
            alt="Second slide"
          />
          <figcaption>Urban Estate</figcaption>
        </figure>
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <figure className="banner-effect">
          <img
            className="d-block w-100"
            src="https://i.ibb.co/bHt5dFj/3.png"
            alt="Third slide"
          />
          <figcaption>Urban Estate</figcaption>
        </figure>
        <Carousel.Caption>
          {/* <h3>BEST PLACE FOR Buy Property!</h3>
      <p>We are the best seller in the world</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;

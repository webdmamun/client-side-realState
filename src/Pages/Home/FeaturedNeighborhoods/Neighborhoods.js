/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Neighborhoods.css";

const Neighborhoods = () => {
  return (
    <div>
      <Container className="py-5">
        <h1 className="destination-heading">Our Coverage</h1>
        <hr />
        <Row>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="single bg">
              <img
                className="img-fluid"
                src="https://acmap.travelerwp.com/wp-content/uploads/2014/11/cali_5-1024x1024-270x335.jpg"
                alt="image"
              />
              <figcaption>CALIFORNIA</figcaption>
            </figure>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="single bg">
              <img
                className="img-fluid"
                src="https://acmap.travelerwp.com/wp-content/uploads/2018/12/los_angeles_3-1024x1024-270x335.jpg"
                alt="image"
              />
              <figcaption>LOS ANGELES</figcaption>
            </figure>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="single bg">
              <img
                className="img-fluid"
                src="https://acmap.travelerwp.com/wp-content/uploads/2015/02/san_francisco-1024x1024-270x335.jpg"
                alt="image"
              />
              <figcaption>MIAMI</figcaption>
            </figure>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="single bg">
              <img
                className="img-fluid"
                src="https://acmap.travelerwp.com/wp-content/uploads/2015/02/cheapest-car-insurance-in-new-jersey-nj-story-270x335.jpg"
                alt="image"
              />
              <figcaption>NEW JERSEY</figcaption>
            </figure>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="single bg">
              <img
                className="img-fluid"
                src="https://acmap.travelerwp.com/wp-content/uploads/2018/12/united-270x335.jpg"
                alt="image"
              />
              <figcaption>SAN FRANCISCO</figcaption>
            </figure>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="single bg">
              <img
                className="img-fluid"
                src="https://acmap.travelerwp.com/wp-content/uploads/2014/11/new-york-city-skyline-at-dusk-zo-cf1a9c35-270x335.jpg"
                alt="image"
              />
              <figcaption>NEW YORK</figcaption>
            </figure>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="single bg">
              <img
                className="img-fluid"
                src="https://acmap.travelerwp.com/wp-content/uploads/2018/12/nevaga_2-1024x1024-270x335.jpg"
                alt="image"
              />
              <figcaption>NEVADA</figcaption>
            </figure>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <figure className="single bg">
              <img
                className="img-fluid"
                src="https://acmap.travelerwp.com/wp-content/uploads/2018/11/gallary_6-1-270x335.jpg"
                alt="image"
              />
              <figcaption>NEW ORLEANS</figcaption>
            </figure>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Neighborhoods;

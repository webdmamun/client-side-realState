import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <Container className="">
      <h1 className="destination-heading pt-5">About Us</h1> <hr />
      <Row>
        <Col md={6}>
          <img
            className="rounded mt-5 img-fluid"
            src="https://i.ibb.co/r4TnBhy/Untitled-design.png"
            alt=""
          />
        </Col>
        <Col md={6}>
          <p className="mt-5 ">
            <strong>
              A Tradition of Excellence, Integrity, Knowledge and Service for
              over 60 years.
            </strong>
            <br />
            <br />
            At Estey Real Estate, you are number one. Whether you are a property
            owner, tenant, or buyer, we value your business and will provide you
            with the individual attention and service you deserve. We believe in
            a strict Code of Ethics. We believe in integrity, commitment to
            excellence, a professional attitude, and personalized care.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

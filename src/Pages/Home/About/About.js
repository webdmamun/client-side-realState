import React from "react";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Container className="">
      <h1 className="destination-heading pt-5">About Us</h1> <hr />
        <Row>
          <Col>
            
            <p>
              <strong>
                A Tradition of Excellence, Integrity, Knowledge and Service for
                over 60 years.
              </strong>
              <br />
              <br />
              At Estey Real Estate, you are number one. Whether you are a
              property owner, tenant, or buyer, we value your business and will
              provide you with the individual attention and service you deserve.
              We believe in a strict Code of Ethics. We believe in integrity,
              commitment to excellence, a professional attitude, and
              personalized care.
            </p>
            
          </Col>
          <Col>
            <img
              className="rounded mt-5"
              src="https://pediaa.com/wp-content/uploads/2020/08/Difference-Between-Property-and-Real-Estate_1-1024x660.jpg"
              width="500px"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;

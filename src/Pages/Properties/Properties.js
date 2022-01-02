import React from "react";
import { useEffect, useState } from "react";
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import Property from "./Property/Property";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetch("./services.JSON")
      .then((res) => res.json())
      .then((json) => setProperties(json));
  }, []);
  return (
    <div className="full-cart-area">
      <Container>
        {/* cart area header */}

        <Row className="cart-heading">
          <Col>
            <h2 className="cart-heading-title">
              Find The Right <br />
              Property For You
            </h2>
            <p>
              You don't have to struggle, you've got our assistance and help.
            </p>
          </Col>
          <Col className="search-box">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search the location you want"
                aria-label="Search the location you want"
                aria-describedby="basic-addon2"
              />
              <button className="btn btn-secondary">Search</button>
            </InputGroup>
          </Col>
        </Row>

        {/* Load course data  */}
        <div className="row">
          {properties.map((property) => (
            <Property key={property.id} property={property}></Property>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Properties;

import React from "react";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import HomeProperty from "./HomeProperty/HomeProperty";

const HomeProperties = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetch("https://young-anchorage-08482.herokuapp.com/properties")
      .then((res) => res.json())
      .then((json) => setProperties(json));
  }, []);
  return (
    <Container>
      <div className="row">
        <h1 className="destination-heading">Our Properties</h1>
        <hr />
        {properties.map((property) => (
          <HomeProperty key={property.id} property={property}></HomeProperty>
        ))}
      </div>
    </Container>
  );
};

export default HomeProperties;

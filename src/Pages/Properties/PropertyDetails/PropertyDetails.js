import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

const PropertyDetails = () => {
  const { _id } = useParams();
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    fetch(`https://young-anchorage-08482.herokuapp.com/property/${_id}`)
      .then((res) => res.json())
      .then((json) => setDetail(json));
  }, [_id]);
  return (
    <Container>
      <h2>This is product details id is: {detail._id} </h2>
    </Container>
  );
};

export default PropertyDetails;

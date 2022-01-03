import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

const PropertyDetails = () => {
  const { _id } = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    fetch(`https://young-anchorage-08482.herokuapp.com/property/${_id}`)
      .then((res) => res.json())
      .then((json) => setDetails(json));
  }, [_id]);
  return (
    <>
      <Container>
        <div className="profile-card">
          <div>
            <img className="rounded" src={details.img} alt="" />
            <h3>{details.name}</h3>
            <p>Price: {details.price}</p>
            <p>Location: {details.location}</p>
            <p>Description: {details.des}</p>
            <p>Bed: {details.bed}</p>
            <p>Space: {details.space}</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PropertyDetails;

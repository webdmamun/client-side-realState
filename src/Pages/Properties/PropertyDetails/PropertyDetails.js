import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
        <div className="profile-card my-3">
          <div className="text">
            <img className="rounded" src={details.img} alt="" />
            <h3 style={{ color: "black" }}>{details.name}</h3>
            <p>Price: {details.price}</p>
            <p style={{ color: "black" }}>Location: {details.location}</p>
            <p style={{ color: "black" }}>Description: {details.des}</p>
            <p style={{ color: "black" }}>{details.bed} Beds are avilable.</p>
            <p style={{ color: "black" }}>Space: {details.space}</p>
            <button className="btn btn-primary">
              <Link className="text-decoration-none text-white" to="/booking">
                Book Now
              </Link>
            </button>
          </div>
        </div>
        <hr />
      </Container>
    </>
  );
};

export default PropertyDetails;

import React from "react";
import { Col } from "react-bootstrap";
import "./Agent.css";

const Agent = ({ agent }) => {
  const { img, name, location, phone, mail } = agent;
  return (
    <Col>
      <div className="profile-card">
        <div className="text">
          <img className="rounded" src={img} alt="" />
          <h3>{name}</h3>
          <p>Location: {location}</p>
          <p>Agent Phone: {phone}</p>
          <p>Agent Email: {mail}</p>
        </div>
      </div>
    </Col>
  );
};

export default Agent;

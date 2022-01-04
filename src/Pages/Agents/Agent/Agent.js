import React from "react";
import { Col } from "react-bootstrap";
import "./Agent.css";

const Agent = ({ agent }) => {
  const { img, name, location, phone, mail } = agent;
  return (
    <Col xs={6} md={4}>
      <div className="profile-card">
        <div className="text">
          <img className="rounded" src={img} alt="" />
          <h3 style={{ color: "black" }}>{name}</h3>
          <p>Location: {location}</p>
          <p style={{ color: "black" }}>Agent Phone: {phone}</p>
          <p style={{ color: "black" }}>Agent Email: {mail}</p>
        </div>
      </div>
    </Col>
  );
};

export default Agent;

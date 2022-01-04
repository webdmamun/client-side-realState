import React from "react";
import { Col } from "react-bootstrap";
import "./Agent.css";

const Agent = ({ agent }) => {
  const { img, name, location, phone, mail } = agent;
  return (
    <Col xs={6} md={4} >
      <div className="profile-card">
        <div className="text-center">
          <img className="mb-3 rounded" src={img} alt="" />
          <h3 style={{ color: "black" }}>{name}</h3> <hr />
          <br />
          <ul className="text-start">
            <li>Location: {location} </li>
            <li>Mail: {mail} </li>
            <li>Phone: {phone}</li>
          </ul>
        </div>
      </div>
    </Col>

  );
};

export default Agent;

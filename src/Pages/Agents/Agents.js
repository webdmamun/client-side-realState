import React from "react";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Agent from "./Agent/Agent";

const Agents = () => {
  const [agents, setAgents] = useState([]);
  useEffect(() => {
    fetch("./agent.JSON")
      .then((res) => res.json())
      .then((json) => setAgents(json));
  }, []);
  return (
    <Container>
      <Row className="py-5">
        <Col>
          <h2 className="doctors-area-heading">
            Enjoy Specialized Care Through <br />
            Contact with Our Agents Support.
          </h2>
        </Col>
      </Row>
      <Row className="gy-3 mb-5">
        {agents.map((agent) => (
          <Agent agent={agent} key={agents.id}></Agent>
        ))}
      </Row>
    </Container>
  );
};

export default Agents;
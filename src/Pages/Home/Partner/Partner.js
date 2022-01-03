import React from "react";
import { Container } from "react-bootstrap";
import "./Partner.css";

const Partner = () => {
  return (
    <div>
      <Container className="px-5 py-5 partner-section">
   
        <h1>Trusted by World's Best Companies</h1>
        <div className="d-flex justify-content-center py-3">
          <img
            className="partner-icon"
            src="https://themepure.net/template/educal/educal/assets/img/brand/brand-5.png"
            alt=""
          />
          <img
            className="partner-icon"
            src="https://themepure.net/template/educal/educal/assets/img/brand/brand-6.png"
            alt=""
          />
          <img
            className="partner-icon"
            src="https://themepure.net/template/educal/educal/assets/img/brand/brand-1.png"
            alt=""
          />
          <img
            className="partner-icon"
            src="https://themepure.net/template/educal/educal/assets/img/brand/brand-3.png"
            alt=""
          />
          <img
            className="partner-icon"
            src="https://themepure.net/template/educal/educal/assets/img/brand/brand-4.png"
            alt=""
          />
          <img
            className="partner-icon"
            src="https://themepure.net/template/educal/educal/assets/img/brand/brand-2.png"
            alt=""
          />
        </div>
      </Container>
    </div>
  );
};

export default Partner;

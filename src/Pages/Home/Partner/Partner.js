import React from "react";
import { Container } from "react-bootstrap";
import "./Partner.css";

const Partner = () => {
  return (
    <Container className="px-5 py-5 partner-section">
      <h1>Trusted by World's Best Companies</h1>
      <div className="row g-3 d-flex justify-content-center py-3">
        <div className="col-sm-6 col-md-4 col-lg-2">
          <img
            className="partner-icon"
            src="https://themepure.net/template/educal/educal/assets/img/brand/brand-5.png"
            alt=""
          />
        </div>
        <div className="col-sm-6 col-md-4 col-lg-2">
          <img
            className="partner-icon"
            src="https://themepure.net/template/educal/educal/assets/img/brand/brand-6.png"
            alt=""
          />
        </div>

        <div className="col-sm-6 col-md-4 col-lg-2">
          <img
            className="partner-icon"
            src="https://themepure.net/template/educal/educal/assets/img/brand/brand-1.png"
            alt=""
          />
        </div>
        <div className="col-sm-6 col-md-4 col-lg-2">
          <img
            className="partner-icon"
            src="https://themepure.net/template/educal/educal/assets/img/brand/brand-3.png"
            alt=""
          />
        </div>
        <div className="col-sm-6 col-md-4 col-lg-2">
          <img
            className="partner-icon"
            src="https://themepure.net/template/educal/educal/assets/img/brand/brand-4.png"
            alt=""
          />
        </div>
        <div className="col-sm-6 col-md-4 col-lg-2">
          <img
            className="partner-icon"
            src="https://themepure.net/template/educal/educal/assets/img/brand/brand-2.png"
            alt=""
          />
        </div>
      </div>
    </Container>
  );
};

export default Partner;

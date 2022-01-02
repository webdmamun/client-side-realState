import React from "react";
import { Container } from "react-bootstrap";
import "./Contact.css";
import Email from "./Email";

const Contact = () => {
  return (
    <div className="contact">
      <div className="">
        <img
          className="img-fluid"
          src="https://i.ibb.co/wKhq82d/6.png"
          alt=""
        />
      </div>
      <Container>
        <Email />
      </Container>
    </div>
  );
};

export default Contact;

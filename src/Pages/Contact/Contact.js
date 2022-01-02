import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Email from "./Email"
import "./Contact.css"

const Contact = () => {
  return (
    <div className="contact">
      <div className="">
        <img className="img-fluid" src="https://i.ibb.co/wKhq82d/6.png" alt="" />
      </div>
      <Container>
        
            <Email/>
         
      </Container>
      </div>
  );
};

export default Contact;

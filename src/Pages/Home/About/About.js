import React from "react";
import women from "../../../images/About/women.jpg";

const About = () => {
  return (
    <div className="container">
      <h2 className="text-center py-2 ">About Us </h2>
      <div className="row align-items-center ">
        <div className="col-12 col-lg-8 col-md-8">
          <h3>
            Best Real
            <br />
            Estate Services
          </h3>
          <p>
            With over $2 Billion in sales, Zara is the industry’s top
            luxury producer with over 7 years of experience in marketing Zara’s
            most prestigious properties. Due to her unparalleled results,
            expertise and dedication, Zara ranks amongst the Top 6 agents in
            Boston.
          </p>
          <h6>Zara Seikh</h6>
          <small>Founder & CEO </small>
        </div>
        <div className="col-12 col-lg-4 col-md-4">
          <img src={women} className="img-fluid " alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;

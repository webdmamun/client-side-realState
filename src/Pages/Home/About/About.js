import React from "react";
import musk from "../../../images/About/musk.jpg";

const About = () => {
  return (
    <div className="container">
      <div className="row align-items-center ">
        <div className="col-12 col-lg-6 col-md-6">
          <h3>
            Best Real
            <br />
            Estate Services
          </h3>
          <p>
            With over $2 Billion in sales, Elon Musk is the industry’s top
            luxury producer with over 27 years of experience in marketing Musk’s
            most prestigious properties. Due to her unparalleled results,
            expertise and dedication, Musk ranks amongst the Top 6 agents in
            Boston.
          </p>
          <h6>Elon Musk</h6>
          <small>Founder & CEO </small>
        </div>
        <div className="col-12 col-lg-6 col-md-6">
          <img src={musk} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-div">
      <div className="footer container pt-5">
        <div className="row">
          <div className="col-3">
            <h4>
              <u>About Us</u>
            </h4>
            <p>
              We are committed to providing the most personalized real estate
              services from listing to close. We have exceptional results which
              are confirmed by the number of clients we serve.
            </p>
          </div>
          <div className="col-3">
            <h4>
              <u>Company</u>
            </h4>
            <h6>About</h6>
            <h6>Site Map</h6>
            <h6>Support Center</h6>
            <h6>Terms Conditions</h6>
          </div>

          <div className="col-3">
            <h4>
              <u>Quick links</u>
            </h4>
            <h6>Rental</h6>
            <h6>Sales</h6>
            <h6>Contact</h6>
            <h6>Our Blog</h6>
          </div>

          <div className="col-3">
            <h2>Urban State</h2>
            <h6>
              <i class="fas fa-map-marker-alt footer-icon"></i> 25 Union St,
              Boston, MA 02113
            </h6>
            <h6>
              <i class="fas fa-phone-volume footer-icon"></i> Office (305)
              352-4765
            </h6>
            <h6>
              <i class="fas fa-fax footer-icon"></i> Fax (305) 361-6577
            </h6>
            <h6>
              <i class="fas fa-envelope footer-icon"></i> office@mysite.com
            </h6>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center py-3">
        <a href="/#" target="_blank">
          <i className="fab fa-facebook-square footer-icon"></i>
        </a>
        <a href="/#" target="_blank">
          <i className="fab fa-twitter-square footer-icon"></i>
        </a>
        <a href="/#" target="_blank">
          <i className="fab fa-instagram footer-icon"></i>
        </a>
        <a href="/#" target="_blank">
          <i className="fab fa-linkedin footer-icon"></i>
        </a>
      </div>
      <h6 className="text-center">&copy; Copyright Reserved</h6>
    </div>
  );
};

export default Footer;

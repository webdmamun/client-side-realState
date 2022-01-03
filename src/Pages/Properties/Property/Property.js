/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Property.css";

const Property = ({ property }) => {
  const { img, name, price, location, des, bed, space } = property || {};
  return (
    <>
      {/* single cart  */}

      <div className="col-xs-12 col-sm-4 col-md-4">
        <div className="card">
          <a className="img-card" href="/">
            <img src={img} alt="" />
          </a>
          <div className="card-content">
            <div className="d-flex justify-content-between lesson">
              <div>
                <p>
                  <i class="fas fa-map-marker-alt"></i> {location}
                </p>
              </div>
              <div></div>
            </div>

            <h4 className="card-title">
              <a href="/"> {name}</a>
            </h4>
            <p>{des}</p>
            <div className="d-flex justify-content-between lesson">
              <div>
                <p>
                  <i class="fas fa-home"></i> {space}
                </p>
              </div>
              <div>
                <p>
                  <i class="fas fa-bed"></i> {bed}
                </p>
              </div>
            </div>
            <div className="text-danger pull-left">Price: ${price}</div>
            <div className="clearfix"></div>
          </div>

          <div className="card-read-more">
            <a href="/" className="btn btn-link btn-block">
              Details
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Property;

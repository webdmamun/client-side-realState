/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Property.css";
import { useNavigate } from "react-router-dom";

const Property = ({ property }) => {
  const { img, name, price, location, bed, space } = property || {};
  const naviagate = useNavigate();

  //Handle Details button
  const handleDetailsButton = (_id) => {
    const uri = `/details/${_id}`;
    naviagate(uri);
  };

  return (
    <>
      {/* single cart  */}

      <div className="col-xs-12 col-sm-4 col-md-4">
        <div className="card">
          <img className="img-card" src={img} alt="" />

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
            <button
              onClick={handleDetailsButton}
              className="btn btn-primary btn-block"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Property;

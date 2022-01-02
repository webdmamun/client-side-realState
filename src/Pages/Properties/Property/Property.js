/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Property.css";

const Property = ({ property }) => {
  const { img, name, price, location, des, bed, space } = property || {};
  return (
    <>
      {/* single cart  */}

      <div className="col-xs-12 col-sm-4 col-md-3">
        <div className="card">
          <a className="img-card" href="/">
            <img src={img} alt="" />
          </a>
          <div className="card-content">
            <div className="d-flex justify-content-between lesson">
              <div>
                <p>
                  {" "}
                  <i className="fas fa-book-reader"></i> {price} Lesson
                </p>
              </div>
              <div>
                <p>
                  <i className="fa fa-star star-section"></i> {space} ({bed})
                </p>
              </div>
            </div>
            <h4 className="card-title">
              <a href="/"> {name}</a>
            </h4>
            <h4 className="card-title">
              <a href="/"> {des}</a>
            </h4>
            <div className="text-danger pull-left">${location}</div>
            <div className="clearfix"></div>
          </div>
          <div className="card-read-more">
            <a href="/" className="btn btn-link btn-block">
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Property;

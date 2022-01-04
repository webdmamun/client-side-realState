import React from "react";
import { useState, useEffect } from "react";
import "./Reviews.css";
import { Col, Container, Row } from "react-bootstrap";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://young-anchorage-08482.herokuapp.com/customerReview")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="container">
      <h3 className="mb-4 mt-3">User's Reviews</h3> <hr />
      <Container>
        <Row >
          {reviews.map((review) => (
            <Col sm={12} lg={4} md={6} className="review-card text-center">
              <p>{review.reviewerName}</p>
              <p>Rating: {review.rating} </p>
              <hr />
              <p>{review.comment}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Reviews;

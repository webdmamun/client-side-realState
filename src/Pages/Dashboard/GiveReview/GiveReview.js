import React, { useState } from "react";

const GiveReview = () => {
  const [topicName, setTopicName] = useState();
  const [reviewerName, setReviewerName] = useState();
  const [rating, setRating] = useState();
  const [comment, setComment] = useState();

  const handleTopicName = (e) => {
    setTopicName(e.target.value);
  };

  const handleRating = (e) => {
    setRating(e.target.value);
  };

  const handleComment = (e) => {
    setComment(e.target.value);
  };
  const handleReviewerName = (e) => {
    setReviewerName(e.target.value);
  };
  const handleReview = (e) => {
    const data = { reviewerName, topicName, rating, comment };

    fetch("https://young-anchorage-08482.herokuapp.com/customerReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Review Added");
        }
      });
  };

  return (
    <div>
      <div className="mt-5">
        <input
          type="text"
          onChange={handleReviewerName}
          className="m-3 feedback-input"
          name=""
          placeholder="User Name"
          id=""
        />
        <input
          type="text"
          onChange={handleTopicName}
          className="m-3 feedback-input"
          name=""
          placeholder="Property Name"
          id=""
        />

        <input
          type="number"
          onChange={handleRating}
          className="m-3 mt-3 rating"
          name=""
          placeholder="Rating On 5"
          id=""
        />

        <br />
        <br />

        <textarea
          name=""
          onChange={handleComment}
          className="feedback-input"
          cols="40"
          placeholder="Your Comment"
          rows="10"
        ></textarea>
        <br />
        <button
          onClick={handleReview}
          id="review-submit"
          className="mt-2 btn btn-secondary"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default GiveReview;

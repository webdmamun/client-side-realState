import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Booking = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <Container>
      <h2>Please Fill up the form!</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className="form-control"
          placeholder="Your Full Name"
          {...register("full-name")}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Your Loaction"
          {...register("location")}
        />
        <input
          type="email"
          className="form-control"
          placeholder="Email Address"
          {...register("email")}
        />
        <input
          type="number"
          className="form-control"
          placeholder="Phone Number"
          {...register("phone")}
        />
        <button type="submit" className=" my-3 btn btn-primary">
          Pay
        </button>
      </form>
    </Container>
  );
};

export default Booking;

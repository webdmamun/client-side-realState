import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://young-anchorage-08482.herokuapp.com/myBooking")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [bookings.length]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://young-anchorage-08482.herokuapp.com/myBooking/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = bookings.filter((order) => order._id !== id);
              setBookings(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <h1>My Booked Properties {bookings?.length} </h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Location</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booked) => (
            <tr key={booked._id}>
              <th scope="row">#</th>
              <td>
                <h3>{booked?.fullName}</h3>
              </td>
              <td>{booked?.email}</td>
              <td>{booked?.location}</td>
              <td>{booked?.phone}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(booked?._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBooking;

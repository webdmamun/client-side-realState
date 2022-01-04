import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://young-anchorage-08482.herokuapp.com/allProperties")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [bookings.length]);
  return <div>this is my booking</div>;
};

export default MyBooking;

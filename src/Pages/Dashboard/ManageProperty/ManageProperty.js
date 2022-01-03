import React, { useEffect, useState } from "react";
import Dashboard from "../Dashboard";
import { Container } from "react-bootstrap";

const ManageProperty = () => {
  const [property, setProperty] = useState([]);

  useEffect(() => {
    fetch("https://polar-eyrie-45293.herokuapp.com/allproducts")
      .then((res) => res.json())
      .then((data) => setProperty(data));
  }, []);

  const handleDeleteProduct = (id) => {
    const proceed = window.confirm("You want to delete it?");

    if (proceed) {
      fetch(`https://polar-eyrie-45293.herokuapp.com/product/delete/${id}`, {
        method: "DELETE",
        headers: { "Content-type": "apllication/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingProducts = property.filter(
              (product) => product._id !== id
            );
            setProperty(remainingProducts);
          }
        });
    }
  };
  return (
    <Container>
      <Dashboard></Dashboard>
      <h1>All Products</h1>
      <div className="container mt-4 mb-5">
        <div className="row">
          {property.map((product) => (
            <div key={product._id} className="col-sm-4 mb-5 border-bottom">
              <div className="card border-white">
                <img
                  className="img-fluid rounded-top"
                  src={product.image}
                  style={{ width: "100px", marginLeft: "40%" }}
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <u>{product.name}</u>
                  </h5>
                  <p className="card-text">
                    {product.description.slice(0, 120)}...
                  </p>
                  <button
                    onClick={() => handleDeleteProduct(product._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ManageProperty;

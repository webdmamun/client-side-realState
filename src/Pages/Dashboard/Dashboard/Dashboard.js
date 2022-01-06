import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import "./Dashboard.css";

const Dashboard = () => {
  const { user, logOut, admin } = useFirebase();
  return (
    <div className="text-center">
      <Row>
        <Col className="aside-col" xs={12} lg={3}>
          <div className="aside">
            <ul className="mt-3">
              <li>
                <Link style={{ textDecoration: "none" }} to="/dashboard">
                  <span className="text"> Home </span>{" "}
                </Link>
              </li>
              {admin && (
                <>
                  <hr />
                  <li>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/dashboard/admin"
                    >
                      <span className="text"> Make Admin </span>
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/dashboard/addProperties"
                    >
                      <span className="text"> Add Properties</span>
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/dashboard/addAgent"
                    >
                      <span className="text"> Add Agents</span>
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/dashboard/delete"
                    >
                      <span className="text"> Delete Properties </span>
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/dashboard/deleteAgent"
                    >
                      <span className="text"> Delete Agents </span>
                    </Link>
                  </li>
                </>
              )}
              <hr />
              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/dashboard/mybooking"
                >
                  {" "}
                  <span className="text"> My Booking </span>{" "}
                </Link>
              </li>
              <hr />
              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/dashboard/givereview"
                >
                  {" "}
                  <span className="text"> Give Review </span>{" "}
                </Link>
              </li>
              <hr />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <p>{user.email}</p> Admin
              <hr />
              <button className="btn btn-danger" onClick={logOut}>
                Logout
              </button>
            </ul>
          </div>
        </Col>
        <Col className="window" xs={12} lg={9}>
          <Outlet></Outlet>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;

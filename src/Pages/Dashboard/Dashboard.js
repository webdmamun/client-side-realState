import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import DashBoardNav from "./DashBoardNav/DashBoardNav";

const Dashboard = () => {
  return (
    <Container>
      <DashBoardNav />
      <Outlet></Outlet>
    </Container>
  );
};

export default Dashboard;

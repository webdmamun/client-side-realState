import React from "react";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Neighborhoods from "./FeaturedNeighborhoods/Neighborhoods";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Neighborhoods></Neighborhoods>
    </div>
  );
};

export default Home;

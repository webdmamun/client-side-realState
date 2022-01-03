import React from "react";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Neighborhoods from "./FeaturedNeighborhoods/Neighborhoods";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Neighborhoods></Neighborhoods>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;

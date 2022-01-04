import React from "react";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Neighborhoods from "./FeaturedNeighborhoods/Neighborhoods";
import HomeProperties from "./HomeProperties/HomeProperties";
import Partner from "./Partner/Partner";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Neighborhoods></Neighborhoods>
      <HomeProperties></HomeProperties>
      <Reviews></Reviews>
      <Partner></Partner>
    </div>
  );
};

export default Home;

import React from "react";
import Banner from "../layouts/Banner";
import Information from "../layouts/Information";
import Ads from "../layouts/Ads";
import NewArrivals from "../layouts/NewArrivals";
import Bestsellers from "../layouts/Bestsellers";

const Home = () => {
  return (
    <>
      <Banner />
      <Information />
      <Ads />
      <NewArrivals />
      <Bestsellers />
    </>
  );
};

export default Home;

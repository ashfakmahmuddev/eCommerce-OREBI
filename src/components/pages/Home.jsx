import React from "react";
import Banner from "../layouts/Banner";
import Information from "../layouts/Information";
import Ads from "../layouts/Ads";
import NewArrivals from "../layouts/NewArrivals";
import Bestsellers from "../layouts/Bestsellers";
import PhoneAd from "../layouts/PhoneAd";
import SpecialOffers from "../layouts/SpecialOffers";

const Home = () => {
  return (
    <>
      
      <Banner />
      <Information />
      <Ads />
      <NewArrivals />
      <Bestsellers />
      <PhoneAd/>
      <SpecialOffers/>

    </>
  );
};

export default Home;

import React from "react";
import Container from "../Container";
import Image from "../Image";
import phoneAd from "/src/assets/phoneAd.jpg";
import { Link } from "react-router-dom";

const PhoneAd = () => {
  return (
    <Container>
      <Link to={"/"}>
        <Image src={phoneAd} alt={phoneAd} className={"w-full"} />
      </Link>
    </Container>
  );
};

export default PhoneAd;

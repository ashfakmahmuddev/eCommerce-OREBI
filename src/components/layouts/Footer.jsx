import React from "react";
import Container from "../Container";
import { Link } from "react-router-dom";
import Image from "../Image";
import logo from "/src/assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#F5F5F3] py-15 font-DMSans">
      <Container>
        <div className="flex">
          <div className="mr-35">
            <h3 className="text-[#262626] text-base font-bold uppercase">
              Menu
            </h3>
            <ul className="text-[#6D6D6D] text-sm pt-4">
              <li>
                <Link>Home</Link>
              </li>
              <li className="my-1.5">
                <Link>Shop</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>
              <li className="my-1.5">
                <Link>Contact</Link>
              </li>
              <li>
                <Link>Journal</Link>
              </li>
            </ul>
          </div>
          <div className="mr-35">
            <h3 className="text-[#262626] text-base font-bold uppercase">
              SHOP
            </h3>
            <ul className="text-[#6D6D6D] text-sm pt-4">
              <li>
                <Link>Category 1</Link>
              </li>
              <li className="my-1.5">
                <Link>Category 2</Link>
              </li>
              <li>
                <Link>Category 3</Link>
              </li>
              <li className="my-1.5">
                <Link>Category 4</Link>
              </li>
              <li>
                <Link>Category 5</Link>
              </li>
            </ul>
          </div>
          <div className="mr-35">
            <h3 className="text-[#262626] text-base font-bold uppercase">
              HELP
            </h3>
            <ul className="text-[#6D6D6D] text-sm pt-4">
              <li>
                <Link>Privacy Policy</Link>
              </li>
              <li className="my-1.5">
                <Link>Terms & Conditions</Link>
              </li>
              <li>
                <Link>Special E-shop</Link>
              </li>
              <li className="my-1.5">
                <Link>Shipping</Link>
              </li>
              <li>
                <Link>Secure Payments</Link>
              </li>
            </ul>
          </div>
          <div className="mr-[260px]">
            <h3 className="text-[#262626] text-base font-bold pb-4">
              (052) 611-5711 <br />
              company@domain.com
            </h3>
            <span className="text-[#6D6D6D] text-sm">
              575 Crescent Ave. Quakertown, PA 18951
            </span>
          </div>
          <div className="">
            <Link to={"/"}>
              <Image src={logo} alt={logo} />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

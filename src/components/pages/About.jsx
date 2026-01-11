import React from "react";
import Container from "../Container";
import { MdChevronRight } from "react-icons/md";
import Image from "../Image";
import { Link } from "react-router-dom";
import productOne from "/src/assets/productOne.jpg";
import shopTwo from "/src/assets/shopTwo.jpg";

const About = () => {
  return (
    <div className="pt-30 pb-10 font-DMSans">
      <Container>
        <div className="pb-20">
          <h3 className="text-[#262626] text-5xl font-bold">About</h3>
          <p className="flex items-center gap-x-1 text-[#767676] text-xs pt-3">
            Home <MdChevronRight /> About
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-10 pb-32">
          <div className="relative">
            <Image src={productOne} className={"w-full"} />
            <Link
              to={""}
              className="absolute left-1/2 bottom-15 -translate-x-1/2 text-white bg-[#262626] text-base font-bold py-5 px-17"
            >
              Our Brands
            </Link>
          </div>
          <div className="relative">
            <Image src={shopTwo} className={"w-full"} />
            <Link
              to={""}
              className="absolute left-1/2 bottom-15 -translate-x-1/2 text-white bg-[#262626] text-base font-bold py-5 px-17"
            >
              Our Stores
            </Link>
          </div>
        </div>
        <p className="text-[#262626] text-[40px] leading-[52px]">
          Orebi is one of the world’s leading ecommerce brands and is
          internationally recognized for celebrating the essence of classic
          Worldwide cool looking style.
        </p>
        <div className="grid grid-cols-3 gap-x-10 pt-30">
          <div className="">
            <h3 className="text-[#262626] text-[25px] font-bold pb-3">
              Our Vision
            </h3>
            <p className="text-[#767676] text-base leading-[30px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="">
            <h3 className="text-[#262626] text-[25px] font-bold pb-3">
              Our Story
            </h3>
            <p className="text-[#767676] text-base leading-[30px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic.
            </p>
          </div>
          <div className="">
            <h3 className="text-[#262626] text-[25px] font-bold pb-3">
              Our Brands
            </h3>
            <p className="text-[#767676] text-base leading-[30px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;

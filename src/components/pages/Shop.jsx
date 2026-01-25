import React from "react";
import Container from "../Container";
import { MdChevronRight } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Product from "../Product";
import bestsellerThree from "/src/assets/bestsellerThree.jpg";
import specialThree from "/src/assets/specialThree.jpg";
import specialTwo from "/src/assets/specialTwo.jpg";
import specialOne from "/src/assets/specialOne.jpg";
import shopOne from "/src/assets/shopOne.jpg";
import shopTwo from "/src/assets/shopTwo.jpg";
import bestsellerFour from "/src/assets/bestsellerFour.jpg";
import specialFour from "/src/assets/specialFour.jpg";
import productOne from "/src/assets/productOne.jpg";
import { Link } from "react-router-dom";
import Image from "../Image";

const Shop = () => {
  return (
    <div className="pt-30 pb-10 font-DMSans">
      <Container>
        <div className="pb-20">
          <h3 className="text-[#262626] text-5xl font-bold">Shop</h3>
          <p className="flex items-center gap-x-1 text-[#767676] text-xs pt-3">
            Home <MdChevronRight /> Shop
          </p>
        </div>
        <div className="flex gap-x-10">
          <div className="w-[370px]">
            <div className="pb-13">
              <h3 className="text-[#262626] text-xl font-bold pb-[35px]">
                Shop by Category
              </h3>
              <div className="text-[#767676] flex items-center justify-between border-b border-b-[#F0F0F0] pb-[19px] mb-5">
                <h4 className="text-base">Category 1</h4>
                <FaPlus className="text-xs" />
              </div>
              <div className="text-[#767676] border-b border-b-[#F0F0F0] pb-[19px] mb-5">
                <h4 className="text-base">Category 2</h4>
              </div>
              <div className="text-[#767676] flex items-center justify-between border-b border-b-[#F0F0F0] pb-[19px] mb-5">
                <h4 className="text-base">Category 3</h4>
                <FaPlus className="text-xs" />
              </div>
              <div className="text-[#767676] border-b border-b-[#F0F0F0] pb-[19px] mb-5">
                <h4 className="text-base">Category 4</h4>
              </div>
              <div className="text-[#767676] border-b border-b-[#F0F0F0] pb-[19px]">
                <h4 className="text-base">Category 5</h4>
              </div>
            </div>
            <div className="pb-13">
              <div className="flex items-center justify-between cursor-pointer mb-[35px]">
                <h3 className="text-[#262626] text-xl font-bold">
                  Shop by Color
                </h3>
                <FaCaretUp className="h-5 w-5 text-[#262626] pointer-events-none" />
              </div>
              <div className="text-[#767676] flex items-center gap-x-2.5 border-b border-b-[#F0F0F0] pb-[19px] mb-5">
                <div className="h-2 w-2 bg-black rounded-[50%]"></div>
                <h4 className="text-base">Color 1</h4>
              </div>
              <div className="text-[#767676] flex items-center gap-x-2.5 border-b border-b-[#F0F0F0] pb-[19px] mb-5">
                <div className="h-2 w-2 bg-[#FF8686] rounded-[50%]"></div>
                <h4 className="text-base">Color 2</h4>
              </div>
              <div className="text-[#767676] flex items-center gap-x-2.5 border-b border-b-[#F0F0F0] pb-[19px] mb-5">
                <div className="h-2 w-2 bg-[#7ED321] rounded-[50%]"></div>
                <h4 className="text-base">Color 3</h4>
              </div>
              <div className="text-[#767676] flex items-center gap-x-2.5 border-b border-b-[#F0F0F0] pb-[19px] mb-5">
                <div className="h-2 w-2 bg-[#B6B6B6] rounded-[50%]"></div>
                <h4 className="text-base">Color 4</h4>
              </div>
              <div className="text-[#767676] flex items-center gap-x-2.5 border-b border-b-[#F0F0F0] pb-[19px]">
                <div className="h-2 w-2 bg-[#15CBA5] rounded-[50%]"></div>
                <h4 className="text-base">Color 5</h4>
              </div>
            </div>
            <div className="pb-13">
              <div className="flex items-center justify-between cursor-pointer mb-[35px]">
                <h3 className="text-[#262626] text-xl font-bold">
                  Shop by Brand
                </h3>
                <FaCaretUp className="h-5 w-5 text-[#262626] pointer-events-none" />
              </div>
              <div className="text-[#767676] border-b border-b-[#F0F0F0] pb-[19px] mb-5">
                <h4 className="text-base">Brand 1</h4>
              </div>
              <div className="text-[#767676] border-b border-b-[#F0F0F0] pb-[19px] mb-5">
                <h4 className="text-base">Brand 2</h4>
              </div>
              <div className="text-[#767676] border-b border-b-[#F0F0F0] pb-[19px] mb-5">
                <h4 className="text-base">Brand 3</h4>
              </div>
              <div className="text-[#767676] border-b border-b-[#F0F0F0] pb-[19px] mb-5">
                <h4 className="text-base">Brand 4</h4>
              </div>
              <div className="text-[#767676] border-b border-b-[#F0F0F0] pb-[19px]">
                <h4 className="text-base">Brand 5</h4>
              </div>
            </div>
            <div className="pb-13">
              <h3 className="text-[#262626] text-xl font-bold mb-[35px]">
                Shop by Price
              </h3>
              <div className="text-[#767676] border-b border-b-[#F0F0F0] pb-[19px] mb-5">
                <h4 className="text-base">$0.00 - $9.99</h4>
              </div>
              <div className="text-[#767676] border-b border-b-[#F0F0F0] pb-[19px] mb-5">
                <h4 className="text-base">$10.00 - $19.99</h4>
              </div>
              <div className="text-[#767676] border-b border-b-[#F0F0F0] pb-[19px] mb-5">
                <h4 className="text-base">$20.00 - $29.99</h4>
              </div>
              <div className="text-[#767676] border-b border-b-[#F0F0F0] pb-[19px] mb-5">
                <h4 className="text-base">$30.00 - $39.99</h4>
              </div>
              <div className="text-[#767676] border-b border-b-[#F0F0F0] pb-[19px]">
                <h4 className="text-base">$40.00 - $69.99</h4>
              </div>
            </div>
          </div>
          <div className="w-[1190px]">
            <div className="flex justify-between items-center pb-15">
              <div className="flex gap-x-5">
                <div className="h-9 w-9 bg-[#F0F0F0] border border-[#737373] flex items-center justify-center cursor-pointer">
                  <IoGrid className="text-[#737373] text-xl" />
                </div>
                <div className="h-9 w-9 bg-[#F0F0F0] border border-[#737373] flex items-center justify-center cursor-pointer">
                  <FaList className="text-[#737373] text-xl" />
                </div>
              </div>
              <div className="flex items-center gap-x-10">
                <div className="flex items-center">
                  <label className="text-[#767676] text-base pr-3.5">
                    Sort by:
                  </label>
                  <div className="relative">
                    <select
                      name=""
                      id=""
                      className="text-[#767676] bg-[#F0F0F0] w-60 px-4 py-1.5 border border-[#737373] focus:outline-none appearance-none cursor-pointer"
                    >
                      <option>Featured</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Newest Arrivals</option>
                      <option>Best Selling</option>
                      <option>Customer Rating</option>
                      <option>Name: A to Z</option>
                      <option>Name: Z to A</option>
                    </select>
                    <FaCaretDown className="h-5 w-5 text-[#737373] absolute top-1/2 right-3.75 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
                <div className="flex items-center">
                  <label className="text-[#767676] text-base pr-3.5">
                    Show:
                  </label>
                  <div className="relative">
                    <select
                      name=""
                      id=""
                      className="text-[#767676] bg-[#F0F0F0] w-35 px-4 py-1.5 border border-[#737373] focus:outline-none appearance-none cursor-pointer"
                    >
                      <option>12</option>
                      <option>24</option>
                      <option selected>36</option>
                      <option>48</option>
                      <option>60</option>
                      <option>All</option>
                    </select>
                    <FaCaretDown className="h-5 w-5 text-[#737373] absolute top-1/2 right-3.75 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-10 pb-10">
              <div className="">
                <Product
                  productImg={bestsellerThree}
                  badgeText={"New"}
                  productName={"Household materials"}
                  productPrice={"$40.00"}
                />
              </div>
              <div className="">
                <Product
                  productImg={specialThree}
                  badgeText={"-10%"}
                  productName={"Headphones"}
                  productPrice={"$40.00"}
                />
              </div>
              <div className="">
                <Product
                  productImg={specialTwo}
                  // badgeText={"New"}
                  productName={"Tea Table"}
                  productPrice={"$40.00"}
                />
              </div>
              <div className="">
                <Product
                  productImg={specialOne}
                  // badgeText={"New"}
                  productName={"Cap for Boys"}
                  productPrice={"$40.00"}
                />
              </div>
              <div className="">
                <Product
                  productImg={shopOne}
                  badgeText={"New"}
                  productName={"Wall Clock"}
                  productPrice={"$40.00"}
                />
              </div>
              <div>
                <Product
                  productImg={bestsellerFour}
                  // badgeText={"New"}
                  productName={"Travel Bag"}
                  productPrice={"$60.00"}
                />
              </div>
              <div className="">
                <Product
                  productImg={specialFour}
                  badgeText={"-10%"}
                  productName={"Sun glasses"}
                  productPrice={"$120.00"}
                />
              </div>
              <div className="">
                <Product
                  productImg={specialTwo}
                  badgeText={"-15%"}
                  productName={"Tea Table"}
                  productPrice={"$40.00"}
                />
              </div>
              <div className="">
                <Product
                  productImg={specialOne}
                  badgeText={"-10%"}
                  productName={"Cap for Boys"}
                  productPrice={"$40.00"}
                />
              </div>
              <div className="">
                <Product
                  productImg={shopTwo}
                  // badgeText={"New"}
                  productName={"Basket"}
                  productPrice={"$40.00"}
                />
              </div>
              <div className="">
                <Product
                  productImg={productOne}
                  // badgeText={"New"}
                  productName={"Table watch"}
                  productPrice={"$44.00"}
                />
              </div>
              <div className="">
                <Product
                  productImg={specialFour}
                  // badgeText={"New"}
                  productName={"Sun glasses"}
                  productPrice={"$120.00"}
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-x-[15px]">
                <Link
                  to={""}
                  className="h-9 w-9 flex justify-center items-center border border-[#F0F0F0] text-[#767676] text-sm"
                >
                  <span>1</span>
                </Link>
                <Link
                  to={""}
                  className="h-9 w-9 flex justify-center items-center border border-[#F0F0F0] text-[#767676] text-sm"
                >
                  <span>2</span>
                </Link>
                <Link
                  to={""}
                  className="h-9 w-9 flex justify-center items-center border border-[#F0F0F0] text-[#767676] text-sm"
                >
                  <span>3</span>
                </Link>
                <Link
                  to={""}
                  className="h-9 w-9 flex justify-center items-center border border-[#F0F0F0] text-[#767676] text-sm"
                >
                  <span>4</span>
                </Link>
                <span className="text-[#767676] px-2">_</span>
                <Link
                  to={""}
                  className="h-9 w-9 flex justify-center items-center border border-[#F0F0F0] text-[#767676] text-sm"
                >
                  <span>10</span>
                </Link>
              </div>
              <span className="text-[#767676] text-sm">
                Products from 1 to 12 of 80
              </span>
            </div>
          </div>
        </div>

        {/* <marquee behavior="" direction="">
          <div className="flex gap-x-5">
            <Image src={specialFour} />
            <Image src={specialFour} />
            <Image src={specialFour} />
            <Image src={specialFour} />
          </div>
        </marquee> */}
      </Container>
    </div>
  );
};

export default Shop;

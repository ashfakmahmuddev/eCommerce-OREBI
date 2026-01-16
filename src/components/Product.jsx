import React from "react";
import Badge from "./Badge";
import Image from "./Image";
import { FaHeart } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

const Product = ({ productImg, badgeText, productName, productPrice, className }) => {
  return (
    <div className={`relative font-DMSans group ${className}`}>
      <Image src={productImg} className={"w-full bg-[#F3F3F3]"} />
      {badgeText && (
        <Badge badgeText={badgeText} className={"absolute top-5 left-5"} />
      )}
      <ul className="bg-white px-7.5 py-5.5 absolute left-0 bottom-13 w-full opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-400">
        <li className="py-2">
          <Link className="flex items-center justify-end gap-x-3.75 hover:pr-1.5 hover:font-bold hover:text-[#262626] duration-300">
            <span className="inline-block">Add to Wish List</span>
            <FaHeart />
          </Link>
        </li>
        <li className="py-2">
          <Link className="flex items-center justify-end gap-x-3.75 hover:pr-1.5 hover:font-bold hover:text-[#262626] duration-300">
            <span className="inline-block">Compare</span>
            <LuRefreshCw />
          </Link>
        </li>
        <li className="py-2">
          <Link className="flex items-center justify-end gap-x-3.75 hover:pr-1.5 hover:font-bold hover:text-[#262626] duration-300">
            <span className="inline-block">Add to Cart</span>
            <HiShoppingCart />
          </Link>
        </li>
      </ul>
      <div className="flex items-center justify-between pt-6 px-2">
        <h3 className="text-[#262626] text-xl font-bold capitalize">
          {productName}
        </h3>
        <span className="text-[#767676] text-base">{productPrice}</span>
      </div>
    </div>
  );
};

export default Product;

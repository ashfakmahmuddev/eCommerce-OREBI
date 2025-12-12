import { Link } from "react-router-dom";
import Container from "../Container";
import Image from "../Image";
import logo from "/src/assets/logo.png";
import { IoSearch } from "react-icons/io5";
import menuBar from "/src/assets/menuBar.svg";
import { FaCaretDown } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";

const Header = () => {
  return (
    <>
      <div className="fixed bg-white w-full mx-auto py-8 z-10">
        <Container className={"font-DMSans"}>
          <div className="flex justify-between items-center">
            <div className="">
              <Image src={logo} />
            </div>
            <div className="">
              <ul className="flex items-center gap-x-10 text-[#767676] text-sm font-semibold">
                <li className="hover:text-[#262626] transition duration-300">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="hover:text-[#262626] transition duration-300">
                  <Link to={"/"}>Shop</Link>
                </li>
                <li className="hover:text-[#262626] transition duration-300">
                  <Link to={"/"}>About</Link>
                </li>
                <li className="hover:text-[#262626] transition duration-300">
                  <Link to={"/"}>Contact</Link>
                </li>
              </ul>
            </div>
            <div className="">
              <ul className="flex items-center gap-x-5 text-[#767676] text-sm font-semibold">
                <li className="hover:text-[#262626] transition duration-300">
                  <Link to={"/"}>EN</Link>
                </li>
                <li className="hover:text-[#262626] transition duration-300">
                  <Link to={"/"}>BN</Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className="pt-21">
        <div className="py-6 bg-[#F5F5F3] border border-[#d8d8d8]">
          <Container className={"font-DMSans"}>
            <div className="flex items-center justify-between">
              <div className="relative group">
                <div className="flex gap-x-2">
                  <Image src={menuBar} />
                  <span className="text-[#262626] text-sm">
                    Shop by Category
                  </span>
                </div>
                <ul className="absolute left-0 w-[265px] bg-[#262626] opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-400 ease-out mt-4 z-10">
                  <li className="text-white opacity-70 hover:text-white hover:font-bold hover:ml-2.5 duration-300">
                    <Link className="block py-3.5 px-5">Accesories</Link>
                  </li>
                  <li className="text-white opacity-70 hover:text-white hover:font-bold hover:ml-2.5 duration-300">
                    <Link className="block py-3.5 px-5">Furniture</Link>
                  </li>
                  <li className="text-white opacity-70 hover:text-white hover:font-bold hover:ml-2.5 duration-300">
                    <Link className="block py-3.5 px-5">Electronics</Link>
                  </li>
                  <li className="text-white opacity-70 hover:text-white hover:font-bold hover:ml-2.5 duration-300">
                    <Link className="block py-3.5 px-5">Clothes</Link>
                  </li>
                  <li className="text-white opacity-70 hover:text-white hover:font-bold hover:ml-2.5 duration-300">
                    <Link className="block py-3.5 px-5">Bags</Link>
                  </li>
                  <li className="text-white opacity-70 hover:text-white hover:font-bold hover:ml-2.5 duration-300">
                    <Link className="block py-3.5 px-5">Home appliances</Link>
                  </li>
                </ul>
              </div>
              <div className="relative w-[550px]">
                <input
                  type="text"
                  className="bg-white w-full h-12 outline-none px-5"
                />
                <IoSearch className="absolute top-1/2 -translate-1/2 right-4" />
              </div>
              <div className="flex items-center gap-x-10 text-[#262626]">
                <div className="relative group">
                  <div className="flex items-center gap-x-1.5 cursor-pointer">
                    <FaUser /> <FaCaretDown />
                  </div>
                  <ul className="absolute right-0 w-[200px] bg-white text-[#262626] shadow opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-400 mt-4 z-10">
                    <li className="text-center hover:bg-[#262626] hover:text-white hover:font-bold duration-300">
                      <Link className="py-4 block">My Account</Link>
                    </li>
                    <li className="text-center hover:bg-[#262626] hover:text-white hover:font-bold duration-300">
                      <Link className="py-4 block">Log Out</Link>
                    </li>
                  </ul>
                </div>
                <Link className="text-xl">
                  <HiShoppingCart />
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Header;

import { Link } from "react-router-dom";
import Container from "../Container";
import Image from "../Image";
import logo from "/src/assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { FaCaretDown, FaUser } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import menuBar from "/src/assets/menuBar.svg";
import { useState, useEffect } from "react";

const Header = () => {
  const [show, setShow] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  useEffect(() => {
    const closeDropdowns = (e) => {
      setShow(false);
      setUserOpen(false);
    };

    // শুধু যখন কোনো dropdown ওপেন থাকবে, তখনই listener যোগ হবে
    if (show || userOpen) {
      document.addEventListener("click", closeDropdowns);
    }

    // cleanup
    return () => {
      document.removeEventListener("click", closeDropdowns);
    };
  }, [show, userOpen]);

  return (
    <>
      <div className="fixed bg-white w-full mx-auto border-b border-b-[#d8d8d8] py-8 z-10">
        <Container className={"font-DMSans"}>
          <div className="flex justify-between items-center">
            <div className="">
              <Link to={"/"}>
                <Image src={logo} />
              </Link>
            </div>
            <div className="">
              <ul className="flex items-center gap-x-10 text-[#767676] text-sm font-semibold">
                <li className="hover:text-[#262626] transition duration-300">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="hover:text-[#262626] transition duration-300">
                  <Link to={"shop"}>Shop</Link>
                </li>
                <li className="hover:text-[#262626] transition duration-300">
                  <Link to={"about"}>About</Link>
                </li>
                <li className="hover:text-[#262626] transition duration-300">
                  <Link to={"contacts"}>Contacts</Link>
                </li>
              </ul>
            </div>
            <div className="">
              <ul className="flex items-center gap-x-5 text-[#767676] text-sm font-semibold">
                <li className="hover:text-[#262626] transition duration-300">
                  <Link to={"login"}>Login</Link>
                </li>
                <li className="hover:text-[#262626] transition duration-300">
                  <Link to={"/"}>Sing Up</Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className="pt-21">
        <div className="py-6 bg-[#F5F5F3] border-b border-b-[#d8d8d8]">
          <Container className={"font-DMSans"}>
            <div className="flex items-center justify-between">
              <div className="relative">
                <div
                  className="flex gap-x-2 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShow(!show);
                    setUserOpen(false);
                  }}
                >
                  <Image src={menuBar} />
                  <span className="text-[#262626] text-sm">
                    Shop by Category
                  </span>
                </div>
                {show && (
                  <div className="absolute left-0 top-10 w-[265px] bg-[#262626] z-20">
                    <ul className="">
                      <li className="text-white opacity-70 hover:text-white hover:font-bold hover:ml-2.5 duration-300">
                        <Link to={"/"} className="block py-3.5 px-5">
                          Accesories
                        </Link>
                      </li>
                      <li className="text-white opacity-70 hover:text-white hover:font-bold hover:ml-2.5 duration-300">
                        <Link to={"/"} className="block py-3.5 px-5">
                          Furniture
                        </Link>
                      </li>
                      <li className="text-white opacity-70 hover:text-white hover:font-bold hover:ml-2.5 duration-300">
                        <Link to={"/"} className="block py-3.5 px-5">
                          Electronics
                        </Link>
                      </li>
                      <li className="text-white opacity-70 hover:text-white hover:font-bold hover:ml-2.5 duration-300">
                        <Link to={"/"} className="block py-3.5 px-5">
                          Clothes
                        </Link>
                      </li>
                      <li className="text-white opacity-70 hover:text-white hover:font-bold hover:ml-2.5 duration-300">
                        <Link to={"/"} className="block py-3.5 px-5">
                          Bags
                        </Link>
                      </li>
                      <li className="text-white opacity-70 hover:text-white hover:font-bold hover:ml-2.5 duration-300">
                        <Link to={"/"} className="block py-3.5 px-5">
                          Home appliances
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="relative w-[550px]">
                <input
                  type="text"
                  className="bg-white w-full h-12 outline-none px-5"
                />
                <IoSearch className="absolute top-1/2 -translate-y-1/2 right-4" />
              </div>
              <div className="flex items-center gap-x-10 text-[#262626]">
                <div className="relative">
                  <div
                    className="flex items-center gap-x-1 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setUserOpen(!userOpen);
                      setShow(false);
                    }}
                  >
                    <FaUser />{" "}
                    <FaCaretDown
                      className={`text-lg transition-transform duration-400 
                        ${userOpen ? "rotate-90" : ""}
                      `}
                    />
                  </div>
                  {userOpen && (
                    <ul className="absolute right-0 top-10 w-[200px] bg-white text-[#262626] shadow duration-400 z-10">
                      <li className="text-center hover:bg-[#262626] hover:text-white hover:font-bold duration-300">
                        <Link to={"/"} className="py-4 block">
                          My Account
                        </Link>
                      </li>
                      <li className="text-center hover:bg-[#262626] hover:text-white hover:font-bold duration-300">
                        <Link to={"/"} className="py-4 block">
                          Log Out
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
                <Link to={"/"} className="text-xl">
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

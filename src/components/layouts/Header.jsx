import { Link } from "react-router-dom";
import Container from "../Container";
import Image from "../Image";
import logo from "/src/assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { FaCaretDown, FaUser } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import menuBar from "/src/assets/menuBar.svg";
import { useState, useRef, useEffect } from "react";

const Header = () => {
  const [show, setShow] = useState(false);
  const dropdownRef = useRef(null);
  const [userOpen, setUserOpen] = useState(false);
  const userRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShow(false); // Category close
      }

      if (userRef.current && !userRef.current.contains(e.target)) {
        setUserOpen(false); // User dropdown close
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <>
      <div className="fixed bg-white w-full mx-auto py-8 z-10">
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
              <div className="relative" ref={dropdownRef}>
                <div
                  className="flex gap-x-2 cursor-pointer"
                  onClick={() => setShow(!show)}
                >
                  <Image src={menuBar} />
                  <span className="text-[#262626] text-sm">
                    Shop by Category
                  </span>
                </div>
                {show && (
                  <ul className="absolute left-0 top-10 w-[265px] bg-[#262626] z-10">
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
                )}
              </div>
              <div className="relative w-[550px]">
                <input
                  type="text"
                  className="bg-white w-full h-12 outline-none px-5"
                />
                <IoSearch className="absolute top-1/2 -translate-1/2 right-4" />
              </div>
              <div className="flex items-center gap-x-10 text-[#262626]">
                <div className="relative" ref={userRef}>
                  <div
                    className="flex items-center gap-x-1.5 cursor-pointer"
                    onClick={() => setUserOpen(!userOpen)}
                  >
                    <FaUser /> <FaCaretDown />
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

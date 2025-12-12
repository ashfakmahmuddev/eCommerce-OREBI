import { Link } from "react-router-dom";
import Container from "../Container";
import Image from "../Image";
import logo from "/src/assets/logo.png";
import Search from "./Search";
const Header = () => {
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
      <Search/>
    </>
  );
};

export default Header;

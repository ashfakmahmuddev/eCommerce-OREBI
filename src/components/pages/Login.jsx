import React from "react";
import Container from "../Container";
import { MdChevronRight } from "react-icons/md";

const Login = () => {
  return (
    <div className="pt-30 pb-10 font-DMSans">
      <Container>
        <div className="pb-20">
          <h3 className="text-[#262626] text-5xl font-bold">Login</h3>
          <p className="flex items-center gap-x-1 text-[#767676] text-xs pt-3">
            Home <MdChevronRight /> Login
          </p>
        </div>
        <div className="">
          <div className="text-[#767676] text-base border-b border-b-[#f0f0f0]">
            <p className="w-[610px] pb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the.
            </p>
          </div>
          <div className="py-15">
            <h3 className="text-[#262626] text-[40px] font-bold pb-10">
              Returning Customer
            </h3>
            <div className="flex gap-x-10">
              <div className="w-[510px]">
                <h4 className="text-[#262626] text-base font-bold capitalize pb-2.5">
                  Email address
                </h4>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full border-b border-b-[#F0F0F0] pb-4 mb-6 focus:outline-none"
                />
              </div>
              <div className="w-[510px]">
                <h4 className="text-[#262626] text-base font-bold capitalize pb-2.5">
                  Password
                </h4>
                <input
                  type="text"
                  placeholder="Enter your password"
                  className="w-full border-b border-b-[#F0F0F0] pb-4 mb-6 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;

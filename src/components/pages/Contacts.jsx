import React from "react";
import Container from "../Container";
import { MdChevronRight } from "react-icons/md";
import Image from "../Image";

const Contacts = () => {
  return (
    <div className="pt-30 pb-10 font-DMSans">
      <Container>
        <div className="pb-20">
          <h3 className="text-[#262626] text-5xl font-bold">Contacts</h3>
          <p className="flex items-center gap-x-1 text-[#767676] text-xs pt-3">
            Home <MdChevronRight /> Contacts
          </p>
        </div>
        <div className="w-[700px]">
          <h3 className="text-[#262626] text-[40px] font-bold pb-10.5">
            Fill up a Form
          </h3>
          <form className="pb-7.5">
            <h4 className="text-[#262626] text-base font-bold pb-2.5">Name</h4>
            <input
              type="text"
              placeholder="Your name here"
              className="w-full border-b border-b-[#F0F0F0] pb-4 mb-6 placeholder:capitalize focus:outline-none"
            />
            <h4 className="text-[#262626] text-base font-bold pb-2.5">Email</h4>
            <input
              type="text"
              placeholder="Your Email here"
              className="w-full border-b border-b-[#F0F0F0] pb-4 mb-6 placeholder:capitalize focus:outline-none"
            />
            <h4 className="text-[#262626] text-base font-bold pb-2.5">
              Message
            </h4>
            <input
              type="text"
              placeholder="Your message here"
              className="w-full border-b border-b-[#F0F0F0] pb-20 placeholder:capitalize focus:outline-none"
            />
          </form>
          <button type="submit" className="text-white text-sm font-bold capitalize bg-[#262626] py-4 px-21 cursor-pointer">
            post
          </button>
        </div>
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58415.736414468476!2d90.336589948001!3d23.783600967566663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1767790052652!5m2!1sen!2sbd"
            className="h-[572px] w-full mt-[140px]"
          ></iframe>
        </div>
      </Container>
    </div>
  );
};

export default Contacts;

import React from "react";
import Link from "next/link";
import { BiLogoFacebook } from "react-icons/im";

const Footer = () => {
  return (
    <footer className=" px-5 bg-[#101011] text-white pt-14 ">
      <div className=" flex flex-col gap-6 md:grid md:max-lg:grid-cols-2 grid-cols-4 md:px-20">
        <div className="flex flex-col md:mr-6">
          <Link
            href={"/"}
            className="flex title-font font-medium items-center text-white mb-4 md:mb-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-[#4595d0] rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl font-bold">Career Uganda</span>
          </Link>
          <p className="text-[#7E869A] text-[14px] leading-relaxed">
            Empowering Your Journey: Unlock Your Career Potential and Discover
            the Perfect Job You Truly Deserve!
          </p>
        </div>
        <div className="text-[#7E869A] text-[14px]">
          <p className="text-[#fff] text-xl mb-3">Socials</p>
          <div>
            <p className=" mb-3 hover:text-[#4595d0] cursor-pointer">
              Facebook
            </p>
          </div>
          <div>
            <p className=" mb-3 hover:text-[#4595d0] cursor-pointer">Twitter</p>
          </div>
          <div>
            <p className=" mb-3 hover:text-[#4595d0] cursor-pointer">
              Instagram
            </p>
          </div>
          <div>
            <p className=" mb-3 hover:text-[#4595d0] cursor-pointer">
              WhatsApp
            </p>
          </div>
        </div>
        <div className="text-[14px] text-[#7E869A]">
          <p className="text-[#fff] text-xl mb-3">Quick Links</p>
          <Link href={"/jobs"}>
            <p className=" mb-3 hover:text-[#4595d0] cursor-pointer">
              Job Listing
            </p>
          </Link>

          <Link href={"/contact"}>
            <p className="mb-3 hover:text-[#4595d0] cursor-pointer">
              Post a Job
            </p>
          </Link>
          <Link href={"/about"}>
            <p className="mb-3 hover:text-[#4595d0] cursor-pointer">About Us</p>
          </Link>
          <Link href={"/contact"}>
            <p className="mb-3 hover:text-[#4595d0] cursor-pointer">
              Contact Us
            </p>
          </Link>
          <Link href={"/blog"}>
            <p className="hover:text-[#4595d0] cursor-pointer">blog</p>
          </Link>
        </div>
        <div>
          <p className="text-xl mb-3">Newsletter</p>
          <p className="text-[#7E869A] text-[14px] mb-4 leading-relaxed">
            Subscribe to Career Uganda newsletter to get all latest job updates
          </p>
          <input
            type="text"
            className="text-[14px] inline h-10 w-[65%] mr-2 pl-2 md:w-[100%] bg-gray-100 border border-gray-300 focus:border-[#4595d0] focus:bg-white focus:ring-2 focus:ring-[#4595d0] outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Email..."
          />
          <button className="bg-[#4595d0] text-[14px] py-2 px-3 md:mt-5">
            Subscribe
          </button>
        </div>
      </div>

      <div className="mt-14 text-[14px] py-7 text-center border-t-[1px] text-[#7E869A]">
        <p>
          2024 Career Uganda,{" "}
          <a href="https://twitter.com/LolentiMuhammad">A1-Creatives Uganda</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

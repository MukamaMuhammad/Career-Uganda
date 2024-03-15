import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <section className="container mx-auto bg-gray-50 md:px-20 text-gray-600 body-font">
      <div className=" py-10 flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden flex justify-center items-center">
          <Image
            src={"/images/about.jpg"}
            width={500}
            height={550}
            alt="feature"
          />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-col mb-10 lg:items-start items-center bg-[#f4f7f7] p-4">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-[#4595d0] mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Introduction
              </h2>
              <p className="leading-relaxed text-base">
                Welcome to Career Uganda, where we connect talented individuals
                with exciting career opportunities. Our mission is to bridge the
                gap between employers and job seekers, making the job search
                process efficient, effective, and enjoyable.
              </p>
              <a className="mt-3 text-[#4595d0] inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center bg-[#f4f7f7] p-4">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-[#4595d0] mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Our Story
              </h2>
              <p className="leading-relaxed text-base">
                Founded in 2023 by Lolenti Muhammad, Career Uganda was born out
                of a simple yet powerful idea: to make the job search process
                more accessible and rewarding for both job seekers and
                employers. The founder had experienced firsthand the
                frustrations and challenges of job hunting and saw an
                opportunity to create something better.
              </p>
              <a className="mt-3 text-[#4595d0] inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center bg-[#f4f7f7] p-4">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-[#4595d0] mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Our Mission
              </h2>
              <p className="leading-relaxed text-base">
                At Career Uganda, our primary goal is to empower job seekers by
                providing them with access to a vast range of job listings and
                resources. We're dedicated to helping individuals at every stage
                of their careers find opportunities that match their skills and
                aspirations. Likewise, we assist employers in finding the
                perfect candidates to drive their businesses forward.
              </p>
              <a className="mt-3 text-[#4595d0] inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;

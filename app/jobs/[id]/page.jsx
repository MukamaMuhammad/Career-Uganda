import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import moment from "moment";
import parse from "html-react-parser";
import { marked } from "marked";
import { Button } from "@components/ui/button";

async function getData(id) {
  const res = await fetch(`${process.env.BASE_URL}/api/jobposts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.jobTitle,
    description: post.jobDescription,
  };
}

const page = async ({ params }) => {
  const data = await getData(params.id);
  const desc = data.description;

  // Regular expression to check if it's a URL
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

  // Regular expression to check if it's an email address
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Function to determine if it's a URL or email
  const isURL = urlRegex.test(data.applicationLink);
  const isEmail = emailRegex.test(data.applicationLink);

  return (
    <section className="container mx-auto bg-gray-100 md:px-7 px-2 py-10 ">
      <div className="grid grid-cols-1 gap-5 md:gap-10 lg:mx-60 md:max-lg:40 bg-white md:p-10 p-4">
        <div className="md:col-span-2">
          <div className="bg-white flex flex-col justify-between rounded gap-4">
            <div className="flex gap-5 items-center">
              {/* <Image
                src={"/images/logo.webp"}
                width={90}
                height={90}
                className="rounded"
              /> */}
              <div className="flex flex-col justify-center gap-1">
                <p className="font-medium ">{data.jobTitle}</p>
                <p className="text-[#4595d0] max-md:text-[14px]">
                  {data.companyName}
                </p>
                <p className="text-gray-500 text-sm">{data.location}</p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-1">
              <p className="text-gray-500 text-[13px]">
                <span className="text-black font-medium">Job Type:</span>{" "}
                {data.jobType.toLowerCase()}
              </p>
              <p className="text-gray-500 text-[13px]">
                <span className="text-black font-medium">Posted:</span>{" "}
                {moment(data.postedDate).format("MMMM D, YYYY")}
              </p>
              <p className="text-gray-500 text-[13px]">
                <span className="text-black font-medium">Deadline:</span>{" "}
                {moment(data.deadline).format("MMMM D, YYYY")}
              </p>
              <p className="text-gray-500 text-[13px]">
                <span className="text-black font-medium">Category:</span>{" "}
                {data.jobCategory}
              </p>

              {/* <button className="bg-[#4595d0] text-white text-[14px] px-3 py-2 rounded transition">
                Apply Now
              </button> */}
            </div>
          </div>

          <div className="my-5">
            <p className="text-[16px] font-medium mb-2">Job Description</p>
            <p className="text-gray-500 mb-2 text-[14px] leading-relaxed">
              {parse(data.jobDescription)}
            </p>
            <p className="text-[14px] mb-4">
              {/* <a rel="nofollow" href={data.applicationLink}>
                <Button className="bg-[#4595d0] hover:bg-[#4595d0] hover:bg-opacity-90 text-white text-sm rounded transition">
                  Apply Here
                </Button>
              </a>
              <a
                rel="nofollow"
                href={data.applicationLink}
                className="underline decoration-1 text-blue-400 block mt-2"
              >
                {data.applicationLink}
              </a> */}
              {isURL ? (
                <a rel="nofollow" href={data.applicationLink}>
                  <Button className="bg-[#4595d0] hover:bg-[#4595d0] hover:bg-opacity-90 text-white text-sm rounded transition">
                    Apply Here
                  </Button>
                </a>
              ) : (
                <div>
                  <p>Send Application to:</p>
                  <a
                    rel="nofollow"
                    href={"mailto:" + data.applicationLink}
                    className="underline decoration-1 text-blue-400 block"
                  >
                    {data.applicationLink.replace(/^mailto:/i, "")}
                  </a>
                </div>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;

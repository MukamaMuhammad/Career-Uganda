import React from "react";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import moment from "moment";
import { FaClock } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Jobcard = (props) => {
  const truncateBody = (text, limit) => {
    const words = text
      ?.replace(/<br\s*\/?>/gi, " ")
      .replace(/\r?\n|\r/g, " ")
      .replace(/<[^>]*>/g, "")
      .split(" ");
    if (words?.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  };

  return (
    // <div key={props.id} className="flex w-full">
    //   <Link href={`/${props._id}`} className="w-full h-full">
    //     <div className=" bg-white rounded-md border border-gray-200 p-6 flex flex-col justify-around gap-4 w-full h-full">
    //       <div className="flex gap-4 items-center">
    //         <Image
    //           alt="logo"
    //           src={"/images/logo.webp"}
    //           width={60}
    //           height={60}
    //           className="rounded"
    //         />
    //         <div>
    //           <p className="text-black text-[16px] font-semibold">
    //             {props.companyName}
    //           </p>
    //           <p className="text-[#7E869A] text-[12px]">
    //             {props.jobType.toLowerCase()}
    //           </p>
    //         </div>
    //       </div>
    //       <div className="flex flex-col gap-2">
    //         <p className="text-[#4595d0] text-[14px] font-semibold">
    //           {props.jobTitle}
    //         </p>
    //         <p className="text-[#7E869A] text-[13px] flex gap-2 items-center">
    //           <MdLocationPin /> Location: {props.location}
    //         </p>
    //         <p className="text-[#7E869A] text-[13px] flex gap-2 items-center">
    //           <FaClock /> Deadline:{" "}
    //           {moment(props.deadline).format("MMMM D, YYYY")}
    //         </p>
    //         {/* <p className="text-[#7E869A] font-semibold text-[14px]">
    //           {parse(truncateBody(props.jobDescription, 10))}
    //         </p> */}
    //       </div>
    //       <div className="flex justify-between items-center">
    //         <p className="text-[#7E869A] text-[12px]">
    //           Posted: {moment(props.postedDate).format("MMMM D, YYYY")}
    //         </p>
    //         <button className="bg-[#4595d0] text-[13px] text-white px-2 py-2 rounded">
    //           Apply Now
    //         </button>
    //       </div>
    //     </div>
    //   </Link>
    // </div>
    <Link href={`/jobs/${props._id}`} className="w-[100%]">
      <Card className="md:w-[800px] w-[100%] max-md:min-w-[320px] flex flex-col   ">
        <CardHeader>
          <CardTitle className="text-xl mb-3 hover:underline hover:text-[#4595d0] trnsition-all">
            {props.jobTitle}
          </CardTitle>
          <CardDescription>
            <div className="flex max-md:flex-col gap-2 items-start text-sm text-muted-foreground">
              <div className="flex gap-1 items-center">
                <FaClock />
                Deadline: {moment(props.deadline).format("MMMM D, YYYY")}
              </div>
              <div className="flex gap-1 items-center">
                <MdLocationPin />
                <p>Location: {props.location}</p>
              </div>
              <div className="flex gap-1 items-center">
                <IoTimeOutline />
                <p>Posted: {moment(props.postedDate).format("MMMM D, YYYY")}</p>
              </div>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent className="font-normal">
          {parse(truncateBody(props.jobDescription.toLowerCase(), 20))}
        </CardContent>
        {/* <CardFooter className="flex justify-between">
          <Button variant="outline" className="w-full">
            Apply
          </Button>
        </CardFooter> */}
      </Card>
    </Link>
  );
};

export default Jobcard;

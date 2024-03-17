import React from "react";
import Image from "next/image";
import Jobcard from "./Jobcard";
import connectToDB from "@utils/db";
import Jobpost from "@models/Jobpost";
import { getJobs } from "@utils/jobs";
import Link from "next/link";
import clsx from "clsx";
import PaginationComponent from "@components/home/PaginationComponent";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  MdOutlineArrowBack,
  MdOutlineArrowForward,
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

export default async function Feed(props: any) {
  const page = props.page;
  const limit = props.limit;
  const search = props.search;
  const date = props.date;
  const category = props.category;

  const { jobs, totalPosts } = await getJobs({
    page,
    limit,
    date,
    category,
    query: search,
  });
  console.log("second page value");
  console.log(page);
  const totalPages = Math.ceil(totalPosts / limit);

  return (
    <section className="h-auto bg-gray-100 pt-5 pb-10 text-center flex flex-col items-center">
      <div className="mx-3 md:mx-[10%] text-start grid gap-7 md:grid-cols-1 sm:grid-cols-1 items-center justify-center">
        {jobs?.map((job) => (
          <div key={job._id} className="flex">
            <Jobcard id={job._id} {...job} />
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center pt-5">
        <PaginationComponent page={page} totalPages={totalPages} />

        {/* <div className="text-[#7E869A] flex w-[100px] items-center justify-center text-sm font-medium">
          Page {page} of {totalPages}
        </div>
        <div className="inline-flex mt-2 xs:mt-0 gap-1">

          <Link
            href={{
              pathname: "/",
              query: {
                ...(search ? { search } : {}),
                ...(date ? { date } : {}),
                page: 1,
              },
            }}
            className={clsx(
              "flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-[#4595d0] rounded-s dark:bg-[#4595d0]   dark:hover:text-white",
              page <= 1 && "pointer-events-none opacity-50"
            )}
          >
            <MdOutlineKeyboardDoubleArrowLeft className="h-6 w-6 text-white" />
          </Link>

          <Link
            href={{
              pathname: "/",
              query: {
                ...(search ? { search } : {}),
                ...(date ? { date } : {}),
                page: page > 1 ? page - 1 : 1,
              },
            }}
            className={clsx(
              "flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-[#4595d0] rounded-s  dark:bg-[#4595d0]    dark:hover:text-white",
              page <= 1 && "pointer-events-none opacity-50"
            )}
          >
            <MdOutlineArrowBack />
            Prev
          </Link>

          <Link
            href={{
              pathname: "/",
              query: {
                ...(search ? { search } : {}),
                ...(date ? { date } : {}),
                page: page + 1,
              },
            }}
            className={clsx(
              "flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-[#4595d0] border-0 border-s  rounded-e  dark:bg-[#4595d0]dark:hover:text-white",
              page === totalPages && "pointer-events-none opacity-50"
            )}
          >
            Next
            <MdOutlineArrowForward />
          </Link>

          <Link
            href={{
              pathname: "/",
              query: {
                ...(search ? { search } : {}),
                ...(date ? { date } : {}),
                page: totalPages,
              },
            }}
            className={clsx(
              "flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-[#4595d0] border-0 border-s  rounded-e  dark:bg-[#4595d0]    dark:hover:text-white",
              page === totalPages && "pointer-events-none opacity-50"
            )}
          >
            <MdOutlineKeyboardDoubleArrowRight className="h-6 w-6 text-white" />
          </Link>
        </div>  */}
      </div>
    </section>
  );
}

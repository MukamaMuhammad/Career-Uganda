"use client";
import React, { useState } from "react";
import Image from "next/image";
import useSWR, { mutate } from "swr";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const page = () => {
  const session = useSession();
  const router = useRouter();
  const [jobsExist, setJobsExist] = useState(false);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `http://localhost:3000/api/jobposts?username=${session?.data?.user.name}`,
    fetcher
  );

  // console.log(data);
  // const deleteJobWithId = deleteJob.bind(null, postId)

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/signin");
  }

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/jobposts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (id) => {
    router.push(`/dashboard/editjob?id=${id}`);
  };

  if (session) {
    return (
      <section className="container mx-auto h-[auto] bg-gray-50  py-[3rem] px-[1rem] md:px-[7rem] z-0">
        <div className=" bg-white py-10">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-xl mb-5">
            MY JOB LISTINGS
          </h1>
          {jobsExist ? (
            <div className="bg-red-500 text-center mt-8 text-white text-sm rounded-md py-3">
              There's no job posted data found.
            </div>
          ) : (
            <div className="overflow-x-auto mt-8">
              <table className="w-full">
                <thead>
                  <tr className="text-sm bg-[#4595d0] text-white">
                    <th className="p-3">No</th>
                    <th className="p-3">Position</th>
                    <th className="max-md:hidden">Location</th>
                    <th className="max-md:hidden">Employment Type</th>
                    <th className="max-md:hidden">Posted Date</th>
                    <th className="">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item) => (
                    <tr
                      key={item._id}
                      className="text-center bg-[#F9F9FF] text-sm"
                    >
                      <td className="p-3">{1}</td>
                      <td>{item.jobTitle}</td>
                      <td className="max-md:hidden">{item.location}</td>
                      <td className="max-md:hidden">{item.jobType}</td>
                      <td className="max-md:hidden">{`${new Date(
                        item.postedDate
                      ).toLocaleDateString()}`}</td>
                      <td className="p-3">
                        <button className="mr-3 bg-blue-500 hover:bg-blue-600 transition-[background] text-white text-xs px-3 py-1 rounded-md max-md:hidden">
                          Detail
                        </button>
                        <button
                          onClick={() => handleEdit(item._id)}
                          className="mr-3 bg-orange-500 hover:bg-orange-600 transition-[background] text-white text-xs px-3 py-1 rounded-md"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="mr-3 bg-red-500 hover:bg-red-600 transition-[background] text-white text-xs px-3 py-1 rounded-md"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    );
  }
};

export default page;

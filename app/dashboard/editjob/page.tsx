// "use client";
// import React from "react";
// import { useSession } from "next-auth/react";
// import { useRouter, useSearchParams } from "next/navigation";
// import EdittingEditor from "@components/dashboard/EdittingEditor";
// import { useState, useEffect } from "react";

// const page = () => {
//   const session = useSession();
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const jobId = searchParams.get("id");

//   const [jobDescription, setJobDescription] = useState("");
//   const handleJobDescriptionChange = (content: any) => {
//     setJobDescription(content);
//   };

//   const [jobDetails, setJobDetails] = useState({
//     jobTitle: "",
//     location: "",
//     companyName: "",
//     jobType: "",
//     jobDescription: "",
//     applicationLink: "",
//     image: "",
//   });

//   useEffect(() => {
//     const getJobsDetails = async () => {
//       const response = await fetch(`/api/jobposts/${jobId}`);
//       const data = await response.json();

//       setJobDetails({
//         jobTitle: data.jobTitle,
//         location: data.location,
//         companyName: data.companyName,
//         jobType: data.jobType,
//         jobDescription: data.jobDescription,
//         applicationLink: data.applicationLink,
//         image: data.image,
//       });
//     };

//     if (jobId) getJobsDetails();
//   }, [jobId]);

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     console.log(jobDetails);
//     if (!jobId) return alert("Job ID not found");

//     try {
//       const response = await fetch(`api/jobposts/${jobId}`, {
//         method: "PATCH",
//         body: JSON.stringify({
//           jobTitle: jobDetails.jobTitle,
//           location: jobDetails.location,
//           companyName: jobDetails.companyName,
//           jobType: jobDetails.jobType,
//           jobDescription: jobDescription,
//           applicationLink: jobDetails.applicationLink,
//           image: jobDetails.image,
//         }),
//       });

//       if (response.ok) {
//         router.push("/dashboard/managejobs");
//       }
//     } catch (error) {
//       console.error("An error occurred:", error);
//     }
//   };

//   if (session?.status === "loading") {
//     return <p>Loading...</p>;
//   }

//   if (session?.status === "unauthenticated") {
//     router?.push("/dashboard/signin");
//   }

//   if (session?.status === "authenticated") {
//     return (
//       <section className="container mx-auto h-[auto] bg-gray-50 py-[2rem] px-[1rem] md:px-[7rem] z-0">
//         <div className=" md:px-20 bg-white p-3 py-10">
//           <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-[#4595d0] md:text-2xl mb-2">
//             Edit Job!
//           </h1>

//           <div className="p-7">
//             <form onSubmit={handleSubmit}>
//               <div className="mb-6">
//                 <label htmlFor="jobTitle" className="text-sm">
//                   Job Title
//                 </label>
//                 <input
//                   type="text"
//                   value={jobDetails.jobTitle}
//                   onChange={(e) =>
//                     setJobDetails({ ...jobDetails, jobTitle: e.target.value })
//                   }
//                   id="jobTitle"
//                   name="jobTitle"
//                   className="outline-0 border border-gray-300 mt-3 text-sm rounded-md w-full px-2 h-10"
//                 />
//               </div>

//               <div className="mb-6">
//                 <label htmlFor="companyName" className="text-sm">
//                   Company Name
//                 </label>
//                 <input
//                   type="text"
//                   value={jobDetails.companyName}
//                   onChange={(e) =>
//                     setJobDetails({
//                       ...jobDetails,
//                       companyName: e.target.value,
//                     })
//                   }
//                   id="companyName"
//                   name="companyName"
//                   className="outline-0 border border-gray-300 mt-3 text-sm rounded-md w-full px-2 h-10"
//                 />
//               </div>

//               <div className="mb-6">
//                 <label htmlFor="location" className="text-sm">
//                   Location
//                 </label>
//                 <input
//                   type="text"
//                   value={jobDetails.location}
//                   onChange={(e) =>
//                     setJobDetails({ ...jobDetails, location: e.target.value })
//                   }
//                   id="location"
//                   name="location"
//                   className="outline-0 border border-gray-300 mt-3 text-sm rounded-md w-full px-2 h-10"
//                 />
//               </div>

//               <div className="mb-6">
//                 <label htmlFor="applicationLink" className="text-sm">
//                   Application Link
//                 </label>
//                 <input
//                   type="text"
//                   value={jobDetails.applicationLink}
//                   onChange={(e) =>
//                     setJobDetails({
//                       ...jobDetails,
//                       applicationLink: e.target.value,
//                     })
//                   }
//                   id="applicationLink"
//                   name="applicationLink"
//                   className="outline-0 border border-gray-300 mt-3 text-sm rounded-md w-full px-2 h-10"
//                 />
//               </div>

//               <div className="mb-6">
//                 <label htmlFor="image" className="text-sm">
//                   Image Link
//                 </label>
//                 <input
//                   type="text"
//                   value={jobDetails.image}
//                   onChange={(e) =>
//                     setJobDetails({ ...jobDetails, image: e.target.value })
//                   }
//                   id="image"
//                   name="image"
//                   className="outline-0 border border-gray-300 mt-3 text-sm rounded-md w-full px-2 h-10"
//                 />
//               </div>

//               <div className="mb-6">
//                 <label htmlFor="jobType" className="text-sm">
//                   Job Type
//                 </label>
//                 <select
//                   name="jobType"
//                   value={jobDetails.jobType}
//                   onChange={(e) =>
//                     setJobDetails({ ...jobDetails, jobType: e.target.value })
//                   }
//                   id="jobType"
//                   className="outline-0 border border-gray-300 mt-3 text-sm rounded-md w-full px-2 h-10 bg-white"
//                 >
//                   <option value="">- Employment Type -</option>
//                   <option value="Full-time">Full Time</option>
//                   <option value="Part-time">Part TIme</option>
//                   <option value="Freelance">Freelance</option>
//                   <option value="Remote">Remote</option>
//                 </select>
//               </div>

//               <div className="mb-6">
//                 <label htmlFor="jobDescription" className="text-sm">
//                   Job Description
//                 </label>
//                 {/* <textarea
//                   name="jobDescription"
//                   id="jobDescription"
//                   onChange={(e) =>
//                     setJobDetails({
//                       ...jobDetails,
//                       jobDescription: e.target.value,
//                     })
//                   }
//                   className="hidden outline-0 border border-gray-300 mt-3 text-sm rounded-md w-full px-2 h-10"
//                 /> */}
//                 <EdittingEditor
//                   initialContent={jobDetails.jobDescription}
//                   onContentChange={handleJobDescriptionChange}
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="bg-[#4595d0] cursor-pointer transition-[background] text-sm text-white w-full rounded-md py-3"
//               >
//                 Save Changes
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     );
//   }
// };

// export default page;

import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;

// import React from "react";
// import Link from "next/link";
// import User from "@models/User";
// import connectToDB from "@utils/db";
// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
// import { redirect } from "next/navigation";
// import GoogleButton from "@components/Google";

// const page = async () => {
//   async function create(formData) {
//     "use server";
//     await connectToDB();

//     const name = formData.get("name");
//     const email = formData.get("email");
//     const password = formData.get("password");

//     const hashedPassword = await bcrypt.hash(password, 5);
//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     try {
//       await newUser.save();
//       redirect("/dashboard/signin");
//       return new NextResponse("User has been created", {
//         status: 201,
//       });
//     } catch (error) {
//       return new NextResponse("Something went wrong", {
//         status: 500,
//       });
//     }
//   }

//   return (
//     <section className="container mx-auto h-auto bg-gray-50 py-10 md:py-0 z-0">
//       <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//         <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
//           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//             <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
//               Create an account
//             </h1>
//             <form className="space-y-4 md:space-y-6" action={create}>
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block mb-2 text-sm font-medium text-gray-900 "
//                 >
//                   Username
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
//                   placeholder="John"
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block mb-2 text-sm font-medium text-gray-900 "
//                 >
//                   Your email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
//                   placeholder="name@company.com"
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="password"
//                   className="block mb-2 text-sm font-medium text-gray-900 "
//                 >
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   placeholder="••••••••"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
//                   required
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full text-white bg-[#4595d0] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition"
//               >
//                 Create an account
//               </button>
//             </form>
//             <p className="text-sm font-light text-gray-500 ">
//               Already have an account?{" "}
//               <Link
//                 href={"/dashboard/signin"}
//                 className="font-medium text-[#4595d0] hover:underline "
//               >
//                 Login here
//               </Link>
//             </p>
//             <p className="text-sm font-light text-gray-500 ">
//               Sign up with Google? <GoogleButton />
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default page;

import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;

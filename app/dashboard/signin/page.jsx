"use client";
import React from "react";
import Link from "next/link";
import GoogleButton from "@components/Google";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const page = () => {
  async function myAction(formDetails) {
    const email = formDetails.get("email");
    const password = formDetails.get("password");

    signIn("credentials", { email, password });
  }

  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard/managejobs");
  }

  return (
    <section className="container mx-auto bg-gray-50 py-10 md:py-0 z-0">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action={myAction}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500">
                      Remember me
                    </label>
                  </div>
                </div>
                <Link
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-[#4595d0] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
            </form>
            <p className="text-sm font-light text-gray-500">
              Don’t have an account yet?{" "}
              <Link
                href="/dashboard/signup"
                className="font-medium text-[#4595d0] hover:underline"
              >
                Sign up
              </Link>
            </p>
            {/* <p className="text-sm font-light text-gray-500">
              Sign in with Google? <GoogleButton />
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;

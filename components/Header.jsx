"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { CgMenuRight, CgClose } from "react-icons/cg";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Blog", url: "/blog" },
  { id: 3, title: "About", url: "/about" },
  { id: 4, title: "Contact", url: "/contact" },
  { id: 5, title: "Dashboard", url: "/Dashboard" },
];

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const session = useSession();

  return (
    <header className="container mx-auto bg-white text-gray-600 body-font fixed top-0 left-0 w-100vw h-20 mb-10">
      <div className="container mx-auto relative flex flex-wrap p-5 md:px-20 flex-col md:flex-row justify-between">
        <div>
          <div className="flex justify-between">
            <Link
              href={"/"}
              onClick={() => setNavbar(false)}
              className="flex title-font font-medium items-center text-gray-900 md:mb-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 md:text-xl font-bold">Hiring Ugandan</span>
            </Link>
            <button
              onClick={() => setNavbar(!navbar)}
              className="md:hidden transition"
            >
              {navbar ? (
                <CgClose className="text-3xl" />
              ) : (
                <CgMenuRight className="text-4xl" />
              )}
            </button>
          </div>
        </div>

        <div>
          <div
            className={`bg-white md:flex transition-all md:flex-row flex-1 justify-self-center md:gap-10 pb-3 md:pb-0 md:mt-0 md:opacity-100 w-full ${
              navbar
                ? " p-12 md:p-0 flex pb-16 flex-col gap-10 items-center h-[100%] opacity-100"
                : " opacity-0 h-[100%] hidden"
            }`}
          >
            <nav className="md:flex md:flex-row md:mx-auto flex flex-wrap flex-col items-center text-black gap-10 md:gap-12 ">
              {links.map((link) => (
                <Link
                  key={link.id}
                  href={link.url}
                  onClick={() => setNavbar(!navbar)}
                  className=" hover:text-gray-900"
                >
                  {link.title}
                </Link>
              ))}
            </nav>

            {session.status === "authenticated" && (
              <div className="flex items-center">
                <button
                  onClick={signOut}
                  className="text-[14px] bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600 transition"
                >
                  SignOut
                </button>
              </div>
            )}

            <div className="flex items-center">
              <Link
                href={"/dashboard/signin"}
                onClick={() => setNavbar(!navbar)}
                className="text-[14px] bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
              >
                Post a Job
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

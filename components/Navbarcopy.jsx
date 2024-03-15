"use client";
import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { VscClose } from "react-icons/vsc";
import { useState } from "react";

const links = ["Home", "Jobs", "Portfolio", "Testimonial", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#171718] text-[#d4d4d4] md:px-10 px-3 absolute top-0 left-0 right-0 z-[10]">
      <div className="flex md:flex-row justify-between items-center h-20">
        <div className="">
          <div className="text-3xl">Lolenti</div>
        </div>
        <button
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          {!open ? (
            <CiMenuFries className="text-4xl block md:hidden" />
          ) : (
            <VscClose className="text-4xl block md:hidden" />
          )}
        </button>

        <div className="gap-7 hidden md:flex">
          {links.map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-100 hover:text-[#cf1f1f] transition flex flex-col"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      {/*Mobile navigation*/}
      {open && (
        <div className="pt-10 bg-[#171a1d] gap-7 md:hidden flex flex-col">
          {links.map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-slate-100 hover:text-[#cf1f1f] transition border-b-[1px] border-slate-700 pb-3"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CgMenuRight, CgClose } from "react-icons/cg";

function Navbar() {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".nav-list");
    const navs = document.querySelectorAll(".nav-list a");

    const toggleNavbar = () => {
      navbar.classList.toggle("active");
    };

    const closeNavbar = () => {
      navbar.classList.remove("active");
    };

    hamburger.addEventListener("click", toggleNavbar);

    navs.forEach((nav) => {
      nav.addEventListener("click", closeNavbar);
    });

    return () => {
      hamburger.removeEventListener("click", toggleNavbar);
      navs.forEach((nav) => {
        nav.removeEventListener("click", closeNavbar);
      });
    };
  }, []);

  return (
    <nav className="navbar relative z-3 top-0 left-0 w-full h-20 bg-[#171718] px-20">
      <div className="hamburger text-center hidden w-60">
        <i className="fa fa-bars text-black border border-black p-2.5 rounded-3xl"></i>
      </div>
      <ul className="nav-list flex uppercase items-center justify-end h-full pr-96">
        <li className="home px-10 font-semibold text-xl">
          <Link
            href="/"
            className="text-[rgba(0,0,0,0.5)] transition duration-300 hover:text-[rgba(0,0,0,0.9)]"
          >
            home
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="text-[rgba(0,0,0,0.5)] transition duration-300 hover:text-[rgba(0,0,0,0.9)]"
          >
            services
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="text-[rgba(0,0,0,0.5)] transition duration-300 hover:text-[rgba(0,0,0,0.9)]"
          >
            about us
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="text-[rgba(0,0,0,0.5)] transition duration-300 hover:text-[rgba(0,0,0,0.9)]"
          >
            skills
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="text-[rgba(0,0,0,0.5)] transition duration-300 hover:text-[rgba(0,0,0,0.9)]"
          >
            portfolio
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="text-[rgba(0,0,0,0.5)] transition duration-300 hover:text-[rgba(0,0,0,0.9)]"
          >
            clients
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="text-[rgba(0,0,0,0.5)] transition duration-300 hover:text-[rgba(0,0,0,0.9)]"
          >
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

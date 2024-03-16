"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { CgMenuRight } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import Logo from "@public/images/logo3.jpg";

const Navbar2 = () => {
  const session = useSession();
  const [openSidebar, setOpenSidebar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const sidebarRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const handleLogout = () => {
    signOut();
    router?.push("/dashboard/signin");
  };

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (
        openSidebar &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        setOpenSidebar(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);
    return () =>
      document.removeEventListener("mousedown", checkIfClickedOutside);
  }, [openSidebar]);

  return (
    <div className="flex items-center justify-between gap-10 lg:px-5 lg:pr-8  pr-5 z-[999] py-3 bg-white sticky top-0 shadow-sm h-auto">
      <div
        onClick={() => router.push("/")}
        className="flex items-center cursor-pointer"
      >
        <Image src={Logo} width={160} height={160} alt="Career Uganda" />
      </div>

      <div onClick={() => setOpenSidebar(true)} className="lg:hidden block">
        <CgMenuRight className="text-xl cursor-pointer" />
      </div>

      <div
        ref={sidebarRef}
        className={`lg:static fixed top-0 ${
          openSidebar ? "right-0" : "-right-[3000px]"
        } transition-all bottom-0 lg:shadow-none shadow-xl lg:w-auto w-[200px] lg:p-0 p-7 bg-white lg:flex lg:flex-1`}
      >
        <AiOutlineClose
          onClick={() => setOpenSidebar(false)}
          className="float-right text-xl mb-5 lg:hidden cursor-pointer"
        />

        <div className="clear-both" />

        <div className="flex-1 lg:flex-row flex-col flex lg:items-center items-start text-sm lg:gap-7 gap-4">
          <Link
            href="/"
            className={`navbar-link hover:text-[#4595d0] ${
              pathname === "/" || pathname === "/index" ? "active" : undefined
            }`}
          >
            Home
          </Link>

          <Link
            href="/jobs"
            className={`navbar-link hover:text-[#4595d0] ${
              pathname === "/jobs" ? "active" : undefined
            }`}
          >
            Find Jobs
          </Link>
          <Link
            href={"/about"}
            className={`navbar-link hover:text-[#4595d0] ${
              pathname === "/organization/jobs" ? "active" : undefined
            }`}
          >
            About
          </Link>
        </div>

        <div className="text-sm flex lg:flex-row flex-col lg:items-center items-start lg:gap-8 gap-4 mt-10 lg:mt-0">
          <Link
            href={"/contact"}
            className={`navbar-link hover:text-[#4595d0] ${
              pathname === "/organization/jobs" ? "active" : undefined
            }`}
          >
            Post A Job
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;

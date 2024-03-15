"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

const Search = ({ search }: { search?: string }) => {
  const router = useRouter();
  const initialRender = useRef(true);
  const [text, setText] = useState(search);
  const [postedWithin, setPostedWithin] = useState("");
  const [query] = useDebounce(text, 500);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    if (!query) {
      router.push(`/`);
      if (postedWithin) {
        router.push(`/?date=${postedWithin}`);
      }
    } else {
      router.push(`/?search=${query}`);
      if (postedWithin) {
        router.push(`/?search=${query}&date=${postedWithin}`);
      }
    }
  }, [query, postedWithin, router]);

  return (
    <div className="flex flex-col md:flex-row gap-3 justify-center items-center px-5">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="h-10 md:h-14 rounded text-[14px] pl-3 w-[100%] md:w-60 bg-gray-100 border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Keyword"
      />

      {/* <select
        id="dateFilter"
        value={postedWithin}
        onChange={(e) => setPostedWithin(e.target.value)}
        className="h-10 md:h-14 rounded text-[14px] pl-3 w-[100%] md:w-60 bg-gray-100 border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"
      >
        <option value="">All</option>
        <option value="24h">Last 24 hours</option>
        <option value="3d">Last 3 days</option>
        <option value="7d">Last 7 days</option>
        <option value="lm">Last month</option>
        <option value="3m">Last 3 months</option>
      </select> */}
    </div>
  );
};

export default Search;

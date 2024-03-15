import React from "react";
import Image from "next/image";
import Search from "./Search";
import SearchBar from "./home/SearchBar";

interface Section1Props {
  search?: string;
  date?: string;
}

const Section1: React.FC<Section1Props> = ({ search, date }) => {
  return (
    <section className=" h-[auto] bg-white border border-gray-200 flex flex-col justify-between z-0">
      <SearchBar search={search} date={date} />
    </section>
  );
};

export default Section1;

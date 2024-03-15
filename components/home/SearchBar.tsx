"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import { AiOutlineSearch } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import { Button } from "@components/ui/button";
import useCustomRouter from "@hooks/useCustomRouter";
import DateFilter from "@components/home/DateFilter";
import CategoryFilter from "@components/home/CategoryFilter";

const SelectComponent = ({ onInputChange }: any) => {
  const [open, setOpen] = useState(false);
  console.log("select component");

  const selectRef = useRef(null);

  const [inputValue, setInputValue] = useState("");

  const handleClickOutside = (event: any) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggle = () => {
    setOpen(!open);
  };

  const handleDaysString = (val: string) => {
    onInputChange(val);
  };

  const handledaysSelection = (val: string) => {
    setInputValue(val);
    setOpen(false);
  };

  return (
    <main className="flex place-items-center mt-5 ">
      <div
        ref={selectRef}
        className="relative w-[10rem]"
        onClick={() => setOpen(!open)}
      >
        <Button
          onClick={toggle}
          className={`flex w-auto items-center justify-around gap-2  bg-white py-2 px-4 border-[1px] border-[#4595d0]  ${
            open && "ring-blue-600"
          }`}
        >
          <span className=" text-sm font-light">
            {inputValue === "" ? "Date" : inputValue}
          </span>
          <FaChevronDown className="text-[11px] text-gray-400" />
        </Button>

        {open && (
          <ul className="z-2 absolute mt-1 w-full rounded bg-gray-50 ring-1 ring-gray-300">
            <li
              className="cursor-pointer select-none p-2 hover:bg-gray-200 text-sm"
              onClick={() => {
                handledaysSelection("Any");
                handleDaysString("Any");
              }}
            >
              Any
            </li>
            <li
              className="cursor-pointer select-none p-2 hover:bg-gray-200 text-sm"
              onClick={() => {
                handledaysSelection("Last 24 hrs");
                handleDaysString("24hrs");
              }}
            >
              Last 24 hrs
            </li>
            <li
              className="cursor-pointer select-none p-2 hover:bg-gray-200 text-sm"
              onClick={() => {
                handledaysSelection("Last 3 days");
                handleDaysString("3days");
              }}
            >
              Last 3 days
            </li>
            <li
              className="cursor-pointer select-none p-2 hover:bg-gray-200 text-sm"
              onClick={() => {
                handledaysSelection("Last 7 days");
                handleDaysString("7days");
              }}
            >
              Last 7 days
            </li>
            <li
              className="cursor-pointer select-none p-2 hover:bg-gray-200 text-sm"
              onClick={() => {
                handledaysSelection("Last 30 days");
                handleDaysString("30days");
              }}
            >
              Last 30 days
            </li>
          </ul>
        )}
      </div>
    </main>
  );
};

interface Section1Props {
  search?: string;
  date?: string;
}

const SearchBar: React.FC<Section1Props> = ({ search, date }) => {
  // const initialRender = useRef(true);
  // const router = useRouter();
  // const [text, setText] = useState(search);

  const [days, setDays] = useState(date);
  // const [query] = useDebounce(text, 500);

  const handleInputChangeFromChild = (childValue: string) => {
    setDays(childValue);
  };

  // useEffect(() => {
  //   console.log("again");
  //   if (initialRender.current) {
  //     console.log("This is the first render");
  //     initialRender.current = false;
  //     return;
  //   }
  //   console.log("second render");

  //   if (!query) {
  //     router?.push(`/`);
  //     if (days) {
  //       router?.push(`/?date=${days}`);
  //     }
  //   } else {
  //     router?.push(`/?search=${query}`);
  //     if (days) {
  //       router?.push(`/?search=${query}&date=${days}`);
  //     }
  //   }
  // }, [query, days, router]);

  const { pushQuery, query } = useCustomRouter();

  async function handleSearch(formData: any) {
    const search = formData.get("search");

    // @ts-ignore
    pushQuery({ search });
  }

  return (
    <div className="md:py-10 py-7 md:px-16 px-5 flex flex-col gap-3">
      <div className="w-full m-auto bg-white shadow-xl border border-gray-200 md:rounded-full rounded-md md:h-16 h-auto md:py-0 py-6 px-4">
        <form
          className="flex md:flex-row flex-col justify-between items-center h-full gap-3"
          action={handleSearch}
        >
          <div className="flex w-full items-center gap-3 md:mb-0 mb-5 md:border-none border-b border-gray-200 md:pb-0 pb-3 flex-1">
            <AiOutlineSearch className="text-xl text-gray-500" />
            <input
              name="search"
              type="search"
              // value={text}
              // onChange={(e) => setText(e.target.value)}
              placeholder="Job title or keyword"
              className="outline-0 h-full px-2 w-full text-sm text-[#999]"
              defaultValue={query.search || ""}
            />
          </div>
          <button className="bg-[#4595d0] hover:bg-[#4595d0] transition-[background] text-white text-sm px-6 py-2 rounded-full outline-0">
            Search
          </button>
        </form>
      </div>

      <div className="flex gap-3">
        <DateFilter />
        <CategoryFilter />
      </div>

      {/* <SelectComponent onInputChange={handleInputChangeFromChild} date={date} /> */}
    </div>
  );
};

export default SearchBar;

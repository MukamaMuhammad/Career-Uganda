import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

const useCustomRouter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = {};

  let search = searchParams.get("search");
  let date = searchParams.get("date");
  let category = searchParams.get("category");
  let page = searchParams.get("page");

  if (search) query.search = search;
  if (date) query.date = date;
  if (category) query.category = category;
  if (page) query.page = parseInt(page);

  const pushQuery = ({ search, date, category, page }) => {
    if (search !== undefined) {
      search === "" ? delete query.search : (query.search = search);
    }
    if (date !== undefined) {
      date === "Any" ? delete query.date : (query.date = date);
    }
    if (category !== undefined) {
      category === "Any" ? delete query.category : (query.category = category);
    }
    if (page !== undefined) {
      page === 1 ? delete query.page : (query.page = page);
    }

    const newQuery = new URLSearchParams(query).toString();
    router.push(`?${newQuery}`);
  };

  return { pushQuery, query };
};

export default useCustomRouter;

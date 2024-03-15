import React from "react";
import Section1 from "@components/Section1";
import Feed from "@components/Feed";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const limit =
    typeof searchParams.limit === "string" ? Number(searchParams.limit) : 2;
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;
  const date =
    typeof searchParams.date === "string" ? searchParams.date : undefined;
  const category =
    typeof searchParams.category === "string"
      ? searchParams.category
      : undefined;

  return (
    <>
      <Section1 search={search} date={date} />
      <Feed
        search={search}
        date={date}
        page={page}
        limit={limit}
        category={category}
      />
    </>
  );
}

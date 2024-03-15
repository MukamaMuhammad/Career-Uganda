import { Skeleton } from "@/components/ui/skeleton";
import { AiOutlineSearch } from "react-icons/ai";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

export default function SkeletonHome() {
  return (
    <>
      <section className=" h-[auto] bg-white border border-gray-200 flex flex-col justify-between z-0">
        <div className="md:py-10 py-7 md:px-16 px-5 flex flex-col gap-3">
          <div className="w-full m-auto bg-white shadow-xl border border-gray-200 md:rounded-full rounded-md md:h-16 h-auto md:py-0 py-6 px-4">
            <form
              className="flex md:flex-row flex-col justify-between items-center h-full gap-3"
              action="#"
            >
              <div className="flex w-full items-center gap-3 md:mb-0 mb-5 md:border-none border-b border-gray-200 md:pb-0 pb-3 flex-1">
                <AiOutlineSearch className="text-xl text-gray-500" />
                <Skeleton className="h-6 w-full" />
              </div>
              <Skeleton className=" px-6 py-2 rounded-full" />
            </form>
          </div>

          <div className="flex gap-3">
            <Skeleton className="h-10 w-[100px]" />
            <Skeleton className="h-10 w-[200px]" />
          </div>
        </div>
      </section>
      <SkeletonFeed />
    </>
  );
}

function SkeletonCard() {
  return (
    <div className="md:w-[800px] w-[100%]">
      <Card className="md:w-[800px] max-sm:w-[330px] flex flex-col">
        <CardHeader className="">
          <Skeleton className="h-7 w-fullss mb-3" />
          <CardDescription>
            <div className="flex max-md:flex-col gap-2 items-start">
              <div className="flex gap-1 items-center">
                <Skeleton className="h-4 w-12" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
              <div className="flex gap-1 items-center">
                <Skeleton className="h-4 w-12" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
              <div className="flex gap-1 items-center">
                <Skeleton className="h-4 w-12" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent className="font-normal">
          <Skeleton className="h-10 w-full" count={5} />
        </CardContent>
      </Card>
    </div>
  );
}

function SkeletonPagination() {
  return (
    <Pagination className="cursor-pointer">
      <PaginationContent>
        <PaginationItem>
          <Skeleton className="h-6 w-6" />
        </PaginationItem>
        <PaginationItem>
          <Skeleton className="h-6 w-6" />
        </PaginationItem>
        <PaginationItem>
          <Skeleton className="h-6 w-6" />
        </PaginationItem>
        <PaginationItem>
          <Skeleton className="h-6 w-6" />
        </PaginationItem>
        <PaginationItem>
          <Skeleton className="h-6 w-6" />
        </PaginationItem>
        <PaginationItem>
          <Skeleton className="h-6 w-6" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

function SkeletonFeed() {
  return (
    <section className="h-auto bg-gray-100 pt-5 pb-10 text-center flex flex-col items-center">
      <div className="mx-3 md:mx-[20%] text-start grid gap-7 md:grid-cols-1 sm:grid-cols-1">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>

      <div className="flex flex-col items-center pt-5">
        <SkeletonPagination />
      </div>
    </section>
  );
}

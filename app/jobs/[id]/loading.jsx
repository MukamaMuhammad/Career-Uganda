import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonCard() {
  return (
    <section className="container mx-auto bg-gray-100 md:px-7 px-2 py-10">
      <div className="grid grid-cols-1 gap-5 md:gap-10 lg:mx-60 md:max-lg:40 bg-white md:p-10 p-4">
        <div className="md:col-span-2">
          <div className="bg-white flex flex-col justify-between rounded gap-4">
            <div className="flex gap-5 items-center">
              <Skeleton className="h-[90px] w-[90px] rounded" />
              <div className="flex flex-col justify-center gap-1">
                <Skeleton className="h-4 w-[150px]" />
                <Skeleton className="h-4 w-[100px]" />
                <Skeleton className="h-4 w-[100px]" />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-1">
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-[150px]" />
              <Skeleton className="h-4 w-[150px]" />
              <Skeleton className="h-4 w-[150px]" />
            </div>
          </div>

          <div className="my-5">
            <Skeleton className="text-[16px] font-medium mb-2" />
            <Skeleton className="h-6 w-[200px]" />
            <Skeleton className="h-6 w-[300px]" />
            <Skeleton className="h-6 w-[250px]" />
            <Skeleton className="h-6 w-[200px]" />
            <Skeleton className="h-6 w-[250px]" />
            <Skeleton className="h-6 w-[200px]" />
            <Skeleton className="h-6 w-[250px]" />
            <Skeleton className="h-6 w-[300px]" />
            <Skeleton className="h-6 w-[250px]" />
            <Skeleton className="h-6 w-[200px]" />
            <Skeleton className="h-6 w-[250px]" />
            <Skeleton className="h-6 w-[200px]" />
            <Skeleton className="h-6 w-[300px]" />
            <Skeleton className="h-6 w-[250px]" />
            <Skeleton className="h-6 w-[200px]" />
            <Skeleton className="h-6 w-[250px]" />
            <Skeleton className="h-6 w-[200px]" />
            <Skeleton className="h-6 w-[300px]" />
            <Skeleton className="h-6 w-[250px]" />
            <Skeleton className="h-6 w-[200px]" />
            <Skeleton className="h-6 w-[250px]" />
            <Skeleton className="h-6 w-[200px]" />
            <Skeleton className="h-6 w-[300px]" />
            <Skeleton className="h-6 w-[250px]" />
            <Skeleton className="h-6 w-[200px]" />
            <Skeleton className="h-6 w-[250px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

import { Skeleton } from "../ui/skeleton";

export const DetailPageSkeleton = () => {
  const skeletonArray = Array.from({ length: 3 });
  return (
    <div className="md:px-40 py-0">
      <div className="flex justify-between px-4 md:px-20">
        <div>
          <Skeleton className="bg-[#F4F4F5] dark:bg-[#27272A] w-50 h-10 mb-2" />
          <Skeleton className="bg-[#F4F4F5] dark:bg-[#27272A] w-50 h-7 flex items-center ] mb-4" />
        </div>

        <div className="flex flex-col gap-1">
          <Skeleton className="bg-[#F4F4F5] dark:bg-[#27272A] w-20 h-4 " />
          <div className="flex gap-2 items-center">
            <div>
              <Skeleton className="bg-[#F4F4F5] dark:bg-[#27272A] w-11 h-7" />
              <Skeleton className="bg-[#F4F4F5] dark:bg-[#27272A] w-5 h-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:hidden flex-col">
        <div className="relative  w-full h-[211px] ">
          <Skeleton className="absolute z-10 w-full h-[211px] bg-[#F4F4F5] dark:bg-[#27272A]" />

          <div className="absolute z-50 flex items-center gap-2 top-40 left-3">
            <Skeleton className=" border border-none rounded-full size-10 py-2 px-4 bg-[#F4F4F5] dark:bg-[#27272A]" />

            <Skeleton className="bg-[#F4F4F5] h-7 w-19 dark:bg-[#27272A]" />
          </div>
        </div>

        <div className=" flex px-5 pt-5">
          <Skeleton className=" w-25 h-37 bg-[#F4F4F5] dark:bg-[#27272A]" />

          <div className="flex flex-col gap-5 pl-6 pr-3">
            <div className=" flex flex-wrap gap-2">
              {skeletonArray.map((_, index) => (
                <Skeleton
                  key={index}
                  className=" rounded-full text-sm px-2.5 py-0.5 gap-2.5 h-8 w-25 bg-[#F4F4F5] dark:bg-[#27272A]"
                />
              ))}
            </div>

            <Skeleton className="mb-4 w-50 h-60 bg-[#F4F4F5] dark:bg-[#27272A]" />
          </div>
        </div>
      </div>

      <div className="hidden md:flex flex-col">
        <div className="flex gap-8 justify-center">
          <Skeleton className=" w-72.5 h-107 bg-[#F4F4F5] dark:bg-[#27272A]" />

          <div className="relative  w-190 h-107 ">
            <Skeleton className="absolute z-10 bg-[#F4F4F5] dark:bg-[#27272A] w-190 h-107" />
            <div className="absolute z-50 flex items-center gap-2 top-90 left-8">
              <Skeleton className="border border-none rounded-full size-10 py-2 px-4 bg-[#F4F4F5] dark:bg-[#27272A] w-fill h-7" />

              <Skeleton className="bg-[#F4F4F5] dark:bg-[#27272A] h-7 w-40" />
            </div>
          </div>
        </div>

        <div className=" flex px-auto pt-5 gap-4">
          <div className=" flex flex-wrap gap-2">
            {skeletonArray.map((_, index) => (
              <Skeleton
                key={index}
                className="rounded-full text-sm px-2.5 py-0.5 gap-2.5 h-8 w-25 bg-[#F4F4F5] dark:bg-[#27272A]"
              />
            ))}
          </div>
          <Skeleton className="w-120 h-7 bg-[#F4F4F5] dark:bg-[#27272A] mb-4 pt-5 " />
        </div>
      </div>
      <Skeleton className="w-210 h-7 bg-[#F4F4F5] dark:bg-[#27272A] mb-4 pt-5 " />
    </div>
  );
};

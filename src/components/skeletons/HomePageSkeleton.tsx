import { Skeleton } from "../ui/skeleton";

export const HomePageSkeleton = () => {
  const skeletonArray = Array.from({ length: 10 });

  return (
    <div className="flex flex-col gap-3">
      <Skeleton className=" w-full  h-60 md:h-165 shadow-md  overflow-hidden bg-[#F4F4F5] dark:bg-[#27272A] " />
      <div className=" flex flex-col px-5 md:px-20 gap-3 mt-3">
        <div className="flex justify-between items-center">
          <Skeleton className="w-30 h-9 shadow-md rounded-lg overflow-hidden bg-[#F4F4F5] dark:bg-[#27272A] " />
          <Skeleton className="w-27 h-9 shadow-md rounded-lg overflow-hidden bg-[#F4F4F5] dark:bg-[#27272A] " />
        </div>
        <div className="grid grid-cols-2 grid-rows-4 gap-5 md:grid-cols-5 md:grid-rows-2 md:gap-9 ">
          {skeletonArray.map((_, index) => (
            <Skeleton
              key={index}
              className="shadow-md rounded-lg overflow-hidden flex flex-col gap-1 animate-pulse h-[341px] md:h-[530px] bg-[#F4F4F5] dark:bg-[#27272A]"
            />
          ))}
        </div>
      </div>
      <div className=" flex flex-col px-5 md:px-20 gap-3">
        <div className="flex justify-between items-center">
          <Skeleton className="w-30 h-9 shadow-md rounded-lg overflow-hidden bg-[#F4F4F5] dark:bg-[#27272A] " />
          <Skeleton className="w-27 h-9 shadow-md rounded-lg overflow-hidden bg-[#F4F4F5] dark:bg-[#27272A] " />
        </div>
        <div className="grid grid-cols-2 grid-rows-4 gap-5 md:grid-cols-5 md:grid-rows-2 md:gap-9 ">
          {skeletonArray.map((_, index) => (
            <Skeleton
              key={index}
              className="shadow-md rounded-lg overflow-hidden flex flex-col gap-1 animate-pulse h-[341px] md:h-[530px] bg-[#F4F4F5] dark:bg-[#27272A]"
            />
          ))}
        </div>
      </div>
      <div className=" flex flex-col px-5 md:px-20 gap-3">
        <div className="flex justify-between items-center">
          <Skeleton className="w-30 h-9 shadow-md rounded-lg overflow-hidden bg-[#F4F4F5] dark:bg-[#27272A] " />
          <Skeleton className="w-27 h-9 shadow-md rounded-lg overflow-hidden bg-[#F4F4F5] dark:bg-[#27272A] " />
        </div>
        <div className="grid grid-cols-2 grid-rows-4 gap-5 md:grid-cols-5 md:grid-rows-2 md:gap-9 ">
          {skeletonArray.map((_, index) => (
            <Skeleton
              key={index}
              className="shadow-md rounded-lg overflow-hidden flex flex-col gap-1 animate-pulse h-[341px] md:h-[530px] bg-[#F4F4F5] dark:bg-[#27272A]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

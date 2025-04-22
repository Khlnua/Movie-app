import { Search } from "lucide-react";
import { Input } from "../ui/input";

export const SearchInput = () => {
  return (
    <div className="shadow-xs w-90 flex items-center gap-2 rounded-md border border-gray-500 pl-5">
      <Search className="size-4 opacity-50 " />
      <Input className="text-[14px] text-[#71717A] font-normal" />
    </div>
  );
};

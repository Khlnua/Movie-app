import { Search } from "lucide-react";
import { Input } from "../ui/input";

export const SearchInput = () => {
  return (
    <div className="shadow-xs flex items-center px-3 gap-[10px] h-9 md:border rounded-lg border-[#E4E4E7] ">
      <Search className="size-4 text-[#71717A]  ml-2" />
      <Input className="text-[14px] w-auto  font-normal" />
    </div>
  );
};

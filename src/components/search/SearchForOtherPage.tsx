import { GenreHeader } from "../genre/GenreHeader";
import { SearchInput } from "./SearchInput";
import { AnimatePresence, motion } from "framer-motion";
import { searchBarAnimationVariants } from "@/constants/search-bar-animation";
import { useState } from "react";
import { Search, X } from "lucide-react";
import { Button } from "../ui/button";

export const SearchForOtherPage = () => {
  const [showSearchBarMobile, setShowSearchBarMobile] = useState(false);

  const handleSearchButton = () => {
    setShowSearchBarMobile(!showSearchBarMobile);
  };

  return (
    <div className="flex flex-1 md:flex-0 items-center gap-x-3 ">
      <div className="items-center gap-x-3 hidden lg:flex">
        <GenreHeader />
        <SearchInput />
      </div>

      <Button
        className="flex md:hidden ml-auto shadow-xs rounded-md border border-[#E4E4E7] mr-1"
        onClick={handleSearchButton}
      >
        <Search />
      </Button>

      <AnimatePresence>
        {showSearchBarMobile && (
          <motion.div
            variants={searchBarAnimationVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-x-0 flex md:hidden px-5 py-[7.5px] justify-between bg-white
             "
          >
            <GenreHeader />
            <SearchInput />

            <Button
              onClick={handleSearchButton}
              className="rounded-md shadow-xs border border-[#E4E4E7]"
              variant="outline"
              size="icon"
            >
              <X />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

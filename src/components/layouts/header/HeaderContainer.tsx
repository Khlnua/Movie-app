"use client";

import { MovieZLogo } from "@/components/common";
import { ThemeToggleButtons } from "./ThemeToggleButtons";
import { usePathname } from "next/navigation";
import { SearchForSearchPage } from "@/components/search/SearchForSearchPage";
import { SearchForOtherPage } from "@/components/search/SearchForOtherPage";

export const HeaderContainer = () => {
  const pathname = usePathname();

  return (
    <div className="fixed z-10 bg-white dark:bg-black w-full">
      <div className="flex items-center md:justify-between py-[7.5px] md:py-[11.5px] px-5 md:px-20 relative">
        <MovieZLogo />

        {pathname === "/search" ? (
          <SearchForSearchPage />
        ) : (
          <SearchForOtherPage />
        )}

        <ThemeToggleButtons />
      </div>
    </div>
  );
};

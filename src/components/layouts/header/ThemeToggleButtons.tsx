"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export const ThemeToggleButtons = () => {
  // const [darkMode, setDarkMode] = useState(
  //   () => localStorage.getItem("theme") === "dark"
  // );

  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     localStorage.setItem("theme", "light");
  //   }
  // }, [darkMode]);

  return (
    <Button
      className="rounded-md border shadow-xs border-[#E4E4E7]"
      variant="outline"
      size="icon"
      // onClick={() => setDarkMode(!darkMode)}
    >
      <Moon />
      {/* {darkMode ? <Moon /> : <Sun />} */}
    </Button>
  );
};

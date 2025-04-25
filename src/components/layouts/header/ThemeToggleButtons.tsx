"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export const ThemeToggleButtons = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const isDarkMode = resolvedTheme === "dark";

  const handleThemeChange = () => setTheme(isDarkMode ? "light" : "dark");

  return (
    <Button
      className=" border border-[#E4E4E7] "
      size="icon"
      onClick={handleThemeChange}
    >
      {isDarkMode ? <Sun /> : <Moon />}
    </Button>
  );
};

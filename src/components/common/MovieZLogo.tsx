"use client";
import { cn } from "@/lib/utils";
import { Film } from "lucide-react";
import { useRouter } from "next/navigation";

type MovieZLogoProps = {
  color?: string;
};

export const MovieZLogo = ({ color = "text-indigo-700" }: MovieZLogoProps) => {
  const router = useRouter();

  const GoToHomePage = () => {
    router.push(`/`);
  };
  return (
    <div
      onClick={GoToHomePage}
      className={cn("flex gap-1 items-center cursor-pointer", color)}
    >
      <Film className="size-5" />
      <p className="text-[16px] font-bold">Movie Z</p>
    </div>
  );
};

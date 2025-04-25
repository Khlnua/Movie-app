import { ContactInformation } from "./ContactInformation";
import { FollowUs } from "./FollowUs";
import { Rights } from "./Rights";

export const Footer = () => {
  return (
    <div className="bg-[#4338CA] text-[#FAFAFA] flex flex-col md:flex-row md:justify-between md:pt-0 md:px-40 items-center gap-7 w-full h-90 pt-20 md:h-70 mt-5">
      <Rights />
      <div className="flex gap-12 md:gap-25">
        <ContactInformation />
        <FollowUs />
      </div>
    </div>
  );
};

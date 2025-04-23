import { ContactInformation } from "./ContactInformation";
import { FollowUs } from "./FollowUs";
import { Rights } from "./Rights";

export const Footer = () => {
  return (
    <div>
      <Rights />
      <ContactInformation />
      <FollowUs />
    </div>
  );
};

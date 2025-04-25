import { Mail, Phone } from "lucide-react";

export const ContactInformation = () => {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-[#FAFAFA]/80">Contact Information</p>
      <div className="flex gap-3 items-center">
        <Mail />
        <div>
          <p>Email:</p>
          <p>support@movieZ.com</p>
        </div>
      </div>
      <div className="flex gap-3  items-center">
        <Phone />
        <div>
          <p> Phone:</p>
          <p> +976 (11) 123-4567</p>
        </div>
      </div>
    </div>
  );
};

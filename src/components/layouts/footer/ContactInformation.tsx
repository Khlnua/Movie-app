import { Mail, Phone } from "lucide-react";

export const ContactInformation = () => {
  return (
    <div>
      <p>Contact Information</p>
      <div>
        <Mail />
        <div>
          <p>Email:</p>
          <p>support@movieZ.com</p>
        </div>
      </div>
      <div>
        <Phone />
        <div>
          <p> Phone:</p>
          <p> +976 (11) 123-4567</p>
        </div>
      </div>
    </div>
  );
};

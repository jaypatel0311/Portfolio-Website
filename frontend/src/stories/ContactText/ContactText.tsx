import React from "react";
import "./ContactText.css";

interface ContactTextProps {}

export const ContactText = ({ ...props }: ContactTextProps) => {
  return (
    <>
      <div className="contact-text">
        <p>
          I am open to talking about other projects, freelance roles. You can
          reach me here at{" "}
          <a href="mailto:info.jayworks@gmail.com">info.jayworks@gmail.com</a>.
          I look forward to hearing from you!
        </p>
      </div>
    </>
  );
};

export default ContactText;

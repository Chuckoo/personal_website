import "./ContactPage.css";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { contact } from "../portfolio";

const ContactPage = () => {
  if (!contact.email) return null;
  return (
    <>
      <div className="contact">
        <h1> Looking to work with me ? </h1>
        <h5 className="left">
          or you want to simply chat ? Why don't you reach out to me on any of
          the below places. You're going to get the quickest response if you
          reach out to me by email.
        </h5>
        <div className="contact-card">
          <div className="contact-element">
            <a href="tel:+19515368783">
              <PhoneIcon />
              <h5>+1 951-536-8783</h5>
            </a>
          </div>
          <div className="contact-element">
            <a href={"mailto:${contact.email}"}>
              <EmailIcon />
              <h5>{contact.email}</h5>
            </a>
          </div>
          <div className="contact-element">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
              <h5>LinkedIn</h5>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;

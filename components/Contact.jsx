import ContactForm from "./ContactForm";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <Element name="contact">
      <div className="pt-8">
        <p className="pl-[10%] text-xl text-[#9d94a5]">Contact</p>
        <div className="card flex flex-col items-center">
          <ContactForm />
        </div>
      </div>
    </Element>
  );
};

export default Contact;

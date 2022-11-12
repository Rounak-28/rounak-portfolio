import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  // const [senderName, setSenderName] = useState("")
  // const [senderEmail, setSenderEmail] = useState("")
  // const [senderMessage, setSenderMessage] = useState("")
  // const [idk, setIdk] = useState(false)
  let validate = false

  const nameRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()
  
  const warningRef = useRef()
  
  const check = ()=>{
    if(nameRef.current.value == "" || emailRef.current.value == "" || messageRef.current.value == ""){
      validate = false
      warningRef.current.classList.remove("invisible")
    }
    else {
      validate = true
      warningRef.current.classList.add("invisible")
    }
  }
  let mailData;
  const sendMail = () => {
    check()
      mailData = {
      name: nameRef.current.value,
      reply_to: emailRef.current.value,
      message: messageRef.current.value
    };

    validate && emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, mailData, process.env.NEXT_PUBLIC_API_KEY)
           .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
           }, (err) => {
            console.log('FAILED...', err);
           });
           console.log("test");
  };
  return (
    <div className="w-[85%] h-[400px] my-4 p-3 space-y-6">
      <input
        className="w-full h-14 bg-[#130f19] outline-none outline-[#4c2c6b] indent-3 rounded-sm"
        type="text"
        placeholder="Name"
        ref={nameRef}
      />
      <input
        className="w-full h-14 bg-[#130f19] outline-none outline-[#4c2c6b] indent-3 rounded-sm"
        type="text"
        placeholder="Email"
        ref={emailRef}
      />
      <textarea
        className="w-full h-20 bg-[#130f19] outline-none outline-[#4c2c6b] indent-3 resize-none rounded-sm"
        type="text"
        placeholder="Message"
        ref={messageRef}
      />
      <p className="text-red-700 invisible" ref={warningRef}>something is wrong</p>
      <button
        className="w-full h-14 bg-[#4c2c6b] rounded-sm"
        onClick={sendMail}
      >
        Send
      </button>
    </div>
  );
};

export default ContactForm;

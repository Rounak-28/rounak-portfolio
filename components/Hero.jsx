import Link from "next/link";
import { AiOutlineTwitter, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="flex w-1/2 md:fixed">
      <Navbar />
      <div className="left my-[10vh] md:my-[20vh] mx-12 md:mx-20">
        <p className="text-4xl my-4">Hi There!</p>
        <p className="text-5xl">
          I&#39;m <span className="text-purple-500">ROUNAK KUMBHAKAR</span>
        </p>
        <p className=" my-6 text-lg">
          I&#39;m a <span className="text-[#9370bb] font-semibold text-xl">Full Stack Developer</span> mainly focused on <span className="text-[#9370bb] font-semibold text-xl">Frontend</span>, I create web apps using modern technologies.
        </p>
        <button className="bg-purple-500 text-white px-4 py-2 mb-6 rounded-sm hover:-skew-x-6">
          Download Resume
        </button>
        <div className="socials flex text-3xl space-x-9">
          <a target={"_blank"} rel="noreferrer" href={"https://twitter.com/Rounak_28"}>
          <AiOutlineTwitter />
          </a>
          <a target={"_blank"} rel="noreferrer" href={"https://github.com/Rounak-28"}>
          <AiFillGithub />
          </a>
          <a target={"_blank"} rel="noreferrer" href={"https://www.linkedin.com/in/rounak-kumbhakar-6110a0233"}>
          <AiFillLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import Image from "next/image";
import Link from "next/link";
import { AiOutlineHome, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { BiMessageAltDetail } from "react-icons/bi";
import * as Scroll from "react-scroll";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  return (
    <div className="h-16 w-screen text-white md:flex items-center hidden md:fixed">
      <div className="logo mx-12">
        <Link href={"/"}>
          <Image src="/logo.svg" width={65} height={40} alt="" />
        </Link>
      </div>
      <div className="navs">
        <ul className="flex space-x-3 lg:space-x-8">
          <ScrollLink to="projects" smooth={true} duration={500}>
            <li className="flex space-x-1 items-center cursor-pointer hover-underline-animation">
              <AiOutlineHome />
              <p>Home</p>
            </li>
          </ScrollLink>

          <ScrollLink to="projects" smooth={true} duration={500}>
            <li className="flex space-x-1 items-center cursor-pointer hover-underline-animation">
              <AiOutlineFundProjectionScreen />
              <p>Projects</p>
            </li>
          </ScrollLink>

          <ScrollLink to="about" smooth={true} duration={500}>
            <li className="flex space-x-1 items-center cursor-pointer hover-underline-animation">
              <IoPersonOutline />
              <p>About</p>
            </li>
          </ScrollLink>

          <ScrollLink to="contact" smooth={true} duration={500}>
            <li className="flex space-x-1 items-center cursor-pointer hover-underline-animation">
              <BiMessageAltDetail />
              <p>Contact</p>
            </li>
          </ScrollLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

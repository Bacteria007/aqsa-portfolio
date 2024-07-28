import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import ParticlesComponent from "./ParticlesComponent";
import Link from "next/link";
import ContactIcons from "./ContactIcons";

const Main = () => {
  return (
    <div id="home" className="relative w-full h-screen text-center">
      <ParticlesComponent />
      <div className="absolute z-10 inset-0 max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let&#39;s Build Something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m <span className="text-[#5651e5]">Aqsa</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Full Stack Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Full-stack developer with a passion for crafting intuitive, effective and scalable digital solutions that meet buisness needs and user expectations.
          </p>
          <ContactIcons />
        </div>
      </div>
    </div>
  );
};
export default Main;

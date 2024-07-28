import React from "react";
import Image from "next/image";
import Link from "next/link";
import MyImages from './MyImages'
const About = () => {
  return (
    <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          {/* <p className="py-2 text-gray-600">
            I am not your regular ddeveloper
          </p> */}
          <p className="py-2 text-gray-600 text-justify">
            I am a passionate developer dedicated to creating innovative solutions that simplify life. With a keen interest in technology and a derive to make a difference I&#39;ve developed several applicatoins that cater to difference needs. I&#39;m always looking forward for new ways to levevrage technology and make a postive impact. Let&#39;s conect and explore how technology can improve our lives.
          </p>
          <p className="py-2 text-gray-600 text-justify">
          As a full-stack developer, I possess a comprehensive skill set that spans both front-end and back-end development. With expertise in technologies such as JavaScript, ReactJS/React Native, and server-side technologies like Node.js, I craft robust and scalable applications. My proficiency in database management, API integration enables me to deliver end-to-end solutions. With a strong foundation in computer science and a passion for innovation, I stay up-to-date with industry trends and best practices. I excel in collaborative environments, working closely with cross-functional teams to drive projects forward. My goal is to leverage technology to solve real-world problems and create meaningful impact. I&#39;m dedicated to delivering high-quality solutions that exceed expectations.
          </p>
          <Link href="#projects" className="py-2 text-gray-600 underline cursor-pointer">
            Checkiut some of my latest projects.
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-lg rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={MyImages.AboutImg} alt="/" />
        </div>
      </div>
    </div>
  );
};
export default About;
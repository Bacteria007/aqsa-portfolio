"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";
import MyImages from "./MyImages";
import ContactIcons from "./ContactIcons";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");

  const router = useRouter();

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);

    // Update navbar style based on the current route
    if (router.pathname === "/project_details") {
      setNavBg("transparent");
      setLinkColor("#fff");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }

    return () => {
      window.removeEventListener("scroll", handleShadow);
    };
  }, [router.pathname]);

  const handleNav = () => setNav(!nav);
  const links = [
    { title: "Home", link: "/#home" },
    { title: "About", link: "/#about" },
    { title: "Skills", link: "/#skills" },
    { title: "Projects", link: "/#projects" },
    { title: "Contact", link: "/#contact" },
  ];

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-md z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href={"/"}>
          <Image
          src={router.pathname === "/project_details" ? MyImages.WhiteLogo : MyImages.NavLogo}
            
          // src={MyImages.NavLogo}
           alt="/" width="125" height="50" />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            {links.map((item, index) => (
              <li
                onClick={() => setNav(false)}
                className="ml-10 text-sm uppercase relative group"
                key={index}
              >
                <Link href={item.link} className="relative inline-block">
                  {item.title}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black/10 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}

          </ul>
          <div
            style={{ color: `${linkColor}` }}
            className="md:hidden"
            onClick={handleNav}
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed lef-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3]  p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href={"/"}>
                <Image
                  // src={MyImages.NavLogo}
                  src={router.pathname === "/project_details" ? MyImages.WhiteLogo : MyImages.NavLogo}
          
                  alt="/"
                  width={"87"}
                  height={"35"}
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              {links.map((item, index) => (
                <Link href={item.link} key={index}>
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    {item.title}
                  </li>
                </Link>
              ))}
            </ul>
            <div className="pt-10">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&#39;s Connect
              </p>
              <ContactIcons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

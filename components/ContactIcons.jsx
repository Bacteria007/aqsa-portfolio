import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { RiWhatsappLine } from 'react-icons/ri'

const ContactIcons = () => {
  const iconSize=20;
  return (
    <div className="flex items-center justify-between max-w-[250px] py-4 m-auto">
            <Link href="https://www.linkedin.com/in/aqsa-hamayun-44919b257/" target='_blank'>
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn size={iconSize} />
              </div>
            </Link>
            <Link href="https://github.com/Bacteria007" target="_blank" >
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub size={iconSize}/>
              </div>
            </Link>
            <Link href="https://wa.link/jvwto4" target="_blank" >
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                <RiWhatsappLine size={iconSize} />
              </div>
            </Link>
            {/* <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div> */}
          </div>
  )
}

export default ContactIcons
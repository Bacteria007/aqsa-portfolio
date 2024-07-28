import React, { useState } from "react";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/router";
import VideoModal from "../components/VideoModal";
import MyImages from "../components/MyImages";

const projects = {

  chatme: {
    img: MyImages.ChatmeImg,
    title: "Chatme",
    sub_title: "React Native / NodeJS / Socket.io",
    // app_link: "#",
    code_link: "https://github.com/Bacteria007/NewChatme",
    language: "Javascript",
    overview: "A comprehensive social chat app enabling users to connect communicate and share content.Features included user authentication, friend requests, multimedia messaging (text, image, audio, video), voice and video calls, pulbic video posting, liking video, group creation nd profile customization.User can change there username, phone number and password.An AI powered virtual friend bot is also available for user to chat with, providing a fun and engaging experience.Additionally, the offers a seamless user experience with dark and light theme opotioins and supports both English and Urdu languages, catering to a diverse user base.AN intuitive admin panel allows administrators to monitor user actiivty,block or unblock users for rulle violation and receive support request from users. This app provides a robust platform for social interactiion community building and effective administration ",
    technologies: ["React Native", "NodeJS", "MongoDB", "ExpressJS","Jsonwebtoken","Socket.io", "ZegouCloud API", "Open ai API"],
    video: "/chatme.mp4"
  },

  task_manager: {
    img: MyImages.TaskImg,
    title: "Task Manager",
    sub_title: "Reactjs / Tailwind / Nodejs / MongoDB / Express",
    app_link:
      "task-manager-frontned-git-main-aqsas-projects-17ded035.vercel.app",
    code_link: "https://github.com/Bacteria007/task_manager",
    overview: "Developed a robust task amanger web application with role-based access control featuring three distint roles: User, Admin and Manager.Users can view task while admins have comprehensive CRUD (Create, Read, Update, Delete) capaablities to manage tasks. Manager can view and update tasks, ensuring effective collaboartion and delegation. Logged-in entites can access their profiles and logout securely. This application streamlines task management enhances productivity and facilitates team coordination.",
    technologies: ["React", "Tailwind", "Javascript", "MongoDB"],
  },
  weather_app: {
    img: MyImages.WeatherImg,
    title: "Weather App",
    sub_title: "Nextjs / Tailwind",
    app_link: "https://weather-app-aqsas-projects-17ded035.vercel.app/",
    code_link: "https://github.com/Bacteria007/weather_app",
    overview: "A simple and user-friedly application taht allows users to easily access current weather conditions by simply entering their city name. The app provides accurate and up-to-date weather information, including temperature humidity and air condition. With this simple interface user can quickly get the weather details they need. Stay informed and plan ahead with convinient weather app.",
    technologies: ["React", "Tailwind", "Javascript", "Open Weather API"],
  },
  townlift: {
    img: MyImages.TownliftImg,
    title: "Townlift",
    sub_title: "React Native / Nodejs / Socket.io",
    // app_link: "#",
    code_link: "https://github.com/Bacteria007/TownliftApp",
    overview: `Townlift is a comprehensive online platform revolutionizing local commerce and Grocery shopping. There are three application for this project a user application a rider application and a shop admin panel. Users can login to the app and discover the nearby shops within his location range. With a simple messaging system,user can place orders for groceries and essentials of daily life.
    Admins manage their business through the admin panel. Admins can add riders for online delivery and add shop details. Admins can craete orders and send its details to user in chat.
    Admin can assign orders to riders, who can access the assigned orders through a separate rider application.
    Riders can View orders and Navigate to order's destination location.
    The app shows map to the users and users an see there on going orders and the riders location who is assigned to his order
    This app provides very simple interface where user place there orders and see its on going progress untill reached to his door`,

    technologies: ["React Native", "NodeJS", "MongoDB", "ExpressJS", "Location API", "Google map API","Jsonwebtoken","SOcket.io"],
    video: "/Townlift.mp4"
  },
};


const Property = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const router = useRouter();
  const { id } = router.query;
  const projectDetails = projects[id];

  if (!projectDetails) return <div>Loading...</div>;

  const handleDemo = () => {
    if (projectDetails.video) {
      setVideoTitle(projectDetails.title);
      setVideoSrc(projectDetails.video);
      setModalIsOpen(true);
    } else {
      window.open(projectDetails.app_link, '_blank');
    }
  };

  return (
    <div className="w-full">
      <div className="w-full h-[50vh] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={projectDetails.img}
          alt={projectDetails.title}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">{projectDetails.title}</h2>
          <h3>{projectDetails.sub_title}</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="text-justify">{projectDetails.overview}</p>
          <a href={projectDetails.code_link} target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4 mr-8 custom-button">Code</button>
          </a>
          <button onClick={handleDemo} className="px-8 py-2 mt-4 custom-button">Demo</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-lg shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              {projectDetails.technologies.map((item) => (
                <>
                  <p className="text-gray-600 py-2 flex items-center" key={item}>
                    <RiRadioButtonFill className="pr-1" /> {item}
                  </p>

                </>
              ))}
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
      <VideoModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        videoSrc={videoSrc}
        title={videoTitle}
      />
    </div>
  );
};

export default Property;

import Image from "next/image";
import Link from "next/link";
import MyImages from "./MyImages";

const Projects = () => {
  const projects = [
    {
      id: 'chatme',
      img: MyImages.ChatmeImg,
      title: "Chatme",
      language: "React Native",
    },
    {
      id: 'task_manager',
      img: MyImages.TaskImg,
      title: "Task Manager",
      language: "React JS",
    },
    {
      id: 'weather_app',
      img: MyImages.WeatherImg,
      title: "Weather App",
      language: "React JS",
    },
    {
      id: 'townlift',
      img: MyImages.TownliftImg,
      title: "Townlift",
      language: "React Native",
    },
    {
      id: 'Shafer Tracker',
      img: MyImages.TownliftImg,
      title: "Townlift",
      language: "React Native",
    },
  ];

  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&#39;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((item, index) => (
            <div
              key={index}
              className="relative h-auto flex items-center justify-center w-full shadow-lg shadow-gray-400 rounded-xl p-4 group overflow-hidden"
            >
              <Image
                className="rounded-xl h-full"
                src={item.img}
                alt={item.title}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#5651e5] to-[#709dff] transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-95"></div>
              <div className="hidden group-hover:flex flex-col items-center justify-center absolute inset-0">
                <h3 className="text-2xl text-white tracking-wider text-center">
                  {item.title}
                </h3>
                <p className="pb-4 pt-2 text-white text-center">
                  {item.language}
                </p>
                <Link
                  href={{
                    pathname: "/project_details",
                    query: { id: item.id },
                  }}
                >
                  <p className="text-center py-3 px-5 rounded-lg bg-white text-gray-700 text-lg cursor-pointer">
                    More Info
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

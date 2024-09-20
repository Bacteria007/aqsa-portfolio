import MyImages from "./MyImages";
import MarqueeRow from "./MarqueeRow";

const Skills = () => {
  const skills = [
    { img: MyImages.HTML, name: "HTML" },
    { img: MyImages.CSS, name: "CSS" },
    { img: MyImages.Javascript, name: "Javascript" },
    { img: MyImages.Tailwind, name: "Tailwind CSS" },
  ];

  const row2 = [
    { img: MyImages.Reactjs, name: "Reactjs" },
    // { img: MyImages.Nextjs, name: "NextJS" },
    { img: MyImages.MongoDB, name: "MongoDB" },
    { img: MyImages.Nodejs, name: "Nodejs" },
    { img: MyImages.Express, name: "Express" },
    { img: MyImages.Reactjs, name: "React Native" },
    { img: MyImages.Firebase, name: "Firebase" },


  ];
  const row3 = [
    { img: MyImages.PostgreSql, name: "PostgreSql" },
    { img: MyImages.Redux, name: "Redux" },
    // { img: MyImages.Git, name: "Git" },
    { img: MyImages.Github, name: "Github" },
    { img: MyImages.MySql, name: "MySQL" },
    // { img: MyImages.Socketio, name: "Socket.io" },
    { img: MyImages.Android, name: "Android Studio" },

  ];

  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="mx-auto flex flex-col justify-center h-full">
        <p className="lg:ml-10 uppercase text-xl tracking-widest text-[#5651e5]">
          Skills
        </p>
        <h2 className="lg:ml-10 py-4">What I can do</h2>
        <MarqueeRow direction="left" data={skills} />
        <MarqueeRow direction="right" data={row2} />
        <MarqueeRow direction="left" data={row3} />
      </div>
    </div>
  );
};

export default Skills;

{
  /* <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
  {skills.map((item, index) => (
    <div className="p-6 shadow-lg rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image src={item.img} alt="/" />
        </div>
        <div>
          <h3 className="flex flex-col items-center justify-center">
            {item.name}
          </h3>
        </div>
      </div>
    </div>
  ))}
</div> */
}

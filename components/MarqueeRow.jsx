import Image from "next/image";
import Marquee from "react-fast-marquee";

const MarqueeRow = ({ direction, data }) => {
    // Duplicate the data array to ensure seamless scrolling
  const duplicatedData = [...data, ...data];

  return (
    <Marquee
    autoFill={true}
      direction={direction}
      className="overflow-hidden whitespace-nowrap mb-10"
      speed={100} 
      style={{
        height: "100px",
      }}
    >
      <div className="flex">
        {duplicatedData.map((item, index) => (
          <div
            key={index}
            className="p-6 h-20 w-52 shadow-md mx-8 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={item.img} alt={item.name} width={40} height={40} />
              </div>
              <div>
                <h3 className="flex flex-col items-center justify-center text-center">
                  {item.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Marquee>
  );
};

export default MarqueeRow;

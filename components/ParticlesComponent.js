"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#ecf0f3",
        },
      },
      fullScreen: {
        enable: false,
        zIndex: 0,
      },
      fpsLimit: 100,
      interactivity: {
        detect_on: "canvas",
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            particles_nb: 4,
          },
          repulse: {
            distance: 200,
          },
        },
      },
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#100bec",
        },
        shape: {
          type: "circle",
          
          polygon: {
            nb_sides: 5,
          },
          
        },
        opacity: {
          value: 0.5,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 5,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        links: {
          enable: true,
          distance: 150,
          color: "#000",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      retina_detect: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles particlesLoaded={particlesLoaded} options={options} />
    );
  }

  return <></>;
};

export default ParticlesComponent;
//   const options = useMemo(
//     () => ({
//       background: {
//         color: {
//           value: "#ecf0f3",
//         },
        
//       },
//       // height:'100%',
//       fullScreen:{
//         enable:false,
//         zIndex:0
//       },
//       fpsLimit: 100,
//       interactivity: {
//         events: {
//           onClick: {
//             enable: true,
//             mode: "push",
//           },
//           onHover: {
//             enable: true,
//             mode: "repulse",
//           },
//         },
//         modes: {
//           push: {
//             quantity: 4,
//           },
//           grab: {
//             distance: 150,
//           },
//         },
//       },
//       particles: {
//         color: {
//           value: "#100bec",
//         },
//         links: {
//           color: "#000",
//           distance: 150,
//           enable: true,
//           opacity: 0.5,
//           width: 1,
//         },
//         move: {
//           direction: "none",
//           enable: true,
//           outModes: {
//             default: "bounce",
//           },
//           random: false,
//           speed: 1,
//           straight: false,
//         },
//         number: {
//           density: {
//             enable: true,
//           },
//           value: 40,
//         },
//         opacity: {
//           value: 0.5,
//         },
//         shape: {
//           type: "circle",
//         },
//         size: {
//           value: { min: 1, max: 5 },
//         },
//       },
//       detectRetina: true,
//     }),
//     [],
//   );

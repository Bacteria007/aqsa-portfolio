import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import AnimatedCursor from 'react-animated-cursor';
import { Analytics } from "@vercel/analytics/react"

function MyApp({ Component, pageProps }) {
  const circlesRef = useRef([]);

  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = circlesRef.current;

    const colors = [
      "#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e", "#ec805d", "#e36e5c",
      "#df685c", "#d5585c", "#d1525c", "#c5415d", "#c03b5d", "#b22c5e", "#ac265e",
      "#9c155f", "#950f5f", "#830060", "#7c0060", "#680060", "#60005f", "#48005f",
      "#3d005e"
    ];

    circles.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      // circle.style.backgroundColor = colors[index % colors.length];
    });

    const handleMouseMove = (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animateCircles = () => {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;
        circle.style.scale = (circles.length - index) / circles.length;
        // circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
    <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='86, 81, 229'
      // color='0, 0, 0'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
      <div className="circles-container">
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className="circle" ref={(el) => (circlesRef.current[index] = el)}></div>
        ))}
      </div>
      <Analytics/>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

// import { useEffect, useRef } from 'react';
// import Navbar from '../components/Navbar';
// import '../styles/globals.css';

// function MyApp({ Component, pageProps }) {
//   const circlesRef = useRef([]);

//   useEffect(() => {
//     const coords = { x: 0, y: 0 };
//     const circles = circlesRef.current;

//     const colors = [
//       "#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e", "#ec805d", "#e36e5c",
//       "#df685c", "#d5585c", "#d1525c", "#c5415d", "#c03b5d", "#b22c5e", "#ac265e",
//       "#9c155f", "#950f5f", "#830060", "#7c0060", "#680060", "#60005f", "#48005f",
//       "#3d005e"
//     ];

//     circles.forEach((circle, index) => {
//       circle.x = 0;
//       circle.y = 0;
//       circle.style.backgroundColor = colors[index % colors.length];
//     });

//     const handleMouseMove = (e) => {
//       coords.x = e.clientX;
//       coords.y = e.clientY;
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     const animateCircles = () => {
//       let x = coords.x;
//       let y = coords.y;

//       circles.forEach((circle, index) => {
//         circle.style.left = `${x - 12}px`;
//         circle.style.top = `${y - 12}px`;
//         circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

//         circle.x = x;
//         circle.y = y;

//         const nextCircle = circles[index + 1] || circles[0];
//         x += (nextCircle.x - x) * 0.3;
//         y += (nextCircle.y - y) * 0.3;
//       });

//       requestAnimationFrame(animateCircles);
//     };

//     animateCircles();

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <>
//       <div className="circles-container">
//         {Array.from({ length: 20 }).map((_, index) => (
//           <div key={index} className="circle" ref={(el) => (circlesRef.current[index] = el)}></div>
//         ))}
//       </div>
//       <Navbar />
//       <Component {...pageProps} />
//     </>
//   );
// }

// export default MyApp;

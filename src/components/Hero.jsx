// // import { motion, useScroll, useTransform } from "framer-motion";
// // import Lenis from "lenis";
// // import { useEffect, useRef, useState } from "react";
// // import Hero1 from "./Hero1";

// // const images = [
// //   "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //   "https://images.unsplash.com/photo-1644647849955-a5eef18485f4?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //   "https://images.unsplash.com/photo-1711029033665-fa5613e226df?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //   "https://images.unsplash.com/photo-1724754413206-8592feff56dc?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //   "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //   "https://plus.unsplash.com/premium_photo-1688124010168-659d723bf6c1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //   "https://images.unsplash.com/photo-1534195003206-c8e1957f0d7c?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //   "https://images.unsplash.com/photo-1607347167442-6c6b6350c21b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //   "https://images.unsplash.com/photo-1583074961890-f8a441ad4baf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //   "https://plus.unsplash.com/premium_photo-1666353532730-4745e7a67065?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //   "https://images.unsplash.com/photo-1666542862201-0cfa27f923ea?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //   "https://images.unsplash.com/photo-1709730102303-2384ec2fa5c1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //   "https://images.unsplash.com/photo-1758552218995-2cc6b581d0ce?q=80&w=694&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // ];

// // const Hero = () => {
// //   const gallery = useRef(null);
// //   const [dimension, setDimension] = useState({ width: 0, height: 0 });

// //   const { scrollYProgress } = useScroll({
// //     target: gallery,
// //     offset: ["start end", "end start"],
// //   });

// //   const { height } = dimension;
// //   const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
// //   const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
// //   const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
// //   const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

// //   useEffect(() => {
// //     const lenis = new Lenis();

// //     const raf = (time) => {
// //       lenis.raf(time);
// //       requestAnimationFrame(raf);
// //     };

// //     const resize = () => {
// //       setDimension({ width: window.innerWidth, height: window.innerHeight });
// //     };

// //     window.addEventListener("resize", resize);
// //     requestAnimationFrame(raf);
// //     resize();

// //     return () => {
// //       window.removeEventListener("resize", resize);
// //     };
// //   }, []);

// //   return (
// //     <main className="w-full bg-[#eee] text-black">
// // <Hero1 />



// //       <div
// //         ref={gallery}
// //         className="relative box-border flex h-[175vh] gap-[2vw] overflow-hidden bg-[#F5FBF2] p-[2vw]"
// //       >
// //         <Column images={[images[0], images[1], images[2]]} y={y} />
// //         <Column images={[images[3], images[4], images[5]]} y={y2} />
// //         <Column images={[images[6], images[7], images[8]]} y={y3} />
// //         <Column images={[images[9], images[10], images[11]]} y={y4} />
// //       </div>

// //     </main>
// //   );
// // };

// // const Column = ({ images, y }) => {
// //   return (
// //     <motion.div
// //       className="relative -top-[45%] flex h-full w-1/4 min-w-[250px] flex-col gap-[2vw] first:top-[-45%] [&:nth-child(2)]:top-[-95%] [&:nth-child(3)]:top-[-45%] [&:nth-child(4)]:top-[-75%]"
// //       style={{ y }}
// //     >
// //       {images.map((src, i) => (
// //         <div key={i} className="relative h-full w-full overflow-hidden">
// //           <img
// //             src={src}
// //             alt="image"
// //             className="pointer-events-none object-cover"
// //           />
// //         </div>
// //       ))}
// //     </motion.div>
// //   );
// // };

// // export default Hero;


// import { motion, useScroll, useTransform } from "framer-motion";
// import Lenis from "lenis";
// import { useEffect, useRef, useState } from "react";
// import Hero1 from "./Hero1";

// const images = [
//   "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1644647849955-a5eef18485f4?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1711029033665-fa5613e226df?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1724754413206-8592feff56dc?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://plus.unsplash.com/premium_photo-1688124010168-659d723bf6c1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1534195003206-c8e1957f0d7c?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1607347167442-6c6b6350c21b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1583074961890-f8a441ad4baf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://plus.unsplash.com/premium_photo-1666353532730-4745e7a67065?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1666542862201-0cfa27f923ea?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1709730102303-2384ec2fa5c1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1758552218995-2cc6b581d0ce?q=80&w=694&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// ];

// const Hero = ({ collectionRef }) => {
//   const gallery = useRef(null);
//   const [dimension, setDimension] = useState({ width: 0, height: 0 });

//   const { scrollYProgress } = useScroll({
//     target: gallery,
//     offset: ["start end", "end start"],
//   });

//   const { height } = dimension;
//   const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
//   const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
//   const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
//   const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

//   useEffect(() => {
//     const lenis = new Lenis();

//     const raf = (time) => {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     };

//     const resize = () => {
//       setDimension({ width: window.innerWidth, height: window.innerHeight });
//     };

//     window.addEventListener("resize", resize);
//     requestAnimationFrame(raf);
//     resize();

//     return () => {
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   return (
//     <main className="w-full bg-[#eee] text-black">
//       <Hero1 collectionRef={collectionRef} />

//       <div
//         ref={gallery}
//         className="relative box-border flex h-[175vh] gap-[2vw] overflow-hidden bg-[#F5FBF2] p-[2vw]"
//       >
//         <Column images={[images[0], images[1], images[2]]} y={y} />
//         <Column images={[images[3], images[4], images[5]]} y={y2} />
//         <Column images={[images[6], images[7], images[8]]} y={y3} />
//         <Column images={[images[9], images[10], images[11]]} y={y4} />
//       </div>

//     </main>
//   );
// };

// const Column = ({ images, y }) => {
//   return (
//     <motion.div
//       className="relative -top-[45%] flex h-full w-1/4 min-w-[250px] flex-col gap-[2vw] first:top-[-45%] [&:nth-child(2)]:top-[-95%] [&:nth-child(3)]:top-[-45%] [&:nth-child(4)]:top-[-75%]"
//       style={{ y }}
//     >
//       {images.map((src, i) => (
//         <div key={i} className="relative h-full w-full overflow-hidden">
//           <img
//             src={src}
//             alt="image"
//             className="pointer-events-none object-cover"
//           />
//         </div>
//       ))}
//     </motion.div>
//   );
// };

// export default Hero;

import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";
import Hero1 from "./Hero1";

const images = [
  "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1644647849955-a5eef18485f4?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1711029033665-fa5613e226df?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1724754413206-8592feff56dc?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1688124010168-659d723bf6c1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1534195003206-c8e1957f0d7c?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1607347167442-6c6b6350c21b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583074961890-f8a441ad4baf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1666353532730-4745e7a67065?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1666542862201-0cfa27f923ea?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1709730102303-2384ec2fa5c1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1758552218995-2cc6b581d0ce?q=80&w=694&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Hero = ({ collectionRef }) => {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [columnCount, setColumnCount] = useState(4);
  const [heightMultiplier, setHeightMultiplier] = useState("175vh");

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height, width } = dimension;
  
  // Responsive scroll transforms
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      setDimension({ width: newWidth, height: newHeight });

      // Set columns based on screen size
      if (newWidth < 640) {
        setColumnCount(1);
        setHeightMultiplier("250vh");
      } else if (newWidth < 1024) {
        setColumnCount(2);
        setHeightMultiplier("210vh");
      } else {
        setColumnCount(4);
        setHeightMultiplier("175vh");
      }
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Organize images for responsive columns
  const getColumnImages = (columnIndex) => {
    if (columnCount === 1) {
      // Mobile: all images in one column
      return [images[columnIndex % images.length]];
    } else if (columnCount === 2) {
      // Tablet: 2 columns with 6-7 images each
      const imagesPerCol = Math.ceil(images.length / 2);
      return images.slice(columnIndex * imagesPerCol, (columnIndex + 1) * imagesPerCol);
    } else {
      // Desktop: 4 columns with 3 images each
      return [images[columnIndex * 3], images[columnIndex * 3 + 1], images[columnIndex * 3 + 2]];
    }
  };

  return (
    <main className="w-full bg-[#eee] text-black">
      <Hero1 collectionRef={collectionRef} />

      <div
        ref={gallery}
        className={`relative box-border flex ${columnCount === 1 ? 'flex-col' : 'flex-row'} h-[${heightMultiplier}] gap-[2vw] overflow-hidden bg-[#F5FBF2] p-[2vw] sm:p-[3vw] md:p-[2vw]`}
        style={{ height: heightMultiplier }}
      >
        {columnCount === 1 && (
          <Column 
            images={images} 
            y={y} 
            columnCount={columnCount}
          />
        )}
        {columnCount === 2 && (
          <>
            <Column 
              images={getColumnImages(0)} 
              y={y} 
              columnCount={columnCount}
            />
            <Column 
              images={getColumnImages(1)} 
              y={y2} 
              columnCount={columnCount}
            />
          </>
        )}
        {columnCount === 4 && (
          <>
            <Column 
              images={[images[0], images[1], images[2]]} 
              y={y} 
              columnCount={columnCount}
            />
            <Column 
              images={[images[3], images[4], images[5]]} 
              y={y2} 
              columnCount={columnCount}
            />
            <Column 
              images={[images[6], images[7], images[8]]} 
              y={y3} 
              columnCount={columnCount}
            />
            <Column 
              images={[images[9], images[10], images[11]]} 
              y={y4} 
              columnCount={columnCount}
            />
          </>
        )}
      </div>

    </main>
  );
};

const Column = ({ images, y, columnCount }) => {
  const getColumnWidth = () => {
    if (columnCount === 1) return "w-full";
    if (columnCount === 2) return "w-1/2";
    return "w-1/4";
  };

  const getMinWidth = () => {
    if (columnCount === 1) return "min-w-full";
    if (columnCount === 2) return "min-w-[150px] sm:min-w-[200px]";
    return "min-w-[150px] sm:min-w-[200px] md:min-w-[250px]";
  };

  const getGap = () => {
    if (columnCount === 1) return "gap-[3vw] sm:gap-[2vw]";
    if (columnCount === 2) return "gap-[2.5vw] sm:gap-[2vw]";
    return "gap-[2vw]";
  };

  return (
    <motion.div
      className={`relative -top-[45%] flex h-full ${getColumnWidth()} ${getMinWidth()} flex-col ${getGap()} first:top-[-45%] [&:nth-child(2)]:top-[-95%] [&:nth-child(3)]:top-[-45%] [&:nth-child(4)]:top-[-75%]`}
      style={{ y }}
    >
      {images.map((src, i) => (
        <div key={i} className="relative h-full w-full overflow-hidden rounded-lg sm:rounded-xl">
          <img
            src={src}
            alt="gallery image"
            className="pointer-events-none h-full w-full object-cover"
          />
        </div>
      ))}
    </motion.div>
  );
};

export default Hero;
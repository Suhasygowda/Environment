// import { motion, useScroll, useTransform } from "framer-motion";
// import ReactLenis from "lenis/react";
// import React, { useRef } from "react";

// const CharacterV1 = ({ char, index, centerIndex, scrollYProgress }) => {
//   const isSpace = char === " ";
//   const distanceFromCenter = index - centerIndex;

//   const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0]);
//   const rotateX = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0]);

//   return (
//     <motion.span
//       className={`inline-block text-[#2F5D50] ${isSpace ? "w-4" : ""}`}
//       style={{ x, rotateX }}
//     >
//       {char}
//     </motion.span>
//   );
// };

// const CharacterV2 = ({ char, index, centerIndex, scrollYProgress }) => {
//   const distanceFromCenter = index - centerIndex;

//   const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0]);
//   const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);
//   const y = useTransform(scrollYProgress, [0, 0.5], [Math.abs(distanceFromCenter) * 50, 0]);

//   return (
//     <motion.img
//       src={char}
//       className="inline-block w-14"
//       style={{ x, scale, y, transformOrigin: "center" }}
//     />
//   );
// };

// const CharacterV3 = ({ char, index, centerIndex, scrollYProgress }) => {
//   const distanceFromCenter = index - centerIndex;

//   const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 90, 0]);
//   const rotate = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0]);
//   const y = useTransform(scrollYProgress, [0, 0.5], [-Math.abs(distanceFromCenter) * 20, 0]);
//   const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);

//   return (
//     <motion.img
//       src={char}
//       className="inline-block w-14"
//       style={{ x, rotate, y, scale, transformOrigin: "center" }}
//     />
//   );
// };

// const Cards1 = () => {
//   const targetRef = useRef(null);
//   const targetRef2 = useRef(null);
//   const targetRef3 = useRef(null);

//   const { scrollYProgress } = useScroll({ target: targetRef });
//   const { scrollYProgress: scrollYProgress2 } = useScroll({ target: targetRef2 });
//   const { scrollYProgress: scrollYProgress3 } = useScroll({ target: targetRef3 });

//   const text = "explore the life of trees";
//   const characters = text.split("");
//   const centerIndex = Math.floor(characters.length / 2);

//   const treeIcons = [
//     "https://img.icons8.com/fluency/96/tree.png",
//     "https://img.icons8.com/fluency/96/forest.png",
//     "https://img.icons8.com/fluency/96/leaf.png",
//     "https://img.icons8.com/fluency/96/eco.png",
//     "https://img.icons8.com/fluency/96/deciduous-tree.png",
//   ];

//   const iconCenterIndex = Math.floor(treeIcons.length / 2);

//   return (
//     <ReactLenis root>
//       <main className="w-full bg-[#F5FBF2]">

//         {/* SECTION 1 */}
//         <div
//           ref={targetRef}
//           className="relative flex h-[210vh] items-center justify-center bg-[#F5FBF2]"
//         >
//           <div
//             className="text-center text-6xl font-bold uppercase tracking-tight"
//             style={{ perspective: "500px" }}
//           >
//             {characters.map((char, index) => (
//               <CharacterV1
//                 key={index}
//                 char={char}
//                 index={index}
//                 centerIndex={centerIndex}
//                 scrollYProgress={scrollYProgress}
//               />
//             ))}
//           </div>
//         </div>

//         {/* SECTION 2 */}
//         <div
//           ref={targetRef2}
//           className="relative -mt-[100vh] flex h-[210vh] flex-col items-center justify-center bg-[#F5FBF2]"
//         >
//           <p className="text-2xl font-medium text-[#355D43] mb-8">
//             celebrating our green heritage
//           </p>

//           <div className="text-center text-6xl font-bold uppercase">
//             {treeIcons.map((icon, index) => (
//               <CharacterV2
//                 key={index}
//                 char={icon}
//                 index={index}
//                 centerIndex={iconCenterIndex}
//                 scrollYProgress={scrollYProgress2}
//               />
//             ))}
//           </div>
//         </div>

//         {/* SECTION 3 */}
//         <div
//           ref={targetRef3}
//           className="relative -mt-[95vh] flex h-[210vh] flex-col items-center justify-center bg-[#F5FBF2]"
//         >
//           <p className="text-2xl font-medium text-[#355D43] mb-8">
//             where nature meets knowledge
//           </p>

//           <div
//             className="text-center text-6xl font-bold uppercase"
//             style={{ perspective: "500px" }}
//           >
//             {treeIcons.map((icon, index) => (
//               <CharacterV3
//                 key={index}
//                 char={icon}
//                 index={index}
//                 centerIndex={iconCenterIndex}
//                 scrollYProgress={scrollYProgress3}
//               />
//             ))}
//           </div>
//         </div>

//       </main>
//     </ReactLenis>
//   );
// };

// export {Cards1};


import { motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";
import React, { useRef } from "react";

// IMPORT YOUR EXISTING CAROUSEL
import {Cards }from "./Cards";

const CharacterV1 = ({ char, index, centerIndex, scrollYProgress }) => {
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0]);

  return (
    <motion.span
      className="inline-block text-[#2F5D50]"
      style={{ x, rotateX }}
    >
      {char}
    </motion.span>
  );
};

const CharacterV2 = ({ char, index, centerIndex, scrollYProgress }) => {
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [Math.abs(distanceFromCenter) * 50, 0]);

  return (
    <motion.img
      src={char}
      className="inline-block w-14"
      style={{ x, scale, y }}
    />
  );
};

const CharacterV3 = ({ char, index, centerIndex, scrollYProgress }) => {
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 90, 0]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [-Math.abs(distanceFromCenter) * 20, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);

  return (
    <motion.img
      src={char}
      className="inline-block w-14"
      style={{ x, rotate, y, scale }}
    />
  );
};

const Cards1 = () => {
  const targetRef = useRef(null);
  const targetRef2 = useRef(null);
  const targetRef3 = useRef(null);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const { scrollYProgress: scrollYProgress2 } = useScroll({ target: targetRef2 });
  const { scrollYProgress: scrollYProgress3 } = useScroll({ target: targetRef3 });

  const text = "explore the life of trees";
  const characters = text.split("");
  const centerIndex = Math.floor(characters.length / 2);

  const treeIcons = [
    "https://img.icons8.com/fluency/96/tree.png",
    "https://img.icons8.com/fluency/96/forest.png",
    "https://img.icons8.com/fluency/96/leaf.png",
    "https://img.icons8.com/fluency/96/eco.png",
    "https://img.icons8.com/fluency/96/deciduous-tree.png",
  ];

  const iconCenterIndex = Math.floor(treeIcons.length / 2);

  return (
    <ReactLenis root>
      <main className="w-full bg-[#F5FBF2]">

        {/* SECTION 1 - TEXT ANIMATION */}
        <div
          ref={targetRef}
          className="relative flex h-[210vh] items-center justify-center"
        >
          <div
            className="text-center text-6xl font-bold uppercase"
            style={{ perspective: "500px" }}
          >
            {characters.map((char, index) => (
              <CharacterV1
                key={index}
                char={char}
                index={index}
                centerIndex={centerIndex}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>

        {/* SECTION 2 - REPLACED WITH YOUR CARDS CAROUSEL */}
        <div
          ref={targetRef2}
          className="relative -mt-[100vh] flex h-[210vh] flex-col items-center justify-center"
        >
          <div className="w-full max-w-6xl">
            <Cards />
          </div>
        </div>

        {/* SECTION 3 - ICON ANIMATION */}
        <div
          ref={targetRef3}
          className="relative -mt-[95vh] flex h-[210vh] flex-col items-center justify-center"
        >
          <p className="text-2xl font-medium text-[#355D43] mb-10">
            where nature meets knowledge
          </p>

          <div className="text-center text-6xl font-bold uppercase">
            {treeIcons.map((icon, index) => (
              <CharacterV3
                key={index}
                char={icon}
                index={index}
                centerIndex={iconCenterIndex}
                scrollYProgress={scrollYProgress3}
              />
            ))}
          </div>
        </div>

        {/* ✅ EXTRA CLEAN CAROUSEL SECTION */}
        <section className="py-24 bg-[#F5FBF2] flex justify-center">
          <div className="w-full max-w-6xl">
            <h2 className="text-center text-3xl font-bold text-[#0B2418] mb-10">
              Discover More Green Wonders
            </h2>
            <Cards />
          </div>
        </section>

      </main>
    </ReactLenis>
  );
};

export {Cards1};

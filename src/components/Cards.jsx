// // // import {
// // //   motion,
// // //   useInView,
// // //   useMotionValue,
// // //   useScroll,
// // //   useTransform,
// // // } from "framer-motion";
// // // import ReactLenis from "lenis/react";
// // // import { useEffect, useRef, useState } from "react";

// // // // UNSPLASH IMAGES (clean nature aesthetic)
// // // const images = [
// // //   "https://images.unsplash.com/photo-1534195003206-c8e1957f0d7c?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // //   "https://images.unsplash.com/photo-1607347167442-6c6b6350c21b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // //   "https://images.unsplash.com/photo-1583074961890-f8a441ad4baf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // //   "https://plus.unsplash.com/premium_photo-1666353532730-4745e7a67065?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // //   "https://images.unsplash.com/photo-1666542862201-0cfa27f923ea?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // //   "https://images.unsplash.com/photo-1709730102303-2384ec2fa5c1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // //   "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
// // // ];

// // // // ✨ Unique short sentences for each card
// // // const captions = [
// // //   "Where the light meets the leaves.",
// // //   "A peaceful moment crafted by nature.",
// // //   "Silence speaks louder in the forest.",
// // //   "Every tree hides a thousand stories.",
// // //   "Nature paints better than humans ever will.",
// // //   "Stillness, beauty, and pure green calm.",
// // //   "A reminder that Earth is alive and breathing.",
// // // ];

// // // const Cards = () => {
// // //   return (
// // //     <ReactLenis root>
// // //       <section className="relative flex w-screen flex-col items-center gap-[10vh] px-4 pt-[10vh] pb-[10vh]">

// // //         {/* CLEAN HEADING */}
// // //        <h1 className="text-4xl md:text-6xl font-bold text-[#0B2418] text-center mb-12 drop-shadow-[0_4px_10px_rgba(0,0,0,0.12)]">
// // //   Nature’s Visual{" "}
// // //   <span className="text-[#86CA6B] drop-shadow-[0_4px_12px_rgba(134,202,107,0.35)]">
// // //     Story
// // //   </span>
// // // </h1>



// // //         {images.map((img, idx) => (
// // //           <StickyCard 
// // //             key={idx} 
// // //             imgUrl={img} 
// // //             caption={captions[idx]} 
// // //           />
// // //         ))}

// // //       </section>
// // //     </ReactLenis>
// // //   );
// // // };

// // // const StickyCard = ({ imgUrl, caption }) => {
// // //   const vertMargin = 10;
// // //   const container = useRef(null);
// // //   const [maxScrollY, setMaxScrollY] = useState(Infinity);

// // //   const filter = useMotionValue(0);
// // //   const negateFilter = useTransform(filter, (v) => -v);

// // //   const { scrollY } = useScroll({ target: container });

// // //   const scale = useTransform(scrollY, [maxScrollY, maxScrollY + 10000], [1, 0]);

// // //   const isInView = useInView(container, {
// // //     margin: `0px 0px -${100 - vertMargin}% 0px`,
// // //     once: true,
// // //   });

// // //   scrollY.on("change", (y) => {
// // //     let value = 1;
// // //     if (y > maxScrollY) {
// // //       value = Math.max(0, 1 - (y - maxScrollY) / 10000);
// // //     }

// // //     scale.set(value);
// // //     filter.set((1 - value) * 100);
// // //   });

// // //   useEffect(() => {
// // //     if (isInView) {
// // //       setMaxScrollY(scrollY.get());
// // //     }
// // //   }, [isInView]);

// // //   return (
// // //     <motion.div
// // //       ref={container}
// // //       className="rounded-4xl sticky h-[200px] w-full max-w-4xl overflow-hidden bg-neutral-200"
// // //       style={{
// // //         scale: scale,
// // //         rotate: filter,
// // //         height: `${100 - 2 * vertMargin}vh`,
// // //         top: `${vertMargin}vh`,
// // //       }}
// // //     >
// // //       {/* IMAGE */}
// // //       <motion.img
// // //         src={imgUrl}
// // //         alt={imgUrl}
// // //         style={{ rotate: negateFilter }}
// // //         className="h-full w-full scale-125 object-cover"
// // //         sizes="90vw"
// // //       />

// // //       {/* ✨ TEXT OVERLAY (Clean + Minimal + Proper Contrast) */}
// // //       <div className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm md:text-base max-w-[80%] shadow-lg">
// // //         {caption}
// // //       </div>
// // //     </motion.div>
// // //   );
// // // };

// // // export { Cards };


// // import { motion } from "framer-motion";
// // import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
// // import React from "react";
// // import { Autoplay, EffectCreative, Pagination } from "swiper/modules";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import "swiper/css";
// // import "swiper/css/effect-creative";
// // import "swiper/css/pagination";
// // import "swiper/css/autoplay";

// // // UNSPLASH IMAGES (clean nature aesthetic)
// // const images = [
// //   {
// //     src: "https://images.unsplash.com/photo-1534195003206-c8e1957f0d7c?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //     alt: "Nature image 1",
// //   },
// //   {
// //     src: "https://images.unsplash.com/photo-1607347167442-6c6b6350c21b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //     alt: "Nature image 2",
// //   },
// //   {
// //     src: "https://images.unsplash.com/photo-1583074961890-f8a441ad4baf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //     alt: "Nature image 3",
// //   },
// //   {
// //     src: "https://plus.unsplash.com/premium_photo-1666353532730-4745e7a67065?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //     alt: "Nature image 4",
// //   },
// //   {
// //     src: "https://images.unsplash.com/photo-1666542862201-0cfa27f923ea?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //     alt: "Nature image 5",
// //   },
// //   {
// //     src: "https://images.unsplash.com/photo-1709730102303-2384ec2fa5c1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //     alt: "Nature image 6",
// //   },
// //   {
// //     src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
// //     alt: "Nature image 7",
// //   },
// // ];

// // const Cards = () => {
// //   return (
// //     <section className="w-full py-16 bg-[#F5FBF2]">
      
// //       {/* CLEAN HEADING */}
// //       <h2 className="text-center text-4xl md:text-5xl font-bold text-[#0B2418] mb-10">
// //         Explore Nature Gallery
// //       </h2>

// //       <div className="flex h-full w-full items-center justify-center overflow-hidden">
// //         <Carousel_005 images={images} autoplay showPagination loop />
// //       </div>
// //     </section>
// //   );
// // };

// // const Carousel_005 = ({
// //   images,
// //   showPagination = false,
// //   showNavigation = false,
// //   loop = true,
// //   autoplay = false,
// //   spaceBetween = 0,
// // }) => {
// //   const css = `
// //   .Carousal_005 {
// //     width: 100%;
// //     height: 440px;
// //     padding-bottom: 50px !important;
// //   }

// //   .Carousal_005 .swiper-slide {
// //     background-position: center;
// //     background-size: cover;
// //     border-radius: 25px;
// //   }

// //   .Carousal_005 .swiper-pagination-bullet {
// //     background-color: #000 !important;
// //   }
// //   `;

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, translateY: 20 }}
// //       animate={{ opacity: 1, translateY: 0 }}
// //       transition={{ duration: 0.3, delay: 0.5 }}
// //       className="relative w-full max-w-4xl px-5"
// //     >
// //       <style>{css}</style>

// //       <motion.div
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ duration: 0.3 }}
// //         className="w-full"
// //       >
// //         <Swiper
// //           spaceBetween={spaceBetween}
// //           autoplay={
// //             autoplay
// //               ? {
// //                   delay: 1500,
// //                   disableOnInteraction: true,
// //                 }
// //               : false
// //           }
// //           effect="creative"
// //           grabCursor={true}
// //           slidesPerView="auto"
// //           centeredSlides={true}
// //           loop={loop}
// //           pagination={showPagination ? { clickable: true } : false}
// //           className="Carousal_005"
// //           creativeEffect={{
// //             prev: { shadow: true, translate: [0, 0, -400] },
// //             next: { translate: ["100%", 0, 0] },
// //           }}
// //           modules={[EffectCreative, Pagination, Autoplay]}
// //         >
// //           {images.map((image, index) => (
// //             <SwiperSlide key={index}>
// //               <img
// //                 className="h-full w-full scale-105 rounded-3xl object-cover"
// //                 src={image.src}
// //                 alt={image.alt}
// //               />
// //             </SwiperSlide>
// //           ))}
// //         </Swiper>
// //       </motion.div>
// //     </motion.div>
// //   );
// // };

// // export  {Cards};


// import { motion } from "framer-motion";
// import React from "react";
// import { Autoplay, EffectCreative, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-creative";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";

// // UNSPLASH IMAGES
// const images = [
//   {
//     src: "https://images.unsplash.com/photo-1534195003206-c8e1957f0d7c?q=80&w=688&auto=format&fit=crop",
//     alt: "Nature image 1",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1607347167442-6c6b6350c21b?q=80&w=687&auto=format&fit=crop",
//     alt: "Nature image 2",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1583074961890-f8a441ad4baf?q=80&w=1170&auto=format&fit=crop",
//     alt: "Nature image 3",
//   },
//   {
//     src: "https://plus.unsplash.com/premium_photo-1666353532730-4745e7a67065?q=80&w=687&auto=format&fit=crop",
//     alt: "Nature image 4",
//   },
// ];

// const Cards = () => {
//   return (
//     <section className="w-full bg-[#F5FBF2] py-20">
      
//       {/* CLEAN HEADING */}
//       <h2 className="text-center text-4xl md:text-5xl font-bold text-[#0B2418] mb-14">
//         Explore Nature’s <span className="text-[#86CA6B]">Beauty</span>
//       </h2>

//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

//         {/* LEFT - CAROUSEL */}
//         <div>
//           <Carousel_005 images={images} autoplay showPagination loop />
//         </div>

//         {/* RIGHT - TEXT CONTENT */}
//         <div className="space-y-6">
//           <h3 className="text-3xl font-semibold text-[#0B2418]">
//             A Living Gallery of Trees
//           </h3>

//           <p className="text-lg text-[#355D43] leading-relaxed">
//             Treepedia brings you closer to the world of trees through a visually immersive experience. 
//             Each image tells a story of strength, preservation, and natural harmony — from ancient forest 
//             canopies to rare botanical treasures.
//           </p>

//           <p className="text-lg text-[#4F7F65] leading-relaxed">
//             Discover how these trees support biodiversity, improve air quality, and contribute to 
//             sustainable ecosystems while learning their cultural and medicinal significance.
//           </p>

//           <div className="pt-4">
//             <span className="inline-block px-6 py-3 rounded-full bg-[#86CA6B] text-white font-semibold shadow-md">
//               Treepedia Visual Experience
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const Carousel_005 = ({
//   images,
//   showPagination = false,
//   loop = true,
//   autoplay = false,
// }) => {
//   const css = `
//   .Carousal_005 {
//     width: 100%;
//     height: 440px;
//     padding-bottom: 50px !important;
//   }
//   .Carousal_005 .swiper-slide {
//     background-position: center;
//     background-size: cover;
//     border-radius: 25px;
//   }
//   .Carousal_005 .swiper-pagination-bullet {
//     background-color: #86CA6B !important;
//   }
//   `;

//   return (
//     <motion.div
//       initial={{ opacity: 0, translateY: 20 }}
//       animate={{ opacity: 1, translateY: 0 }}
//       transition={{ duration: 0.4 }}
//       className="relative w-full"
//     >
//       <style>{css}</style>

//       <Swiper
//         autoplay={autoplay ? { delay: 2000 } : false}
//         effect="creative"
//         grabCursor={true}
//         centeredSlides={true}
//         loop={loop}
//         pagination={showPagination ? { clickable: true } : false}
//         className="Carousal_005"
//         creativeEffect={{
//           prev: { shadow: true, translate: [0, 0, -400] },
//           next: { translate: ["100%", 0, 0] },
//         }}
//         modules={[EffectCreative, Pagination, Autoplay]}
//       >
//         {images.map((image, index) => (
//           <SwiperSlide key={index}>
//             <img
//               className="h-full w-full scale-105 rounded-3xl object-cover"
//               src={image.src}
//               alt={image.alt}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </motion.div>
//   );
// };

// export  {Cards};

import { motion } from "framer-motion";
import React from "react";
import { Autoplay, EffectCreative, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// UPDATED UNSPLASH IMAGES (more added)
const images = [
  {
    src: "https://images.unsplash.com/photo-1534195003206-c8e1957f0d7c?q=80&w=688&auto=format&fit=crop",
    alt: "Nature image 1",
  },
  {
    src: "https://images.unsplash.com/photo-1607347167442-6c6b6350c21b?q=80&w=687&auto=format&fit=crop",
    alt: "Nature image 2",
  },
  {
    src: "https://images.unsplash.com/photo-1583074961890-f8a441ad4baf?q=80&w=1170&auto=format&fit=crop",
    alt: "Nature image 3",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1666353532730-4745e7a67065?q=80&w=687&auto=format&fit=crop",
    alt: "Nature image 4",
  },
  {
    src: "https://images.unsplash.com/photo-1666542862201-0cfa27f923ea?q=80&w=735&auto=format&fit=crop",
    alt: "Nature image 5",
  },
  {
    src: "https://images.unsplash.com/photo-1709730102303-2384ec2fa5c1?q=80&w=735&auto=format&fit=crop",
    alt: "Nature image 6",
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    alt: "Nature image 7",
  },
];

const Cards = () => {
  return (
    <section className="w-full bg-[#F5FBF2] py-20">

      {/* CLEAN HEADING */}
      <h2 className="text-center text-4xl md:text-5xl font-bold text-[#0B2418] mb-14">
        Explore Nature’s <span className="text-[#86CA6B]">Beauty</span>
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT - CAROUSEL */}
        <div>
          <Carousel_005 images={images} autoplay showPagination loop />
        </div>

        {/* RIGHT - TEXT CONTENT */}
        <div className="space-y-6">
          <h3 className="text-3xl font-semibold text-[#0B2418]">
            A Living Gallery of Trees
          </h3>

          <p className="text-lg text-[#355D43] leading-relaxed">
            Treepedia brings you closer to the world of trees through a visually immersive experience. 
            Each image tells a story of strength, preservation, and natural harmony — from ancient forest 
            canopies to rare botanical treasures.
          </p>

          <p className="text-lg text-[#4F7F65] leading-relaxed">
            Discover how these trees support biodiversity, improve air quality, and contribute to 
            sustainable ecosystems while learning their cultural and medicinal significance.
          </p>
        </div>
      </div>
    </section>
  );
};

const Carousel_005 = ({
  images,
  showPagination = false,
  loop = true,
  autoplay = false,
}) => {
  const css = `
  .Carousal_005 {
    width: 100%;
    height: 440px;
    padding-bottom: 50px !important;
  }
  .Carousal_005 .swiper-slide {
    background-position: center;
    background-size: cover;
    border-radius: 25px;
  }
  .Carousal_005 .swiper-pagination-bullet {
    background-color: #86CA6B !important;
  }
  `;

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.4 }}
      className="relative w-full"
    >
      <style>{css}</style>

      <Swiper
        autoplay={autoplay ? { delay: 2000 } : false}
        effect="creative"
        grabCursor={true}
        centeredSlides={true}
        loop={loop}
        pagination={showPagination ? { clickable: true } : false}
        className="Carousal_005"
        creativeEffect={{
          prev: { shadow: true, translate: [0, 0, -400] },
          next: { translate: ["100%", 0, 0] },
        }}
        modules={[EffectCreative, Pagination, Autoplay]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              className="h-full w-full scale-105 rounded-3xl object-cover"
              src={image.src}
              alt={image.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export  {Cards};

// // // const Hero1 = () => {
// // //   return (
// // //     <div>
// // //       <section className="relative overflow-hidden h-screen flex items-center justify-center">
// // //         {/* Background Image with Overlay */}
// // //         <div 
// // //           className="absolute inset-0 z-0"
// // //           style={{
// // //             backgroundImage: `url('https://images.unsplash.com/photo-1680003625905-4f6ddea04926?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
// // //             backgroundSize: 'cover',
// // //             backgroundPosition: 'center',
// // //             backgroundAttachment: 'fixed'
// // //           }}
// // //         />
        
// // //         {/* Light Overlay */}
// // //         <div className="absolute inset-0 z-5 bg-gradient-to-b from-[#F5FBF2]/60 via-[#F5FBF2]/50 to-[#F5FBF2]/60" />

// // //         {/* Content */}
// // //         <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
// // //           {/* Animated Badge */}
// // //           <div className="mb-8 inline-block animate-fade-in">
// // //             <span className="px-4 py-2 bg-[#86CA6B]/20 border border-[#86CA6B]/50 rounded-full text-[#0B2418] text-sm font-semibold backdrop-blur-sm">
// // //               🌿 Discover Our Planet's Green Sanctuary
// // //             </span>
// // //           </div>

// // //           {/* Title */}
// // //           <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in drop-shadow-lg">
// // //             <span className="block text-[#0B2418] drop-shadow-md">Explore </span>
// // //             <span className="text-[#86CA6B] drop-shadow-md">
// // //               <span className="text-[#0B2418]">Nature's</span> Green Wealth
// // //             </span>
// // //           </h1>

// // //           {/* Subtitle */}
// // //           <p className="text-lg md:text-xl text-[#0B2418] font-semibold leading-relaxed max-w-3xl mx-auto mb-8 animate-fade-in-up-delay text-balance">
// // //             Embark on a journey through Earth's most magnificent forests. Discover the ancient wisdom of trees, their hidden powers, and their vital role in sustaining all life on our world.
// // //           </p>

// // //           {/* CTA Buttons */}
// // //           <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
// // //             <button className="px-8 py-4 bg-[#86CA6B] hover:bg-[#76B55B] text-black font-bold rounded-lg transition transform hover:scale-105 shadow-lg">
// // //               Start Exploring
// // //             </button>
// // //             <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-black font-bold rounded-lg border border-black/30 transition backdrop-blur-sm">
// // //               Learn More
// // //             </button>
// // //           </div>

      
// // //         </div>
// // //       </section>

// // //       <style jsx>{`
// // //         @keyframes fade-in {
// // //           from {
// // //             opacity: 0;
// // //           }
// // //           to {
// // //             opacity: 1;
// // //           }
// // //         }

// // //         @keyframes fade-in-up {
// // //           from {
// // //             opacity: 0;
// // //             transform: translateY(30px);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: translateY(0);
// // //           }
// // //         }

// // //         .animate-fade-in {
// // //           animation: fade-in 0.8s ease-out;
// // //         }

// // //         .animate-fade-in-up {
// // //           animation: fade-in-up 0.8s ease-out;
// // //         }

// // //         .animate-fade-in-up-delay {
// // //           animation: fade-in-up 0.8s ease-out 0.2s both;
// // //         }

// // //         .animate-fade-in-up-delay-2 {
// // //           animation: fade-in-up 0.8s ease-out 0.4s both;
// // //         }

// // //         .text-balance {
// // //           text-wrap: balance;
// // //         }
// // //       `}</style>
// // //     </div>
// // //   )
// // // }

// // // export default Hero1

// // import { motion } from "framer-motion";

// // const Hero1 = () => {
// //   return (
// //     <div>
// //       <section className="relative overflow-hidden h-screen flex items-center justify-center">

// //         {/* Background Image (Fades + Scales Slightly) */}
// //         <motion.div
// //           initial={{ opacity: 0, scale: 1.05 }}
// //           animate={{ opacity: 1, scale: 1 }}
// //           transition={{ duration: 1.5, ease: "easeOut" }}
// //           className="absolute inset-0 z-0"
// //           style={{
// //             backgroundImage: `url('https://images.unsplash.com/photo-1680003625905-4f6ddea04926?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
// //             backgroundSize: 'cover',
// //             backgroundPosition: 'center',
// //             backgroundAttachment: 'fixed'
// //           }}
// //         />

// //         {/* Light Overlay */}
// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 0.8 }}
// //           transition={{ duration: 1.2 }}
// //           className="absolute inset-0 z-5 bg-gradient-to-b from-[#F5FBF2]/60 via-[#F5FBF2]/50 to-[#F5FBF2]/60"
// //         />

// //         {/* Content Wrapper with Stagger */}
// //         <motion.div
// //           initial="hidden"
// //           animate="visible"
// //           variants={{
// //             hidden: {},
// //             visible: {
// //               transition: {
// //                 staggerChildren: 0.20,
// //               },
// //             },
// //           }}
// //           className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
// //         >

// //           {/* Animated Badge */}
// //           <motion.div
// //             variants={{
// //               hidden: { opacity: 0, y: 15 },
// //               visible: { opacity: 1, y: 0 },
// //             }}
// //             transition={{ duration: 0.7, ease: "easeOut" }}
// //             className="mb-8 inline-block"
// //           >
// //             <span className="px-4 py-2 bg-[#86CA6B]/20 border border-[#86CA6B]/50 rounded-full text-[#0B2418] text-sm font-semibold backdrop-blur-sm">
// //               🌿 Discover Our Planet's Green Sanctuary
// //             </span>
// //           </motion.div>

// //           {/* Title */}
// //           <motion.h1
// //             variants={{
// //               hidden: { opacity: 0, y: 20 },
// //               visible: { opacity: 1, y: 0 },
// //             }}
// //             transition={{ duration: 0.8, ease: "easeOut" }}
// //             className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg"
// //           >
// //             <span className="block text-[#0B2418] drop-shadow-md">Explore</span>
// //             <span className="text-[#86CA6B] drop-shadow-md">
// //               <span className="text-[#0B2418]"> Nature's </span> Green Wealth
// //             </span>
// //           </motion.h1>

// //           {/* Subtitle */}
// //           <motion.p
// //             variants={{
// //               hidden: { opacity: 0, y: 20 },
// //               visible: { opacity: 1, y: 0 },
// //             }}
// //             transition={{ duration: 0.8, ease: "easeOut" }}
// //             className="text-lg md:text-xl text-[#0B2418] font-semibold leading-relaxed max-w-3xl mx-auto mb-8 text-balance"
// //           >
// //             Embark on a journey through Earth's most magnificent forests.
// //             Discover the ancient wisdom of trees, their hidden powers,
// //             and their vital role in sustaining all life on our world.
// //           </motion.p>

// //           {/* CTA Buttons */}
// //           <motion.div
// //             variants={{
// //               hidden: { opacity: 0, y: 25 },
// //               visible: { opacity: 1, y: 0 },
// //             }}
// //             transition={{ duration: 0.9, ease: "easeOut" }}
// //             className="flex flex-col sm:flex-row gap-4 justify-center"
// //           >
// //             <button className="px-8 py-4 bg-[#86CA6B] hover:bg-[#76B55B] text-black font-bold rounded-lg transition transform hover:scale-105 shadow-lg">
// //               Start Exploring
// //             </button>
// //             <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-black font-bold rounded-lg border border-black/30 transition backdrop-blur-sm">
// //               Learn More
// //             </button>
// //           </motion.div>
// //         </motion.div>

// //       </section>
// //     </div>
// //   );
// // };

// // export default Hero1;




// import { motion } from "framer-motion";

// const Hero1 = () => {
//   return (
//     <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">

//       {/* Background (soft zoom + dark gradient for contrast) */}
//       <motion.div
//         initial={{ opacity: 0, scale: 1.1 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//         className="absolute inset-0"
//         style={{
//           backgroundImage: `url('https://images.unsplash.com/photo-1680003625905-4f6ddea04926?q=80&w=1170&auto=format&fit=crop')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       />

//       {/* Soft overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#0B2418]/70 via-[#0B2418]/50 to-[#F5FBF2]/70" />

//       {/* Content */}
//       <motion.div
//         initial="hidden"
//         animate="show"
//         variants={{
//           hidden: {},
//           show: {
//             transition: {
//               staggerChildren: 0.20,
//             },
//           },
//         }}
//         className="relative z-10 text-center px-6 max-w-4xl"
//       >

//         {/* Badge */}
//         <motion.div
//           variants={{
//             hidden: { opacity: 0, y: 15 },
//             show: { opacity: 1, y: 0 },
//           }}
//           className="inline-block mb-6"
//         >
//           <span className="px-4 py-2 bg-white/10 border border-white/20 text-white text-sm rounded-full backdrop-blur-md font-semibold tracking-wide">
//             🌿 Preserving Earth’s Green Heritage
//           </span>
//         </motion.div>

//         {/* Main Title */}
//         <motion.h1
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             show: { opacity: 1, y: 0 },
//           }}
//           className="font-['Playfair_Display'] text-white text-5xl md:text-7xl font-bold leading-tight drop-shadow-2xl"
//         >
//           Discover the Beauty of  
//           <span className="block mt-2 text-[#86CA6B]">
//             Nature & Life
//           </span>
//         </motion.h1>

//         {/* Subtitle */}
//         <motion.p
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             show: { opacity: 1, y: 0 },
//           }}
//           className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mt-6 font-light"
//         >
//           Explore the world of trees, their secrets, their strength, and their role 
//           in building a healthier planet for future generations.
//         </motion.p>

//         {/* Buttons */}
//         <motion.div
//           variants={{
//             hidden: { opacity: 0, y: 25 },
//             show: { opacity: 1, y: 0 },
//           }}
//           className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
//         >
//           <button className="px-8 py-4 bg-[#86CA6B] hover:bg-[#76B55B] text-[#0B2418] font-bold rounded-xl shadow-xl transition transform hover:scale-105">
//             Start Exploring
//           </button>

//           <button className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white border border-white/40 font-bold rounded-xl backdrop-blur-md shadow-xl transition">
//             Learn More
//           </button>
//         </motion.div>

//       </motion.div>
//     </section>
//   );
// };

// export default Hero1;


import { motion } from "framer-motion";

const Hero1 = ({ collectionRef }) => {
  const scrollToCollection = () => {
    if (collectionRef?.current) {
      collectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">

      {/* Background (soft zoom + dark gradient for contrast) */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1680003625905-4f6ddea04926?q=80&w=1170&auto=format&fit=crop')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Soft overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B2418]/70 via-[#0B2418]/50 to-[#F5FBF2]/70" />

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.20,
            },
          },
        }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >

        {/* Badge */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 15 },
            show: { opacity: 1, y: 0 },
          }}
          className="inline-block mb-6"
        >
          <span className="px-4 py-2 bg-white/10 border border-white/20 text-white text-sm rounded-full backdrop-blur-md font-semibold tracking-wide">
            🌿 Preserving Earth's Green Heritage
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          className="font-['Playfair_Display'] text-white text-5xl md:text-7xl font-bold leading-tight drop-shadow-2xl"
        >
          Discover the Beauty of  
          <span className="block mt-2 text-[#86CA6B]">
            Nature & Life
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mt-6 font-light"
        >
          Explore the world of trees, their secrets, their strength, and their role 
          in building a healthier planet for future generations.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 25 },
            show: { opacity: 1, y: 0 },
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <button onClick={scrollToCollection} className="px-8 py-4 bg-[#86CA6B] hover:bg-[#76B55B] text-[#0B2418] font-bold rounded-xl shadow-xl transition transform hover:scale-105 cursor-pointer">
            Start Exploring
          </button>

          <button onClick={scrollToCollection} className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white border border-white/40 font-bold rounded-xl backdrop-blur-md shadow-xl transition cursor-pointer">
            Learn More
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero1;
// import { useEffect, useState } from "react";
// import { Leaf } from "lucide-react";

// const Preloader = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1800); // Preloader duration
//     return () => clearTimeout(timer);
//   }, []);

//   if (!loading) return null;

//   return (
//     <div className="fixed inset-0 bg-[#F5FBF2] flex items-center justify-center z-[9999]">
//       <div className="flex flex-col items-center gap-4">

//         {/* Leaf Icon */}
//         <Leaf
//           size={50}
//           strokeWidth={2.5}
//           className="animate-pulse text-[#86CA6B]"
//         />

//         {/* Loading Text */}
//         <p className="text-xl font-semibold text-[#0B2418] tracking-wide animate-fade">
//           Treepedia
//         </p>

//         {/* Progress Bar */}
//         <div className="w-40 h-1.5 bg-[#0B2418]/20 rounded-full overflow-hidden">
//           <div className="w-full h-full bg-[#86CA6B] animate-loader"></div>
//         </div>

//       </div>

//       {/* Custom Animations */}
//       <style>{`
//         @keyframes loader {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(0%); }
//         }
//         .animate-loader {
//           animation: loader 1.8s ease-in-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Preloader;


import { useEffect, useState } from "react";
import { Leaf } from "lucide-react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const hasLoadedBefore = localStorage.getItem("treepedia-preloader-shown");

    if (hasLoadedBefore) {
      setLoading(false);
      return;
    }

    const startFadeOut = setTimeout(() => {
      setFadeOut(true);
    }, 1800); 

    const endLoader = setTimeout(() => {
      setLoading(false);
      localStorage.setItem("treepedia-preloader-shown", "true");
    }, 2400); // fade-out duration included

    return () => {
      clearTimeout(startFadeOut);
      clearTimeout(endLoader);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-[9999] bg-[#F5FBF2] 
      transition-opacity duration-700 ${fadeOut ? "opacity-0" : "opacity-100"}`}
    >
      <div className="flex flex-col items-center gap-5">

        {/* Leaf Icon */}
        <Leaf
          size={50}
          strokeWidth={2.5}
          className="text-[#86CA6B] animate-leafBounce"
        />

        {/* Title */}
        <p className="text-xl font-semibold text-[#0B2418] tracking-wide animate-textFadeIn">
          Treepedia
        </p>

        {/* Progress Bar */}
        <div className="w-48 h-2 bg-[#0B2418]/20 rounded-full overflow-hidden">
          <div className="h-full bg-[#86CA6B] animate-progressGrow"></div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes leafBounce {
          0% { transform: translateY(-20px); opacity: 0; }
          40% { transform: translateY(4px); opacity: 1; }
          60% { transform: translateY(-3px); }
          100% { transform: translateY(0); }
        }
        .animate-leafBounce {
          animation: leafBounce 1s ease-out forwards;
        }

        @keyframes textFadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-textFadeIn {
          animation: textFadeIn 1.2s ease-out forwards;
        }

        @keyframes progressGrow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        .animate-progressGrow {
          animation: progressGrow 1.6s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default Preloader;

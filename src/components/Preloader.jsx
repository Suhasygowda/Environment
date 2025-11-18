import { useEffect, useState } from "react";
import { Leaf } from "lucide-react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Preloader duration
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-[#F5FBF2] flex items-center justify-center z-[9999]">
      <div className="flex flex-col items-center gap-4">

        {/* Leaf Icon */}
        <Leaf
          size={50}
          strokeWidth={2.5}
          className="animate-pulse text-[#86CA6B]"
        />

        {/* Loading Text */}
        <p className="text-xl font-semibold text-[#0B2418] tracking-wide animate-fade">
          Treepedia
        </p>

        {/* Progress Bar */}
        <div className="w-40 h-1.5 bg-[#0B2418]/20 rounded-full overflow-hidden">
          <div className="w-full h-full bg-[#86CA6B] animate-loader"></div>
        </div>

      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes loader {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0%); }
        }
        .animate-loader {
          animation: loader 3s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Preloader;

// import React, { useState, useEffect } from 'react';
// import { ChevronDown, Leaf, MapPin, BookOpen, QrCode, Home, Search, X, Copy, Check } from 'lucide-react';
// const Navbar = () => {
//         const [scrolled, setScrolled] = useState(false);
//       const [isOpen, setIsOpen] = useState(false);
//       useEffect(() => {
//         const handleScroll = () => {
//           setScrolled(window.scrollY > 50);
//         };
        
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//       }, []);
//   return (
//     <div>
//             <nav 
//         className={`fixed z-50 transition-all duration-700 ease-out`}
//         style={{ 
//           top: scrolled ? '15px' : '0px',
//           left: scrolled ? 'calc(50% - 45%)' : '0px',
//           right: scrolled ? 'calc(50% - 45%)' : '0px',
//           width: scrolled ? '90%' : '100%',
//           margin: scrolled ? '0 auto' : '0',
//           '@media (max-width: 768px)': {
//             left: scrolled ? '0px' : '0px',
//             right: scrolled ? '0px' : '0px',
//             width: scrolled ? '100%' : '100%'
//           }
//         }}
//       >
//         <div className={`transition-all duration-700 ease-out ${
//           scrolled 
//             ? 'bg-[#F5FBF2] shadow-lg border border-gray-200 rounded-2xl' 
//             : 'bg-transparent'
//         }`}>
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className={`flex justify-between items-center transition-all duration-700 ease-out ${
//               scrolled ? 'h-14' : 'h-16'
//             }`}>
//               {/* Logo */}
//               <button className="flex items-center gap-2 text-[#0B2418] font-bold text-2xl hover:text-[#86CA6B] transition">
//                 <Leaf className="w-8 h-8 text-[#0B2418]" />
//                 <span className="hidden sm:inline">Treepedia</span>
//               </button>

//               {/* Desktop Nav */}
//               <div className="hidden md:flex items-center gap-8">
//                 <button className="flex items-center gap-2 transition text-[#0B2418] font-bold hover:text-[#86CA6B]">
//                   <span>Home</span>
//                 </button>
//               </div>

//               {/* Mobile Menu Button */}
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="md:hidden text-black transition-transform duration-300"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="fixed top-16 left-0 right-0 z-40 bg-[#F5FBF2] md:hidden">
//           <div className="px-4 py-4">
//             <button className="block w-full text-left text-[#0B2418] hover:text-[#86CA6B] px-4 py-2 rounded">
//               Home
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Navbar

import React, { useState, useEffect } from 'react';
import { Leaf, Home, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleBackHome = () => {
    setCurrentPage('home');
    setMenuOpen(false);
  };

  return (
    <div>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        !isVisible ? '-translate-y-full' : 'translate-y-0'
      } ${
        scrolled 
          ? 'bg-[#F5FBF2] shadow-lg border border-gray-200' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-700 ease-out ${
            scrolled ? 'h-14' : 'h-16'
          }`}>
            <button
              onClick={handleBackHome}
              className="flex items-center gap-2 text-[#0B2418] font-bold text-2xl hover:text-[#86CA6B] transition"
            >
              <Leaf className="w-8 h-8" />
              <span className="hidden sm:inline">Treepedia</span>
            </button>

            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={handleBackHome}
                className={`flex items-center gap-2 transition ${
                  currentPage === 'home'
                    ? 'text-[#0B2418] font-bold'
                    : 'text-[#0B2418] hover:text-[#86CA6B]'
                }`}
              >
                <Home className="w-5 h-5" />
                Home
              </button>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-[#0B2418]"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden pb-4">
              <button
                onClick={handleBackHome}
                className="block w-full text-left text-[#0B2418] hover:bg-gray-100 px-4 py-2 rounded"
              >
                Home
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
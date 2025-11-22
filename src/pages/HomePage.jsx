// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
// // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // import Hero from '../components/Hero';
// // // // // // import { Cards } from '../components/Cards';
// // // // // // import ScrollVelocity from '../components/ScrollVelocity';
// // // // // // import { treeDatabase } from '../data/treeDatabase';

// // // // // // export default function HomePage() {
// // // // // //   const navigate = useNavigate();
// // // // // //   const [searchTerm, setSearchTerm] = useState('');
// // // // // //   const [carouselIndex, setCarouselIndex] = useState(0);
// // // // // //   const [itemsPerView, setItemsPerView] = useState(3);

// // // // // //   useEffect(() => {
// // // // // //     const handleResize = () => {
// // // // // //       if (window.innerWidth < 768) {
// // // // // //         setItemsPerView(1);
// // // // // //       } else if (window.innerWidth < 1024) {
// // // // // //         setItemsPerView(2);
// // // // // //       } else {
// // // // // //         setItemsPerView(3);
// // // // // //       }
// // // // // //     };
    
// // // // // //     handleResize();
// // // // // //     window.addEventListener('resize', handleResize);
// // // // // //     return () => window.removeEventListener('resize', handleResize);
// // // // // //   }, []);

// // // // // //   const filteredTrees = treeDatabase.filter(tree =>
// // // // // //     tree.nameKannada.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // // //     tree.nameEnglish.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // // //     tree.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
// // // // // //   );

// // // // // //   const nextSlide = () => {
// // // // // //     setCarouselIndex((prev) => 
// // // // // //       (prev + 1) % Math.ceil(filteredTrees.length / itemsPerView)
// // // // // //     );
// // // // // //   };

// // // // // //   const prevSlide = () => {
// // // // // //     setCarouselIndex((prev) => 
// // // // // //       prev === 0 ? Math.ceil(filteredTrees.length / itemsPerView) - 1 : prev - 1
// // // // // //     );
// // // // // //   };

// // // // // //   const startIdx = carouselIndex * itemsPerView;
// // // // // //   const visibleTrees = filteredTrees.slice(startIdx, startIdx + itemsPerView);

// // // // // //   return (
// // // // // //     <div>
// // // // // //       <Hero />
// // // // // //       <Cards />
// // // // // //       <ScrollVelocity
// // // // // //         texts={[
// // // // // //           <span style={{ color: '#000' }}>Treepedia</span>,
// // // // // //           <span style={{ color: '#86CA6B' }}>Explore • Learn • Preserve •</span>
// // // // // //         ]}
// // // // // //         className="custom-scroll-text"
// // // // // //         style={{ backgroundColor: '#F5FBF2' }}
// // // // // //       />

// // // // // //       {/* Main Content - Trees Carousel */}
// // // // // //       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
// // // // // //         <div className="mb-12">
// // // // // //           <h2 className="text-4xl font-bold mb-4" style={{ color: '#000' }}>
// // // // // //             Our Tree Collection
// // // // // //           </h2>
// // // // // //           <p className="text-lg" style={{ color: '#000' }}>
// // // // // //             Explore {filteredTrees.length} amazing trees with detailed information and QR codes
// // // // // //           </p>
// // // // // //         </div>

// // // // // //         {filteredTrees.length === 0 ? (
// // // // // //           <div className="text-center py-16">
// // // // // //             <Search className="w-16 h-16 mx-auto mb-4" style={{ color: '#86CA6B' }} />
// // // // // //             <p className="text-2xl" style={{ color: '#000' }}>No trees found matching your search</p>
// // // // // //           </div>
// // // // // //         ) : (
// // // // // //           <div className="relative">
// // // // // //             {/* Carousel */}
// // // // // //             <div className="flex gap-6">
// // // // // //               {visibleTrees.map((tree) => (
// // // // // //                 <div
// // // // // //                   key={tree.id}
// // // // // //                   onClick={() => navigate(`/tree/${tree.id}`)}
// // // // // //                   className="flex-1 min-w-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden border-2"
// // // // // //                   style={{ borderColor: '#86CA6B' }}
// // // // // //                 >
// // // // // //                   {/* Tree Image */}
// // // // // //                   <div className="h-56 relative overflow-hidden" style={{ backgroundColor: '#86CA6B' }}>
// // // // // //                     <img
// // // // // //                       src={tree.image}
// // // // // //                       alt={tree.nameEnglish}
// // // // // //                       className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
// // // // // //                     />
// // // // // //                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
// // // // // //                   </div>

// // // // // //                   {/* Content */}
// // // // // //                   <div className="p-6">
// // // // // //                     <h3 className="text-2xl font-bold mb-2" style={{ color: '#000' }}>
// // // // // //                       {tree.nameEnglish}
// // // // // //                     </h3>
// // // // // //                     <p className="text-sm font-semibold mb-3" style={{ color: '#86CA6B' }}>
// // // // // //                       {tree.nameKannada}
// // // // // //                     </p>
// // // // // //                     <p className="text-xs text-gray-600 italic mb-4">
// // // // // //                       {tree.scientificName}
// // // // // //                     </p>
                    
// // // // // //                     {/* Tags */}
// // // // // //                     <div className="flex flex-wrap gap-2 mb-5">
// // // // // //                       {tree.uses.slice(0, 2).map((use, idx) => (
// // // // // //                         <span
// // // // // //                           key={idx}
// // // // // //                           className="text-xs px-3 py-1 rounded-full font-medium"
// // // // // //                           style={{ backgroundColor: '#F5FBF2', color: '#86CA6B', border: '1px solid #86CA6B' }}
// // // // // //                         >
// // // // // //                           {use}
// // // // // //                         </span>
// // // // // //                       ))}
// // // // // //                       {tree.uses.length > 2 && (
// // // // // //                         <span
// // // // // //                           className="text-xs px-3 py-1 rounded-full font-medium"
// // // // // //                           style={{ backgroundColor: '#F5FBF2', color: '#86CA6B', border: '1px solid #86CA6B' }}
// // // // // //                         >
// // // // // //                           +{tree.uses.length - 2} more
// // // // // //                         </span>
// // // // // //                       )}
// // // // // //                     </div>

// // // // // //                     {/* Button */}
// // // // // //                     <button
// // // // // //                       className="w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 text-white cursor-pointer"
// // // // // //                       style={{ backgroundColor: '#86CA6B' }}
// // // // // //                       onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
// // // // // //                       onMouseLeave={(e) => e.target.style.backgroundColor = '#86CA6B'}
// // // // // //                     >
// // // // // //                       View Details
// // // // // //                     </button>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               ))}
// // // // // //             </div>

// // // // // //             {/* Navigation Buttons */}
// // // // // //             <button
// // // // // //               onClick={prevSlide}
// // // // // //               className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-12 z-10 p-3 rounded-full transition-all duration-300 hover:scale-110"
// // // // // //               style={{ backgroundColor: '#86CA6B', color: 'white' }}
// // // // // //               onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
// // // // // //               onMouseLeave={(e) => e.target.style.backgroundColor = '#86CA6B'}
// // // // // //             >
// // // // // //               <ChevronLeft className="w-6 h-6" />
// // // // // //             </button>

// // // // // //             <button
// // // // // //               onClick={nextSlide}
// // // // // //               className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-12 z-10 p-3 rounded-full transition-all duration-300 hover:scale-110"
// // // // // //               style={{ backgroundColor: '#86CA6B', color: 'white' }}
// // // // // //               onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
// // // // // //               onMouseLeave={(e) => e.target.style.backgroundColor = '#86CA6B'}
// // // // // //             >
// // // // // //               <ChevronRight className="w-6 h-6" />
// // // // // //             </button>

// // // // // //             {/* Dots Indicator */}
// // // // // //             <div className="flex justify-center gap-2 mt-8">
// // // // // //               {Array.from({ length: Math.ceil(filteredTrees.length / itemsPerView) }).map(
// // // // // //                 (_, idx) => (
// // // // // //                   <button
// // // // // //                     key={idx}
// // // // // //                     onClick={() => setCarouselIndex(idx)}
// // // // // //                     className="transition-all duration-300 rounded-full"
// // // // // //                     style={{
// // // // // //                       width: carouselIndex === idx ? '32px' : '10px',
// // // // // //                       height: '10px',
// // // // // //                       backgroundColor: carouselIndex === idx ? '#000' : '#86CA6B'
// // // // // //                     }}
// // // // // //                     aria-label={`Go to slide ${idx + 1}`}
// // // // // //                   />
// // // // // //                 )
// // // // // //               )}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </section>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
// // // // // import { useNavigate } from 'react-router-dom';
// // // // // import Hero from '../components/Hero';
// // // // // import { Cards } from '../components/Cards';
// // // // // import ScrollVelocity from '../components/ScrollVelocity';
// // // // // import { treeDatabase } from '../data/treeDatabase';

// // // // // export default function HomePage() {
// // // // //   const navigate = useNavigate();
// // // // //   const [searchTerm, setSearchTerm] = useState('');
// // // // //   const [carouselIndex, setCarouselIndex] = useState(0);
// // // // //   const [itemsPerView, setItemsPerView] = useState(3);

// // // // //   useEffect(() => {
// // // // //     const handleResize = () => {
// // // // //       if (window.innerWidth < 768) {
// // // // //         setItemsPerView(1);
// // // // //       } else if (window.innerWidth < 1024) {
// // // // //         setItemsPerView(2);
// // // // //       } else {
// // // // //         setItemsPerView(3);
// // // // //       }
// // // // //     };
    
// // // // //     handleResize();
// // // // //     window.addEventListener('resize', handleResize);
// // // // //     return () => window.removeEventListener('resize', handleResize);
// // // // //   }, []);

// // // // //   // Reset carousel when search changes
// // // // //   useEffect(() => {
// // // // //     setCarouselIndex(0);
// // // // //   }, [searchTerm]);

// // // // //   const filteredTrees = treeDatabase.filter(tree =>
// // // // //     tree.nameKannada.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // //     tree.nameEnglish.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // //     tree.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
// // // // //   );

// // // // //   const nextSlide = () => {
// // // // //     setCarouselIndex((prev) => 
// // // // //       (prev + 1) % Math.ceil(filteredTrees.length / itemsPerView)
// // // // //     );
// // // // //   };

// // // // //   const prevSlide = () => {
// // // // //     setCarouselIndex((prev) => 
// // // // //       prev === 0 ? Math.ceil(filteredTrees.length / itemsPerView) - 1 : prev - 1
// // // // //     );
// // // // //   };

// // // // //   const startIdx = carouselIndex * itemsPerView;
// // // // //   const visibleTrees = filteredTrees.slice(startIdx, startIdx + itemsPerView);

// // // // //   return (
// // // // //     <div>
// // // // //       <Hero />
// // // // //       <Cards />
// // // // //       <ScrollVelocity
// // // // //         texts={[
// // // // //           <span style={{ color: '#000' }}>Treepedia</span>,
// // // // //           <span style={{ color: '#86CA6B' }}>Explore • Learn • Preserve •</span>
// // // // //         ]}
// // // // //         className="custom-scroll-text"
// // // // //         style={{ backgroundColor: '#F5FBF2' }}
// // // // //       />

// // // // //       {/* Main Content - Trees Carousel */}
// // // // //       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
// // // // //         <div className="mb-12">
// // // // //           <h2 className="text-4xl font-bold mb-8" style={{ color: '#000' }}>
// // // // //             Our Tree Collection
// // // // //           </h2>
          
// // // // //           {/* Search Bar */}
// // // // //           <div className="mb-8">
// // // // //             <div className="relative">
// // // // //               <Search className="absolute left-4 top-3 w-5 h-5" style={{ color: '#86CA6B' }} />
// // // // //               <input
// // // // //                 type="text"
// // // // //                 placeholder="Search by tree name, Kannada name, or scientific name..."
// // // // //                 value={searchTerm}
// // // // //                 onChange={(e) => setSearchTerm(e.target.value)}
// // // // //                 className="w-full pl-12 pr-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2"
// // // // //                 style={{ borderColor: '#86CA6B', focusRingColor: '#86CA6B' }}
// // // // //               />
// // // // //             </div>
// // // // //           </div>

// // // // //           <p className="text-lg" style={{ color: '#000' }}>
// // // // //             Explore {filteredTrees.length} amazing trees with detailed information and QR codes
// // // // //           </p>
// // // // //         </div>

// // // // //         {filteredTrees.length === 0 ? (
// // // // //           <div className="text-center py-16">
// // // // //             <Search className="w-16 h-16 mx-auto mb-4" style={{ color: '#86CA6B' }} />
// // // // //             <p className="text-2xl" style={{ color: '#000' }}>No trees found matching your search</p>
// // // // //           </div>
// // // // //         ) : (
// // // // //           <div className="relative">
// // // // //             {/* Carousel */}
// // // // //             <div className={`flex gap-6 ${visibleTrees.length < 3 ? 'justify-center' : ''}`}>
// // // // //               {visibleTrees.map((tree) => (
// // // // //                 <div
// // // // //                   key={tree.id}
// // // // //                   onClick={() => navigate(`/tree/${tree.id}`)}
// // // // //                   className={`${visibleTrees.length < 3 ? 'w-1/2' : 'flex-1 min-w-0'} bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden border-2`}
// // // // //                   style={{ borderColor: '#86CA6B' }}
// // // // //                 >
// // // // //                   {/* Tree Image */}
// // // // //                   <div className="h-56 relative overflow-hidden" style={{ backgroundColor: '#86CA6B' }}>
// // // // //                     <img
// // // // //                       src={tree.image}
// // // // //                       alt={tree.nameEnglish}
// // // // //                       className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
// // // // //                     />
// // // // //                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
// // // // //                   </div>

// // // // //                   {/* Content */}
// // // // //                   <div className="p-6">
// // // // //                     <h3 className="text-2xl font-bold mb-2" style={{ color: '#000' }}>
// // // // //                       {tree.nameEnglish}
// // // // //                     </h3>
// // // // //                     <p className="text-sm font-semibold mb-3" style={{ color: '#86CA6B' }}>
// // // // //                       {tree.nameKannada}
// // // // //                     </p>
// // // // //                     <p className="text-xs text-gray-600 italic mb-4">
// // // // //                       {tree.scientificName}
// // // // //                     </p>
                    
// // // // //                     {/* Tags */}
// // // // //                     <div className="flex flex-wrap gap-2 mb-5">
// // // // //                       {tree.uses.slice(0, 2).map((use, idx) => (
// // // // //                         <span
// // // // //                           key={idx}
// // // // //                           className="text-xs px-3 py-1 rounded-full font-medium"
// // // // //                           style={{ backgroundColor: '#F5FBF2', color: '#86CA6B', border: '1px solid #86CA6B' }}
// // // // //                         >
// // // // //                           {use}
// // // // //                         </span>
// // // // //                       ))}
// // // // //                       {tree.uses.length > 2 && (
// // // // //                         <span
// // // // //                           className="text-xs px-3 py-1 rounded-full font-medium"
// // // // //                           style={{ backgroundColor: '#F5FBF2', color: '#86CA6B', border: '1px solid #86CA6B' }}
// // // // //                         >
// // // // //                           +{tree.uses.length - 2} more
// // // // //                         </span>
// // // // //                       )}
// // // // //                     </div>

// // // // //                     {/* Button */}
// // // // //                     <button
// // // // //                       className="w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 text-white cursor-pointer"
// // // // //                       style={{ backgroundColor: '#86CA6B' }}
// // // // //                       onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
// // // // //                       onMouseLeave={(e) => e.target.style.backgroundColor = '#86CA6B'}
// // // // //                     >
// // // // //                       View Details
// // // // //                     </button>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>

// // // // //             {/* Navigation Buttons */}
// // // // //             <button
// // // // //               onClick={prevSlide}
// // // // //               className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-12 z-10 p-3 rounded-full transition-all duration-300 hover:scale-110"
// // // // //               style={{ backgroundColor: '#86CA6B', color: 'white' }}
// // // // //               onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
// // // // //               onMouseLeave={(e) => e.target.style.backgroundColor = '#86CA6B'}
// // // // //             >
// // // // //               <ChevronLeft className="w-6 h-6" />
// // // // //             </button>

// // // // //             <button
// // // // //               onClick={nextSlide}
// // // // //               className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-12 z-10 p-3 rounded-full transition-all duration-300 hover:scale-110"
// // // // //               style={{ backgroundColor: '#86CA6B', color: 'white' }}
// // // // //               onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
// // // // //               onMouseLeave={(e) => e.target.style.backgroundColor = '#86CA6B'}
// // // // //             >
// // // // //               <ChevronRight className="w-6 h-6" />
// // // // //             </button>

// // // // //             {/* Dots Indicator */}
// // // // //             <div className="flex justify-center gap-2 mt-8">
// // // // //               {Array.from({ length: Math.ceil(filteredTrees.length / itemsPerView) }).map(
// // // // //                 (_, idx) => (
// // // // //                   <button
// // // // //                     key={idx}
// // // // //                     onClick={() => setCarouselIndex(idx)}
// // // // //                     className="transition-all duration-300 rounded-full"
// // // // //                     style={{
// // // // //                       width: carouselIndex === idx ? '32px' : '10px',
// // // // //                       height: '10px',
// // // // //                       backgroundColor: carouselIndex === idx ? '#000' : '#86CA6B'
// // // // //                     }}
// // // // //                     aria-label={`Go to slide ${idx + 1}`}
// // // // //                   />
// // // // //                 )
// // // // //               )}
// // // // //             </div>
// // // // //           </div>
// // // // //         )}
// // // // //       </section>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // import React, { useState, useEffect } from 'react';
// // // // import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
// // // // import { useNavigate } from 'react-router-dom';
// // // // import Hero from '../components/Hero';
// // // // import { Cards } from '../components/Cards';
// // // // import ScrollVelocity from '../components/ScrollVelocity';
// // // // import { treeDatabase } from '../data/treeDatabase';

// // // // export default function HomePage() {
// // // //   const navigate = useNavigate();
// // // //   const [searchTerm, setSearchTerm] = useState('');
// // // //   const [carouselIndex, setCarouselIndex] = useState(0);
// // // //   const [itemsPerView, setItemsPerView] = useState(3);

// // // //   useEffect(() => {
// // // //     const handleResize = () => {
// // // //       if (window.innerWidth < 768) {
// // // //         setItemsPerView(1);
// // // //       } else if (window.innerWidth < 1024) {
// // // //         setItemsPerView(2);
// // // //       } else {
// // // //         setItemsPerView(3);
// // // //       }
// // // //     };
    
// // // //     handleResize();
// // // //     window.addEventListener('resize', handleResize);
// // // //     return () => window.removeEventListener('resize', handleResize);
// // // //   }, []);

// // // //   // Reset carousel when search changes
// // // //   useEffect(() => {
// // // //     setCarouselIndex(0);
// // // //   }, [searchTerm]);

// // // //   const filteredTrees = treeDatabase.filter(tree =>
// // // //     tree.nameKannada.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //     tree.nameEnglish.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //     tree.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
// // // //   );

// // // //   const nextSlide = () => {
// // // //     setCarouselIndex((prev) => 
// // // //       (prev + 1) % Math.ceil(filteredTrees.length / itemsPerView)
// // // //     );
// // // //   };

// // // //   const prevSlide = () => {
// // // //     setCarouselIndex((prev) => 
// // // //       prev === 0 ? Math.ceil(filteredTrees.length / itemsPerView) - 1 : prev - 1
// // // //     );
// // // //   };

// // // //   const startIdx = carouselIndex * itemsPerView;
// // // //   const visibleTrees = filteredTrees.slice(startIdx, startIdx + itemsPerView);

// // // //   return (
// // // //     <div>
// // // //       <Hero />
// // // //       <Cards />
// // // //       <ScrollVelocity
// // // //         key="scroll-velocity"
// // // //         texts={[
// // // //           <span style={{ color: '#000' }}>Treepedia</span>,
// // // //           <span style={{ color: '#86CA6B' }}>Explore • Learn • Preserve •</span>
// // // //         ]}
// // // //         className="custom-scroll-text"
// // // //         style={{ backgroundColor: '#F5FBF2' }}
// // // //       />

// // // //       {/* Main Content - Trees Carousel */}
// // // //       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
// // // //         <div className="mb-12">
// // // //           <h2 className="text-4xl font-bold mb-8" style={{ color: '#000' }}>
// // // //             Our Tree Collection
// // // //           </h2>
          
// // // //           {/* Search Bar */}
// // // //           <div className="mb-8">
// // // //             <div className="relative">
// // // //               <Search className="absolute left-4 top-3 w-5 h-5" style={{ color: '#86CA6B' }} />
// // // //               <input
// // // //                 type="text"
// // // //                 placeholder="Search by tree name, Kannada name, or scientific name..."
// // // //                 value={searchTerm}
// // // //                 onChange={(e) => setSearchTerm(e.target.value)}
// // // //                 className="w-full pl-12 pr-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2"
// // // //                 style={{ borderColor: '#86CA6B', focusRingColor: '#86CA6B' }}
// // // //               />
// // // //             </div>
// // // //           </div>

// // // //           <p className="text-lg" style={{ color: '#000' }}>
// // // //             Explore {filteredTrees.length} amazing trees with detailed information and QR codes
// // // //           </p>
// // // //         </div>

// // // //         {filteredTrees.length === 0 ? (
// // // //           <div className="text-center py-16">
// // // //             <Search className="w-16 h-16 mx-auto mb-4" style={{ color: '#86CA6B' }} />
// // // //             <p className="text-2xl" style={{ color: '#000' }}>No trees found matching your search</p>
// // // //           </div>
// // // //         ) : (
// // // //           <div className="relative">
// // // //             {/* Carousel */}
// // // //             <div className={`flex gap-6 ${visibleTrees.length < 3 ? 'justify-center' : ''}`}>
// // // //               {visibleTrees.map((tree) => (
// // // //                 <div
// // // //                   key={tree.id}
// // // //                   onClick={() => navigate(`/tree/${tree.id}`)}
// // // //                   className={`${visibleTrees.length < 3 ? 'w-1/2' : 'flex-1 min-w-0'} bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden border-2`}
// // // //                   style={{ borderColor: '#86CA6B' }}
// // // //                 >
// // // //                   {/* Tree Image */}
// // // //                   <div className="h-56 relative overflow-hidden" style={{ backgroundColor: '#86CA6B' }}>
// // // //                     <img
// // // //                       src={tree.image}
// // // //                       alt={tree.nameEnglish}
// // // //                       className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
// // // //                     />
// // // //                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
// // // //                   </div>

// // // //                   {/* Content */}
// // // //                   <div className="p-6">
// // // //                     <h3 className="text-2xl font-bold mb-2" style={{ color: '#000' }}>
// // // //                       {tree.nameEnglish}
// // // //                     </h3>
// // // //                     <p className="text-sm font-semibold mb-3" style={{ color: '#86CA6B' }}>
// // // //                       {tree.nameKannada}
// // // //                     </p>
// // // //                     <p className="text-xs text-gray-600 italic mb-4">
// // // //                       {tree.scientificName}
// // // //                     </p>
                    
// // // //                     {/* Tags */}
// // // //                     <div className="flex flex-wrap gap-2 mb-5">
// // // //                       {tree.uses.slice(0, 2).map((use, idx) => (
// // // //                         <span
// // // //                           key={idx}
// // // //                           className="text-xs px-3 py-1 rounded-full font-medium"
// // // //                           style={{ backgroundColor: '#F5FBF2', color: '#86CA6B', border: '1px solid #86CA6B' }}
// // // //                         >
// // // //                           {use}
// // // //                         </span>
// // // //                       ))}
// // // //                       {tree.uses.length > 2 && (
// // // //                         <span
// // // //                           className="text-xs px-3 py-1 rounded-full font-medium"
// // // //                           style={{ backgroundColor: '#F5FBF2', color: '#86CA6B', border: '1px solid #86CA6B' }}
// // // //                         >
// // // //                           +{tree.uses.length - 2} more
// // // //                         </span>
// // // //                       )}
// // // //                     </div>

// // // //                     {/* Button */}
// // // //                     <button
// // // //                       className="w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 text-white cursor-pointer"
// // // //                       style={{ backgroundColor: '#86CA6B' }}
// // // //                       onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
// // // //                       onMouseLeave={(e) => e.target.style.backgroundColor = '#86CA6B'}
// // // //                     >
// // // //                       View Details
// // // //                     </button>
// // // //                   </div>
// // // //                 </div>
// // // //               ))}
// // // //             </div>

// // // //             {/* Navigation Buttons */}
// // // //             <button
// // // //               onClick={prevSlide}
// // // //               className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-12 z-10 p-3 rounded-full transition-all duration-300 hover:scale-110"
// // // //               style={{ backgroundColor: '#86CA6B', color: 'white' }}
// // // //               onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
// // // //               onMouseLeave={(e) => e.target.style.backgroundColor = '#86CA6B'}
// // // //             >
// // // //               <ChevronLeft className="w-6 h-6" />
// // // //             </button>

// // // //             <button
// // // //               onClick={nextSlide}
// // // //               className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-12 z-10 p-3 rounded-full transition-all duration-300 hover:scale-110"
// // // //               style={{ backgroundColor: '#86CA6B', color: 'white' }}
// // // //               onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
// // // //               onMouseLeave={(e) => e.target.style.backgroundColor = '#86CA6B'}
// // // //             >
// // // //               <ChevronRight className="w-6 h-6" />
// // // //             </button>

// // // //             {/* Dots Indicator */}
// // // //             <div className="flex justify-center gap-2 mt-8">
// // // //               {Array.from({ length: Math.ceil(filteredTrees.length / itemsPerView) }).map(
// // // //                 (_, idx) => (
// // // //                   <button
// // // //                     key={idx}
// // // //                     onClick={() => setCarouselIndex(idx)}
// // // //                     className="transition-all duration-300 rounded-full"
// // // //                     style={{
// // // //                       width: carouselIndex === idx ? '32px' : '10px',
// // // //                       height: '10px',
// // // //                       backgroundColor: carouselIndex === idx ? '#000' : '#86CA6B'
// // // //                     }}
// // // //                     aria-label={`Go to slide ${idx + 1}`}
// // // //                   />
// // // //                 )
// // // //               )}
// // // //             </div>
// // // //           </div>
// // // //         )}
// // // //       </section>
// // // //     </div>
// // // //   );
// // // // }

// // // import React, { useState, useEffect, useRef } from 'react';
// // // import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
// // // import { useNavigate } from 'react-router-dom';
// // // import Hero from '../components/Hero';
// // // import { Cards } from '../components/Cards';
// // // import ScrollVelocity from '../components/ScrollVelocity';
// // // import { treeDatabase } from '../data/treeDatabase';

// // // export default function HomePage() {
// // //   const navigate = useNavigate();
// // //   const [searchTerm, setSearchTerm] = useState('');
// // //   const [carouselIndex, setCarouselIndex] = useState(0);
// // //   const [itemsPerView, setItemsPerView] = useState(3);
// // //   const collectionRef = useRef(null);

// // //   useEffect(() => {
// // //     const handleResize = () => {
// // //       if (window.innerWidth < 768) {
// // //         setItemsPerView(1);
// // //       } else if (window.innerWidth < 1024) {
// // //         setItemsPerView(2);
// // //       } else {
// // //         setItemsPerView(3);
// // //       }
// // //     };
    
// // //     handleResize();
// // //     window.addEventListener('resize', handleResize);
// // //     return () => window.removeEventListener('resize', handleResize);
// // //   }, []);

// // //   // Reset carousel when search changes
// // //   useEffect(() => {
// // //     setCarouselIndex(0);
// // //   }, [searchTerm]);

// // //   const filteredTrees = treeDatabase.filter(tree =>
// // //     tree.nameKannada.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //     tree.nameEnglish.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //     tree.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
// // //   );

// // //   const nextSlide = () => {
// // //     setCarouselIndex((prev) => 
// // //       (prev + 1) % Math.ceil(filteredTrees.length / itemsPerView)
// // //     );
// // //   };

// // //   const prevSlide = () => {
// // //     setCarouselIndex((prev) => 
// // //       prev === 0 ? Math.ceil(filteredTrees.length / itemsPerView) - 1 : prev - 1
// // //     );
// // //   };

// // //   const startIdx = carouselIndex * itemsPerView;
// // //   const visibleTrees = filteredTrees.slice(startIdx, startIdx + itemsPerView);

// // //   return (
// // //     <div>
// // //       <Hero collectionRef={collectionRef} />
// // //       <Cards />
// // //       <ScrollVelocity
// // //         key="scroll-velocity"
// // //         texts={[
// // //           <span style={{ color: '#000' }}>Treepedia</span>,
// // //           <span style={{ color: '#86CA6B' }}>Explore • Learn • Preserve •</span>
// // //         ]}
// // //         className="custom-scroll-text"
// // //         style={{ backgroundColor: '#F5FBF2' }}
// // //       />

// // //       {/* Main Content - Trees Carousel */}
// // //       <section ref={collectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
// // //         <div className="mb-12">
// // //           <h2 className="text-4xl font-bold mb-8" style={{ color: '#000' }}>
// // //             Our Tree Collection
// // //           </h2>
          
// // //           {/* Search Bar */}
// // //           <div className="mb-8">
// // //             <div className="relative">
// // //               <Search className="absolute left-4 top-3 w-5 h-5" style={{ color: '#86CA6B' }} />
// // //               <input
// // //                 type="text"
// // //                 placeholder="Search by tree name, Kannada name, or scientific name..."
// // //                 value={searchTerm}
// // //                 onChange={(e) => setSearchTerm(e.target.value)}
// // //                 className="w-full pl-12 pr-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2"
// // //                 style={{ borderColor: '#86CA6B', focusRingColor: '#86CA6B' }}
// // //               />
// // //             </div>
// // //           </div>

// // //           <p className="text-lg" style={{ color: '#000' }}>
// // //             Explore {filteredTrees.length} amazing trees with detailed information and QR codes
// // //           </p>
// // //         </div>

// // //         {filteredTrees.length === 0 ? (
// // //           <div className="text-center py-16">
// // //             <Search className="w-16 h-16 mx-auto mb-4" style={{ color: '#86CA6B' }} />
// // //             <p className="text-2xl" style={{ color: '#000' }}>No trees found matching your search</p>
// // //           </div>
// // //         ) : (
// // //           <div className="relative">
// // //             {/* Carousel */}
// // //             <div className={`flex gap-6 ${visibleTrees.length < 3 ? 'justify-center' : ''}`}>
// // //               {visibleTrees.map((tree) => (
// // //                 <div
// // //                   key={tree.id}
// // //                   onClick={() => navigate(`/tree/${tree.id}`)}
// // //                   className={`${visibleTrees.length < 3 ? 'w-1/2' : 'flex-1 min-w-0'} bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden border-2`}
// // //                   style={{ borderColor: '#86CA6B' }}
// // //                 >
// // //                   {/* Tree Image */}
// // //                   <div className="h-56 relative overflow-hidden" style={{ backgroundColor: '#86CA6B' }}>
// // //                     <img
// // //                       src={tree.image}
// // //                       alt={tree.nameEnglish}
// // //                       className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
// // //                     />
// // //                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
// // //                   </div>

// // //                   {/* Content */}
// // //                   <div className="p-6">
// // //                     <h3 className="text-2xl font-bold mb-2" style={{ color: '#000' }}>
// // //                       {tree.nameEnglish}
// // //                     </h3>
// // //                     <p className="text-sm font-semibold mb-3" style={{ color: '#86CA6B' }}>
// // //                       {tree.nameKannada}
// // //                     </p>
// // //                     <p className="text-xs text-gray-600 italic mb-4">
// // //                       {tree.scientificName}
// // //                     </p>
                    
// // //                     {/* Tags */}
// // //                     <div className="flex flex-wrap gap-2 mb-5">
// // //                       {tree.uses.slice(0, 2).map((use, idx) => (
// // //                         <span
// // //                           key={idx}
// // //                           className="text-xs px-3 py-1 rounded-full font-medium"
// // //                           style={{ backgroundColor: '#F5FBF2', color: '#86CA6B', border: '1px solid #86CA6B' }}
// // //                         >
// // //                           {use}
// // //                         </span>
// // //                       ))}
// // //                       {tree.uses.length > 2 && (
// // //                         <span
// // //                           className="text-xs px-3 py-1 rounded-full font-medium"
// // //                           style={{ backgroundColor: '#F5FBF2', color: '#86CA6B', border: '1px solid #86CA6B' }}
// // //                         >
// // //                           +{tree.uses.length - 2} more
// // //                         </span>
// // //                       )}
// // //                     </div>

// // //                     {/* Button */}
// // //                     <button
// // //                       className="w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 text-white cursor-pointer"
// // //                       style={{ backgroundColor: '#86CA6B' }}
// // //                       onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
// // //                       onMouseLeave={(e) => e.target.style.backgroundColor = '#86CA6B'}
// // //                     >
// // //                       View Details
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>

// // //             {/* Navigation Buttons */}
// // //             <button
// // //               onClick={prevSlide}
// // //               className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-12 z-10 p-3 rounded-full transition-all duration-300 hover:scale-110"
// // //               style={{ backgroundColor: '#86CA6B', color: 'white' }}
// // //               onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
// // //               onMouseLeave={(e) => e.target.style.backgroundColor = '#86CA6B'}
// // //             >
// // //               <ChevronLeft className="w-6 h-6" />
// // //             </button>

// // //             <button
// // //               onClick={nextSlide}
// // //               className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-12 z-10 p-3 rounded-full transition-all duration-300 hover:scale-110"
// // //               style={{ backgroundColor: '#86CA6B', color: 'white' }}
// // //               onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
// // //               onMouseLeave={(e) => e.target.style.backgroundColor = '#86CA6B'}
// // //             >
// // //               <ChevronRight className="w-6 h-6" />
// // //             </button>

// // //             {/* Dots Indicator */}
// // //             <div className="flex justify-center gap-2 mt-8">
// // //               {Array.from({ length: Math.ceil(filteredTrees.length / itemsPerView) }).map(
// // //                 (_, idx) => (
// // //                   <button
// // //                     key={idx}
// // //                     onClick={() => setCarouselIndex(idx)}
// // //                     className="transition-all duration-300 rounded-full"
// // //                     style={{
// // //                       width: carouselIndex === idx ? '32px' : '10px',
// // //                       height: '10px',
// // //                       backgroundColor: carouselIndex === idx ? '#000' : '#86CA6B'
// // //                     }}
// // //                     aria-label={`Go to slide ${idx + 1}`}
// // //                   />
// // //                 )
// // //               )}
// // //             </div>
// // //           </div>
// // //         )}
// // //       </section>
// // //     </div>
// // //   );
// // // }

// // import React, { useState, useEffect, useRef } from 'react';
// // import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
// // import { useNavigate } from 'react-router-dom';
// // import Hero from '../components/Hero';
// // import { Cards } from '../components/Cards';
// // import ScrollVelocity from '../components/ScrollVelocity';
// // import { treeDatabase } from '../data/treeDatabase';

// // export default function HomePage() {
// //   const navigate = useNavigate();
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [carouselIndex, setCarouselIndex] = useState(0);
// //   const [itemsPerView, setItemsPerView] = useState(3);
// //   const collectionRef = useRef(null);

// //   useEffect(() => {
// //     const handleResize = () => {
// //       if (window.innerWidth < 768) {
// //         setItemsPerView(1);
// //       } else if (window.innerWidth < 1024) {
// //         setItemsPerView(2);
// //       } else {
// //         setItemsPerView(3);
// //       }
// //     };
    
// //     handleResize();
// //     window.addEventListener('resize', handleResize);
// //     return () => window.removeEventListener('resize', handleResize);
// //   }, []);

// //   // Reset carousel when search changes
// //   useEffect(() => {
// //     setCarouselIndex(0);
// //   }, [searchTerm]);

// //   const filteredTrees = treeDatabase.filter(tree =>
// //     tree.nameKannada.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //     tree.nameEnglish.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //     tree.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   const nextSlide = () => {
// //     setCarouselIndex((prev) => 
// //       (prev + 1) % Math.ceil(filteredTrees.length / itemsPerView)
// //     );
// //   };

// //   const prevSlide = () => {
// //     setCarouselIndex((prev) => 
// //       prev === 0 ? Math.ceil(filteredTrees.length / itemsPerView) - 1 : prev - 1
// //     );
// //   };

// //   const startIdx = carouselIndex * itemsPerView;
// //   const visibleTrees = filteredTrees.slice(startIdx, startIdx + itemsPerView);

// //   return (
// //     <div>
// //       <Hero collectionRef={collectionRef} />
// //       <ScrollVelocity
// //         key="scroll-velocity"
// //         texts={[
// //           <span style={{ color: '#000' }}>Treepedia</span>,
// //           <span style={{ color: '#86CA6B' }}>Explore • Learn • Preserve •</span>
// //         ]}
// //         className="custom-scroll-text mt-4"
// //         style={{ backgroundColor: '#F5FBF2' }}
// //       />
// //       <Cards />
      

// //       {/* Main Content - Trees Carousel */}
// //       <section ref={collectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
// //         <div className="mb-12">
// //           <h2 className="text-4xl font-bold mb-8" style={{ color: '#000' }}>
// //             Our Tree Collection
// //           </h2>
          
// //           {/* Search Bar */}
// //           <div className="mb-8">
// //             <div className="relative">
// //               <Search className="absolute left-4 top-3 w-5 h-5" style={{ color: '#86CA6B' }} />
// //               <input
// //                 type="text"
// //                 placeholder="Search by tree name, Kannada name, or scientific name..."
// //                 value={searchTerm}
// //                 onChange={(e) => setSearchTerm(e.target.value)}
// //                 className="w-full pl-12 pr-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2"
// //                 style={{ borderColor: '#86CA6B', focusRingColor: '#86CA6B' }}
// //               />
// //             </div>
// //           </div>

// //           <p className="text-lg" style={{ color: '#000' }}>
// //             Explore {filteredTrees.length} amazing trees with detailed information and QR codes
// //           </p>
// //         </div>

// //         {filteredTrees.length === 0 ? (
// //           <div className="text-center py-16">
// //             <Search className="w-16 h-16 mx-auto mb-4" style={{ color: '#86CA6B' }} />
// //             <p className="text-2xl" style={{ color: '#000' }}>No trees found matching your search</p>
// //           </div>
// //         ) : (
// //           <div className="relative">
// //             {/* Carousel */}
// //             <div className={`flex gap-6 ${visibleTrees.length < 3 ? 'justify-center' : ''}`}>
// //               {visibleTrees.map((tree) => (
// //                 <div
// //                   key={tree.id}
// //                   onClick={() => navigate(`/tree/${tree.id}`)}
// //                   className={`${visibleTrees.length < 3 ? 'w-1/2' : 'flex-1 min-w-0'} bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden border-2`}
// //                   style={{ borderColor: '#86CA6B' }}
// //                 >
// //                   {/* Tree Image */}
// //                   <div className="h-56 relative overflow-hidden" style={{ backgroundColor: '#86CA6B' }}>
// //                     <img
// //                       src={tree.image}
// //                       alt={tree.nameEnglish}
// //                       className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
// //                     />
// //                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
// //                   </div>

// //                   {/* Content */}
// //                   <div className="p-6">
// //                     <h3 className="text-2xl font-bold mb-2" style={{ color: '#000' }}>
// //                       {tree.nameEnglish}
// //                     </h3>
// //                     <p className="text-sm font-semibold mb-3" style={{ color: '#86CA6B' }}>
// //                       {tree.nameKannada}
// //                     </p>
// //                     <p className="text-xs text-gray-600 italic mb-4">
// //                       {tree.scientificName}
// //                     </p>
                    
// //                     {/* Tags */}
// //                     <div className="flex flex-wrap gap-2 mb-5">
// //                       {tree.uses.slice(0, 2).map((use, idx) => (
// //                         <span
// //                           key={idx}
// //                           className="text-xs px-3 py-1 rounded-full font-medium"
// //                           style={{ backgroundColor: '#F5FBF2', color: '#86CA6B', border: '1px solid #86CA6B' }}
// //                         >
// //                           {use}
// //                         </span>
// //                       ))}
// //                       {tree.uses.length > 2 && (
// //                         <span
// //                           className="text-xs px-3 py-1 rounded-full font-medium"
// //                           style={{ backgroundColor: '#F5FBF2', color: '#86CA6B', border: '1px solid #86CA6B' }}
// //                         >
// //                           +{tree.uses.length - 2} more
// //                         </span>
// //                       )}
// //                     </div>

// //                     {/* Button */}
// //                     <button
// //                       className="w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 text-white cursor-pointer"
// //                       style={{ backgroundColor: '#86CA6B' }}
// //                       onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
// //                       onMouseLeave={(e) => e.target.style.backgroundColor = '#86CA6B'}
// //                     >
// //                       View Details
// //                     </button>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Navigation Buttons */}
// //             <button
// //               onClick={prevSlide}
// //               className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-12 z-10 p-3 rounded-full transition-all duration-300 hover:scale-110"
// //               style={{ backgroundColor: '#86CA6B', color: 'white' }}
// //               onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
// //               onMouseLeave={(e) => e.target.style.backgroundColor = '#86CA6B'}
// //             >
// //               <ChevronLeft className="w-6 h-6" />
// //             </button>

// //             <button
// //               onClick={nextSlide}
// //               className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-12 z-10 p-3 rounded-full transition-all duration-300 hover:scale-110"
// //               style={{ backgroundColor: '#86CA6B', color: 'white' }}
// //               onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
// //               onMouseLeave={(e) => e.target.style.backgroundColor = '#86CA6B'}
// //             >
// //               <ChevronRight className="w-6 h-6" />
// //             </button>

// //             {/* Dots Indicator */}
// //             <div className="flex justify-center gap-2 mt-8">
// //               {Array.from({ length: Math.ceil(filteredTrees.length / itemsPerView) }).map(
// //                 (_, idx) => (
// //                   <button
// //                     key={idx}
// //                     onClick={() => setCarouselIndex(idx)}
// //                     className="transition-all duration-300 rounded-full"
// //                     style={{
// //                       width: carouselIndex === idx ? '32px' : '10px',
// //                       height: '10px',
// //                       backgroundColor: carouselIndex === idx ? '#000' : '#86CA6B'
// //                     }}
// //                     aria-label={`Go to slide ${idx + 1}`}
// //                   />
// //                 )
// //               )}
// //             </div>
// //           </div>
// //         )}
// //       </section>
// //     </div>
// //   );
// // }

// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import Hero from '../components/Hero';
// import { Cards } from '../components/Cards';
// import ScrollVelocity from '../components/ScrollVelocity';
// import { treeDatabase } from '../data/treeDatabase';
// import { Cards1 } from '../components/Cards1';

// export default function HomePage() {
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [carouselIndex, setCarouselIndex] = useState(0);
//   const [itemsPerView, setItemsPerView] = useState(3);
//   const collectionRef = useRef(null);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 768) {
//         setItemsPerView(1);
//       } else if (window.innerWidth < 1024) {
//         setItemsPerView(2);
//       } else {
//         setItemsPerView(3);
//       }
//     };
    
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Reset carousel when search changes
//   useEffect(() => {
//     setCarouselIndex(0);
//   }, [searchTerm]);

//   const filteredTrees = treeDatabase.filter(tree =>
//     tree.nameKannada.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     tree.nameEnglish.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     tree.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const nextSlide = () => {
//     setCarouselIndex((prev) => 
//       (prev + 1) % Math.ceil(filteredTrees.length / itemsPerView)
//     );
//   };

//   const prevSlide = () => {
//     setCarouselIndex((prev) => 
//       prev === 0 ? Math.ceil(filteredTrees.length / itemsPerView) - 1 : prev - 1
//     );
//   };

//   const startIdx = carouselIndex * itemsPerView;
//   const visibleTrees = filteredTrees.slice(startIdx, startIdx + itemsPerView);

//   return (
//     <div>
//       <Hero collectionRef={collectionRef} />
//       <ScrollVelocity
//         key="scroll-velocity"
//         texts={[
//           <span style={{ color: '#000' }}>Treepedia</span>,
//           <span style={{ color: '#86CA6B' }}>Explore • Learn • Preserve •</span>
//         ]}
//         className="custom-scroll-text mt-4"
//         style={{ backgroundColor: '#F5FBF2' }}
//       />
//       {/* <Cards1 /> */}
//       <Cards />

//       {/* Main Content - Trees Carousel */}
//       <section ref={collectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//         <div className="mb-12">
//           <h2 className="text-4xl font-bold mb-8" style={{ color: '#000' }}>
//             Our Tree Collection
//           </h2>
          
//           {/* Search Bar */}
//           <div className="mb-8">
//             <div className="relative">
//               <Search className="absolute left-4 top-3 w-5 h-5" style={{ color: '#86CA6B' }} />
//               <input
//                 type="text"
//                 placeholder="Search by tree name, Kannada name, or scientific name..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-12 pr-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2"
//                 style={{ borderColor: '#86CA6B', focusRingColor: '#86CA6B' }}
//               />
//             </div>
//           </div>

//           <p className="text-lg" style={{ color: '#000' }}>
//             Explore {filteredTrees.length} amazing trees with detailed information and QR codes
//           </p>
//         </div>

//         {filteredTrees.length === 0 ? (
//           <div className="text-center py-16">
//             <Search className="w-16 h-16 mx-auto mb-4" style={{ color: '#86CA6B' }} />
//             <p className="text-2xl" style={{ color: '#000' }}>No trees found matching your search</p>
//           </div>
//         ) : (
//           <div className="relative">
//             {/* Carousel */}
//             <div className={`flex gap-6 ${visibleTrees.length < 3 ? 'justify-center' : ''}`}>
//               {visibleTrees.map((tree) => (
//                 <div
//                   key={tree.id}
//                   onClick={() => navigate(`/tree/${tree.id}`)}
//                   className={`${visibleTrees.length < 3 ? 'w-1/2' : 'flex-1 min-w-0'} bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden border-2`}
//                   style={{ borderColor: '#86CA6B' }}
//                 >
//                   {/* Tree Image */}
//                   <div className="h-56 relative overflow-hidden" style={{ backgroundColor: '#86CA6B' }}>
//                     <img
//                       src={tree.image}
//                       alt={tree.nameEnglish}
//                       className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
//                   </div>

//                   {/* Content */}
//                   <div className="p-6">
//                     <h3 className="text-2xl font-bold mb-2" style={{ color: '#000' }}>
//                       {tree.nameEnglish}
//                     </h3>
//                     <p className="text-sm font-semibold mb-3" style={{ color: '#86CA6B' }}>
//                       {tree.nameKannada}
//                     </p>
//                     <p className="text-xs text-gray-600 italic mb-4">
//                       {tree.scientificName}
//                     </p>
                    
//                     {/* Tags */}
//                     <div className="flex flex-wrap gap-2 mb-5">
//                       {tree.uses.slice(0, 2).map((use, idx) => (
//                         <span
//                           key={idx}
//                           className="text-xs px-3 py-1 rounded-full font-medium"
//                           style={{ backgroundColor: '#F5FBF2', color: '#86CA6B', border: '1px solid #86CA6B' }}
//                         >
//                           {use}
//                         </span>
//                       ))}
//                       {tree.uses.length > 2 && (
//                         <span
//                           className="text-xs px-3 py-1 rounded-full font-medium"
//                           style={{ backgroundColor: '#F5FBF2', color: '#86CA6B', border: '1px solid #86CA6B' }}
//                         >
//                           +{tree.uses.length - 2} more
//                         </span>
//                       )}
//                     </div>

//                     {/* Button */}
//                     <button
//                       className="w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 text-white cursor-pointer"
//                       style={{ backgroundColor: '#86CA6B' }}
//                       onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
//                       onMouseLeave={(e) => e.target.style.backgroundColor = '#86CA6B'}
//                     >
//                       View Details
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Navigation Buttons */}
//             <button
//               onClick={prevSlide}
//               className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-12 z-10 p-3 rounded-full transition-all duration-300 hover:scale-110"
//               style={{ backgroundColor: '#86CA6B', color: 'white' }}
//               onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
//               onMouseLeave={(e) => e.target.style.backgroundColor = '#86CA6B'}
//             >
//               <ChevronLeft className="w-6 h-6" />
//             </button>

//             <button
//               onClick={nextSlide}
//               className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-12 z-10 p-3 rounded-full transition-all duration-300 hover:scale-110"
//               style={{ backgroundColor: '#86CA6B', color: 'white' }}
//               onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
//               onMouseLeave={(e) => e.target.style.backgroundColor = '#86CA6B'}
//             >
//               <ChevronRight className="w-6 h-6" />
//             </button>

//             {/* Dots Indicator */}
//             <div className="flex justify-center gap-2 mt-8">
//               {Array.from({ length: Math.ceil(filteredTrees.length / itemsPerView) }).map(
//                 (_, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => setCarouselIndex(idx)}
//                     className="transition-all duration-300 rounded-full"
//                     style={{
//                       width: carouselIndex === idx ? '32px' : '10px',
//                       height: '10px',
//                       backgroundColor: carouselIndex === idx ? '#000' : '#86CA6B'
//                     }}
//                     aria-label={`Go to slide ${idx + 1}`}
//                   />
//                 )
//               )}
//             </div>
//           </div>
//         )}
//       </section>
//     </div>
//   );
// }

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import { Cards } from '../components/Cards';
import ScrollVelocity from '../components/ScrollVelocity';
import { treeDatabase } from '../data/treeDatabase';
import { Cards1 } from '../components/Cards1';
import FeaturesSection from '../components/FeaturesSection';
import DomeGallery from '../components/function DomeGallery';
import MagicBento from '../components/MagicBento';

export default function HomePage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const collectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset carousel when search changes
  useEffect(() => {
    setCarouselIndex(0);
  }, [searchTerm]);

  const filteredTrees = treeDatabase.filter(tree =>
    tree.nameKannada.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tree.nameEnglish.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tree.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const nextSlide = () => {
    setCarouselIndex((prev) => 
      (prev + 1) % Math.ceil(filteredTrees.length / itemsPerView)
    );
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => 
      prev === 0 ? Math.ceil(filteredTrees.length / itemsPerView) - 1 : prev - 1
    );
  };

  const startIdx = carouselIndex * itemsPerView;
  const visibleTrees = filteredTrees.slice(startIdx, startIdx + itemsPerView);

  return (
    <div>
      <Hero collectionRef={collectionRef} />
      <ScrollVelocity
        key="scroll-velocity"
        texts={[
          <span style={{ color: '#000' }}>Treepedia</span>,
          <span style={{ color: '#86CA6B' }}>Explore • Learn • Preserve •</span>
        ]}
        className="custom-scroll-text mt-4"
        style={{ backgroundColor: '#F5FBF2' }}
      />
      {/* <Cards1 /> */}
      <Cards />
      {/* <div style={{ width: '100vw', height: '100vh' }}>
      <DomeGallery />

    </div> */}
    {/* <MagicBento 
  textAutoHide={true}
  enableStars={true}
  enableSpotlight={true}
  enableBorderGlow={true}
  enableTilt={true}
  enableMagnetism={true}
  clickEffect={true}
  spotlightRadius={300}
  particleCount={12}
  glowColor="132, 0, 255"
/> */}
      <FeaturesSection />

      {/* Main Content - Trees Carousel */}
      <section ref={collectionRef} className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8" style={{ color: '#000' }}>
              Our Tree Collection
            </h2>
            
            {/* Search Bar */}
            <div className="mb-6 sm:mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-3 w-5 h-5" style={{ color: '#86CA6B' }} />
                <input
                  type="text"
                  placeholder="Search by tree name, Kannada name, or scientific name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border-2 focus:outline-none focus:ring-2"
                  style={{ borderColor: '#86CA6B', focusRingColor: '#86CA6B' }}
                />
              </div>
            </div>

            <p className="text-base sm:text-lg" style={{ color: '#000' }}>
              Explore {filteredTrees.length} amazing trees with detailed information and QR codes
            </p>
          </div>

          {filteredTrees.length === 0 ? (
            <div className="text-center py-12 sm:py-16 lg:py-20">
              <Search className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4" style={{ color: '#86CA6B' }} />
              <p className="text-lg sm:text-2xl" style={{ color: '#000' }}>No trees found matching your search</p>
            </div>
          ) : (
            <div className="relative px-4 sm:px-8 md:px-12">
              {/* Carousel */}
              <div className={`flex gap-4 sm:gap-6 ${visibleTrees.length < 3 ? 'justify-center' : ''}`}>
                {visibleTrees.map((tree) => (
                  <div
                    key={tree.id}
                    onClick={() => navigate(`/tree/${tree.id}`)}
                    className={`${visibleTrees.length < 3 ? 'w-full sm:w-80' : 'flex-1 min-w-0'} bg-white rounded-lg sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden border-2`}
                    style={{ borderColor: '#86CA6B' }}
                  >
                    {/* Tree Image */}
                    <div className="h-40 sm:h-56 relative overflow-hidden" style={{ backgroundColor: '#86CA6B' }}>
                      <img
                        src={tree.image}
                        alt={tree.nameEnglish}
                        className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: '#000' }}>
                        {tree.nameEnglish}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3" style={{ color: '#86CA6B' }}>
                        {tree.nameKannada}
                      </p>
                      <p className="text-xs text-gray-600 italic mb-3 sm:mb-4">
                        {tree.scientificName}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4 sm:mb-5">
                        {tree.uses.slice(0, 2).map((use, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2 sm:px-3 py-1 rounded-full font-medium"
                            style={{ backgroundColor: '#F5FBF2', color: '#86CA6B', border: '1px solid #86CA6B' }}
                          >
                            {use}
                          </span>
                        ))}
                        {tree.uses.length > 2 && (
                          <span
                            className="text-xs px-2 sm:px-3 py-1 rounded-full font-medium"
                            style={{ backgroundColor: '#F5FBF2', color: '#86CA6B', border: '1px solid #86CA6B' }}
                          >
                            +{tree.uses.length - 2} more
                          </span>
                        )}
                      </div>

                      {/* Button */}
                      <button
                        className="w-full py-2 px-4 text-sm sm:text-base rounded-lg font-semibold transition-all duration-300 text-white cursor-pointer"
                        style={{ backgroundColor: '#86CA6B' }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#86CA6B'}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              {filteredTrees.length > itemsPerView && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-6 lg:-translate-x-12 z-10 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: '#86CA6B', color: 'white' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#86CA6B'}
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-6 lg:translate-x-12 z-10 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: '#86CA6B', color: 'white' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#86CA6B'}
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </>
              )}

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-8 sm:mt-10 lg:mt-12">
                {Array.from({ length: Math.ceil(filteredTrees.length / itemsPerView) }).map(
                  (_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCarouselIndex(idx)}
                      className="transition-all duration-300 rounded-full"
                      style={{
                        width: carouselIndex === idx ? '32px' : '10px',
                        height: '10px',
                        backgroundColor: carouselIndex === idx ? '#000' : '#86CA6B'
                      }}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
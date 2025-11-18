// import React, { useState, useEffect } from 'react';
// import { ChevronDown, Leaf, MapPin, BookOpen, QrCode, Home, Search, X, Copy, Check } from 'lucide-react';
// import Footer from './components/Footer';
// import Hero from './components/Hero';
// import { Cards } from './components/Cards';
// import Navbar from './components/Navbar';
// import Preloader from './components/Preloader';
// import ScrollVelocity from './components/ScrollVelocity';

// // Complete Tree Database
// const treeDatabase = [
//   {
//     id: 1,
//     nameKannada: "ಬೋಮ್ಮೆ",
//     nameEnglish: "Indian Fig",
//     scientificName: "Ficus benghalensis",
//     family: "Moraceae",
//     uses: ["Sacred tree", "Shade", "Medicinal", "Timber"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Ficus_benghalensis"
//   },
//   {
//     id: 2,
//     nameKannada: "ಅರ್ಜುನ",
//     nameEnglish: "Arjun Tree",
//     scientificName: "Terminalia arjuna",
//     family: "Combretaceae",
//     uses: ["Cardiac health", "Timber", "Dye production", "Tanning"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Terminalia_arjuna"
//   },
//   {
//     id: 3,
//     nameKannada: "ತುಳಸಿ",
//     nameEnglish: "Holy Basil",
//     scientificName: "Ocimum sanctum",
//     family: "Lamiaceae",
//     uses: ["Medicinal", "Religious", "Culinary", "Air purification"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Ocimum_sanctum"
//   },
//   {
//     id: 4,
//     nameKannada: "ನೀಮ್",
//     nameEnglish: "Neem",
//     scientificName: "Azadirachta indica",
//     family: "Meliaceae",
//     uses: ["Antibacterial", "Pesticide", "Medicinal", "Skin care"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Azadirachta_indica"
//   },
//   {
//     id: 5,
//     nameKannada: "ಮರಿ",
//     nameEnglish: "Drumstick",
//     scientificName: "Moringa oleifera",
//     family: "Moringaceae",
//     uses: ["Nutritious", "Medicinal", "Water purification", "Culinary"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Moringa_oleifera"
//   },
//   {
//     id: 6,
//     nameKannada: "ತೇಂಗಿನ ಮರ",
//     nameEnglish: "Coconut Palm",
//     scientificName: "Cocos nucifera",
//     family: "Arecaceae",
//     uses: ["Food", "Fiber", "Oil", "Timber"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Cocos_nucifera"
//   },
//   {
//     id: 7,
//     nameKannada: "ಮಾವಿನ ಮರ",
//     nameEnglish: "Mango",
//     scientificName: "Mangifera indica",
//     family: "Anacardiaceae",
//     uses: ["Fruit", "Shade", "Medicinal", "Timber"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Mangifera_indica"
//   },
//   {
//     id: 8,
//     nameKannada: "ಜೇಬೂಲ್",
//     nameEnglish: "Java Plum",
//     scientificName: "Syzygium cumini",
//     family: "Myrtaceae",
//     uses: ["Fruit", "Medicinal", "Timber", "Dye"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Syzygium_cumini"
//   },
//   {
//     id: 9,
//     nameKannada: "ತೊರಿನ ಮರ",
//     nameEnglish: "Sal Tree",
//     scientificName: "Shorea robusta",
//     family: "Dipterocarpaceae",
//     uses: ["Timber", "Resin", "Oil", "Wildlife habitat"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Shorea_robusta"
//   },
//   {
//     id: 10,
//     nameKannada: "ಸನೆ",
//     nameEnglish: "Sandalwood",
//     scientificName: "Santalum album",
//     family: "Santalaceae",
//     uses: ["Fragrance", "Medicinal", "Religious", "Timber"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Santalum_album"
//   },
//   {
//     id: 11,
//     nameKannada: "ಚನ್ನನ ಮರ",
//     nameEnglish: "Tamarind",
//     scientificName: "Tamarindus indica",
//     family: "Fabaceae",
//     uses: ["Culinary", "Medicinal", "Shade", "Timber"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Tamarindus_indica"
//   },
//   {
//     id: 12,
//     nameKannada: "ಹೋಪೆ",
//     nameEnglish: "Hopea",
//     scientificName: "Hopea parviflora",
//     family: "Dipterocarpaceae",
//     uses: ["Timber", "Resin", "Oil", "Shade"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Hopea_parviflora"
//   },
//   {
//     id: 13,
//     nameKannada: "ತೆಕ",
//     nameEnglish: "Teak",
//     scientificName: "Tectona grandis",
//     family: "Lamiaceae",
//     uses: ["Premium timber", "Furniture", "Shipbuilding", "Shade"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Tectona_grandis"
//   },
//   {
//     id: 14,
//     nameKannada: "ಕುಂಭಿ",
//     nameEnglish: "Rosewood",
//     scientificName: "Dalbergia sissoo",
//     family: "Fabaceae",
//     uses: ["Furniture", "Timber", "Medicinal", "Shade"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Dalbergia_sissoo"
//   },
//   {
//     id: 15,
//     nameKannada: "ಆವಾಗು",
//     nameEnglish: "Myrtle",
//     scientificName: "Myrtus communis",
//     family: "Myrtaceae",
//     uses: ["Medicinal", "Culinary", "Fragrance", "Ornamental"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Myrtus_communis"
//   },
//   {
//     id: 16,
//     nameKannada: "ಪುಷ್ಪ",
//     nameEnglish: "Ashoka",
//     scientificName: "Saraca asoca",
//     family: "Fabaceae",
//     uses: ["Religious", "Ornamental", "Medicinal", "Shade"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Saraca_asoca"
//   },
//   {
//     id: 17,
//     nameKannada: "ತುಲಸಿ",
//     nameEnglish: "Camphor",
//     scientificName: "Cinnamomum camphora",
//     family: "Lauraceae",
//     uses: ["Medicinal", "Fragrance", "Religious", "Timber"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Cinnamomum_camphora"
//   },
//   {
//     id: 18,
//     nameKannada: "ಕೆಸರಿ",
//     nameEnglish: "Saffron",
//     scientificName: "Crocus sativus",
//     family: "Iridaceae",
//     uses: ["Culinary", "Medicinal", "Dye", "Religious"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Crocus_sativus"
//   },
//   {
//     id: 19,
//     nameKannada: "ಜಿನೂರು",
//     nameEnglish: "Jasmine",
//     scientificName: "Jasminum officinale",
//     family: "Oleaceae",
//     uses: ["Fragrance", "Ornamental", "Medicinal", "Religious"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Jasminum_officinale"
//   },
//   {
//     id: 20,
//     nameKannada: "ಬಾಗೆ",
//     nameEnglish: "Banyan",
//     scientificName: "Ficus benghalensis",
//     family: "Moraceae",
//     uses: ["Sacred", "Shade", "Medicinal", "Timber"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Ficus_benghalensis"
//   },
//   {
//     id: 21,
//     nameKannada: "ಪೀಪೀ",
//     nameEnglish: "Peepal",
//     scientificName: "Ficus religiosa",
//     family: "Moraceae",
//     uses: ["Sacred", "Air purification", "Medicinal", "Shade"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Ficus_religiosa"
//   },
//   {
//     id: 22,
//     nameKannada: "ನುಲಿ",
//     nameEnglish: "Neem",
//     scientificName: "Azadirachta indica",
//     family: "Meliaceae",
//     uses: ["Pesticide", "Medicinal", "Antibacterial", "Shade"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Azadirachta_indica"
//   },
//   {
//     id: 23,
//     nameKannada: "ಅಗರುವು",
//     nameEnglish: "Agarwood",
//     scientificName: "Aquilaria agallocha",
//     family: "Thymelaeaceae",
//     uses: ["Fragrance", "Religious", "Medicinal", "Incense"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Aquilaria_agallocha"
//   },
//   {
//     id: 24,
//     nameKannada: "ಅರಿಶಿನ",
//     nameEnglish: "Neem",
//     scientificName: "Azadirachta indica",
//     family: "Meliaceae",
//     uses: ["Shade", "Medicinal", "Pesticide", "Water purification"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Azadirachta_indica"
//   },
//   {
//     id: 25,
//     nameKannada: "ಬೆಲೆ",
//     nameEnglish: "Bael",
//     scientificName: "Aegle marmelos",
//     family: "Rutaceae",
//     uses: ["Fruit", "Medicinal", "Religious", "Timber"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Aegle_marmelos"
//   },
//   {
//     id: 26,
//     nameKannada: "ದಾಡಿಮೆ",
//     nameEnglish: "Pomegranate",
//     scientificName: "Punica granatum",
//     family: "Lythraceae",
//     uses: ["Fruit", "Medicinal", "Ornamental", "Tanning"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Punica_granatum"
//   },
//   {
//     id: 27,
//     nameKannada: "ಶಿರೀಸ",
//     nameEnglish: "Siris",
//     scientificName: "Albizia lebbeck",
//     family: "Fabaceae",
//     uses: ["Shade", "Nitrogen fixation", "Timber", "Medicinal"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Albizia_lebbeck"
//   },
//   {
//     id: 28,
//     nameKannada: "ಹೋಲು",
//     nameEnglish: "Neem",
//     scientificName: "Azadirachta indica",
//     family: "Meliaceae",
//     uses: ["Timber", "Medicinal", "Pesticide", "Oil"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Azadirachta_indica"
//   },
//   {
//     id: 29,
//     nameKannada: "ಬಾವಲಿ",
//     nameEnglish: "Babul",
//     scientificName: "Acacia nilotica",
//     family: "Fabaceae",
//     uses: ["Tanning", "Gum", "Timber", "Shade"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Acacia_nilotica"
//   },
//   {
//     id: 30,
//     nameKannada: "ಪರಿಜಾತ",
//     nameEnglish: "Night Jasmine",
//     scientificName: "Cestrum nocturnum",
//     family: "Solanaceae",
//     uses: ["Ornamental", "Medicinal", "Shade", "Fragrance"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Cestrum_nocturnum"
//   },
//   {
//     id: 31,
//     nameKannada: "ಕುಪೆ",
//     nameEnglish: "Jamun",
//     scientificName: "Syzygium cumini",
//     family: "Myrtaceae",
//     uses: ["Fruit", "Timber", "Medicinal", "Shade"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Syzygium_cumini"
//   },
//   {
//     id: 32,
//     nameKannada: "ಪಲಾಶ",
//     nameEnglish: "Butea",
//     scientificName: "Butea monosperma",
//     family: "Fabaceae",
//     uses: ["Dye", "Medicinal", "Gum", "Resin"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Butea_monosperma"
//   },
//   {
//     id: 33,
//     nameKannada: "ಇಮ್ಲಿ",
//     nameEnglish: "Tamarind",
//     scientificName: "Tamarindus indica",
//     family: "Fabaceae",
//     uses: ["Culinary", "Shade", "Medicinal", "Timber"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Tamarindus_indica"
//   },
//   {
//     id: 34,
//     nameKannada: "ಬಿಹೂರ",
//     nameEnglish: "Bibhitaki",
//     scientificName: "Terminalia bellirica",
//     family: "Combretaceae",
//     uses: ["Medicinal", "Timber", "Dye", "Tanning"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Terminalia_bellirica"
//   },
//   {
//     id: 35,
//     nameKannada: "ಹರೀತಕ",
//     nameEnglish: "Haritaki",
//     scientificName: "Terminalia chebula",
//     family: "Combretaceae",
//     uses: ["Medicinal", "Dye", "Tanning", "Timber"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Terminalia_chebula"
//   },
//   {
//     id: 36,
//     nameKannada: "ಪೂಜೆ",
//     nameEnglish: "Boswellia",
//     scientificName: "Boswellia serrata",
//     family: "Burseraceae",
//     uses: ["Incense", "Medicinal", "Religious", "Resin"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Boswellia_serrata"
//   },
//   {
//     id: 37,
//     nameKannada: "ಗೋಲ",
//     nameEnglish: "Guggul",
//     scientificName: "Commiphora wightii",
//     family: "Burseraceae",
//     uses: ["Medicinal", "Religious", "Resin", "Perfume"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Commiphora_wightii"
//   },
//   {
//     id: 38,
//     nameKannada: "ಬೀಜ",
//     nameEnglish: "Mango",
//     scientificName: "Mangifera indica",
//     family: "Anacardiaceae",
//     uses: ["Fruit", "Shade", "Timber", "Medicinal"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Mangifera_indica"
//   },
//   {
//     id: 39,
//     nameKannada: "ತರೆ",
//     nameEnglish: "Sal",
//     scientificName: "Shorea robusta",
//     family: "Dipterocarpaceae",
//     uses: ["Timber", "Wildlife", "Resin", "Shade"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Shorea_robusta"
//   },
//   {
//     id: 40,
//     nameKannada: "ಬೊಮ್ಮೆ",
//     nameEnglish: "Fig",
//     scientificName: "Ficus carica",
//     family: "Moraceae",
//     uses: ["Fruit", "Medicinal", "Shade", "Timber"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Ficus_carica"
//   },
//   {
//     id: 41,
//     nameKannada: "ನುವಿನ",
//     nameEnglish: "Bamboo",
//     scientificName: "Bambusa vulgaris",
//     family: "Poaceae",
//     uses: ["Construction", "Paper", "Furniture", "Erosion control"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Bambusa_vulgaris"
//   },
//   {
//     id: 42,
//     nameKannada: "ಮುಲ್ಲೆ",
//     nameEnglish: "Mulberry",
//     scientificName: "Morus alba",
//     family: "Moraceae",
//     uses: ["Fruit", "Silkworm feed", "Shade", "Timber"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Morus_alba"
//   },
//   {
//     id: 43,
//     nameKannada: "ನೆಮ್ಪಾನೆ",
//     nameEnglish: "Neem",
//     scientificName: "Azadirachta indica",
//     family: "Meliaceae",
//     uses: ["Air purification", "Medicinal", "Pesticide", "Shade"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Azadirachta_indica"
//   },
//   {
//     id: 44,
//     nameKannada: "ಕಾಡಿ",
//     nameEnglish: "Kadamba",
//     scientificName: "Neolamarckia cadamba",
//     family: "Rubiaceae",
//     uses: ["Religious", "Shade", "Medicinal", "Timber"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Neolamarckia_cadamba"
//   },
//   {
//     id: 45,
//     nameKannada: "ಬರೈ",
//     nameEnglish: "Barai",
//     scientificName: "Ziziphus mauritiana",
//     family: "Rhamnaceae",
//     uses: ["Fruit", "Shade", "Medicinal", "Timber"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Ziziphus_mauritiana"
//   },
//   {
//     id: 46,
//     nameKannada: "ಉತ್ತೆ",
//     nameEnglish: "Utte",
//     scientificName: "Calophyllum inophyllum",
//     family: "Clusiaceae",
//     uses: ["Oil", "Medicinal", "Timber", "Cosmetics"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Calophyllum_inophyllum"
//   },
//   {
//     id: 47,
//     nameKannada: "ಮರಿಯನ",
//     nameEnglish: "Myroba",
//     scientificName: "Salvadora persica",
//     family: "Salvadoraceae",
//     uses: ["Medicinal", "Toothbrush", "Shade", "Fodder"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Salvadora_persica"
//   },
//   {
//     id: 48,
//     nameKannada: "ಪುಟ",
//     nameEnglish: "Sapota",
//     scientificName: "Manilkara zapota",
//     family: "Sapotaceae",
//     uses: ["Fruit", "Medicinal", "Shade", "Timber"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Manilkara_zapota"
//   },
//   {
//     id: 49,
//     nameKannada: "ಕೆನಿ",
//     nameEnglish: "Kani",
//     scientificName: "Ailanthus excelsa",
//     family: "Simaroubaceae",
//     uses: ["Timber", "Shade", "Medicinal", "Nitrogen fixation"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Ailanthus_excelsa"
//   },
//   {
//     id: 50,
//     nameKannada: "ಬೀಯು",
//     nameEnglish: "Beyu",
//     scientificName: "Artocarpus hirsutus",
//     family: "Moraceae",
//     uses: ["Fruit", "Timber", "Shade", "Wildlife habitat"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Artocarpus_hirsutus"
//   },
//   {
//     id: 51,
//     nameKannada: "ಅಮ್ಬೆ",
//     nameEnglish: "Mango",
//     scientificName: "Mangifera indica",
//     family: "Anacardiaceae",
//     uses: ["Fruit", "Shade", "Timber", "Ornamental"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Mangifera_indica"
//   },
//   {
//     id: 52,
//     nameKannada: "ಹಚ್ಚ",
//     nameEnglish: "Hach",
//     scientificName: "Madhuca longifolia",
//     family: "Sapotaceae",
//     uses: ["Oil", "Medicinal", "Shade", "Timber"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Madhuca_longifolia"
//   },
//   {
//     id: 53,
//     nameKannada: "ಗೋಪೀ",
//     nameEnglish: "Gopi",
//     scientificName: "Thespesia populnea",
//     family: "Malvaceae",
//     uses: ["Shade", "Timber", "Medicinal", "Ornamental"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Thespesia_populnea"
//   },
//   {
//     id: 54,
//     nameKannada: "ಮಗುಳಿ",
//     nameEnglish: "Magnolia",
//     scientificName: "Magnolia grandiflora",
//     family: "Magnoliaceae",
//     uses: ["Ornamental", "Shade", "Timber", "Medicinal"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Magnolia_grandiflora"
//   },
//   {
//     id: 55,
//     nameKannada: "ಪುಷ್ಪ",
//     nameEnglish: "Flower",
//     scientificName: "Lagerstroemia indica",
//     family: "Lythraceae",
//     uses: ["Ornamental", "Shade", "Timber", "Medicinal"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Lagerstroemia_indica"
//   },
//   {
//     id: 56,
//     nameKannada: "ಕೃಷ್ಣ ಚಂದ",
//     nameEnglish: "Krishna Chandan",
//     scientificName: "Hopea parviflora",
//     family: "Dipterocarpaceae",
//     uses: ["Timber", "Shade", "Resin", "Oil"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Hopea_parviflora"
//   },
//   {
//     id: 57,
//     nameKannada: "ಪೂಜೇ",
//     nameEnglish: "Pujae",
//     scientificName: "Cupressus sempervirens",
//     family: "Cupressaceae",
//     uses: ["Ornamental", "Timber", "Shade", "Religious"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Cupressus_sempervirens"
//   },
//   {
//     id: 58,
//     nameKannada: "ಸೀಮೆ",
//     nameEnglish: "Seema",
//     scientificName: "Pinus roxburghii",
//     family: "Pinaceae",
//     uses: ["Timber", "Resin", "Shade", "Oil"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Pinus_roxburghii"
//   },
//   {
//     id: 59,
//     nameKannada: "ತರೈ",
//     nameEnglish: "Tarai",
//     scientificName: "Dipterocarpus indicus",
//     family: "Dipterocarpaceae",
//     uses: ["Timber", "Oil", "Shade", "Wildlife habitat"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Dipterocarpus_indicus"
//   },
//   {
//     id: 60,
//     nameKannada: "ನೃಪಾತೆ",
//     nameEnglish: "Nripate",
//     scientificName: "Artocarpus chaplasha",
//     family: "Moraceae",
//     uses: ["Fruit", "Timber", "Shade", "Wildlife"],
//     wikipediaLink: "https://en.wikipedia.org/wiki/Artocarpus_chaplasha"
//   }
// ];

// // QR Code Generator using QR API
// const generateQRImage = (text) => {
//   return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}&color=000000&bgcolor=ffffff`;
// };

// export default function App() {
//   const [currentPage, setCurrentPage] = useState('home');
//   const [selectedTree, setSelectedTree] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [menuOpen, setMenuOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Filter trees based on search
//   const filteredTrees = treeDatabase.filter(tree =>
//     tree.nameKannada.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     tree.nameEnglish.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     tree.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleTreeClick = (tree) => {
//     setSelectedTree(tree);
//     setCurrentPage('detail');
//     window.scrollTo(0, 0);
//   };

//   const handleBackHome = () => {
//     setCurrentPage('home');
//     setSearchTerm('');
//     setMenuOpen(false);
//   };

//   return (
//     <div className="min-h-screen bg-[#F5FBF2]">
//       <Preloader />
//  {/* Navbar */}
// <Navbar />


//       {/* Home Page */}
//       {currentPage === 'home' && (
//         <>
//           {/* Hero Section */}
//           <Hero />
         
// <Cards />

// <ScrollVelocity
//   texts={[
//     <span className="text-[#0B2418]">Treepedia</span>,
//     <span className="text-[#86CA6B]">Explore • Learn • Preserve •</span>
//   ]}
//   className="custom-scroll-text bg-[#F5FBF2]"
// />



//           {/* Main Content - Trees Grid */}
//           <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//             <div className="mb-12">
//               <h2 className="text-4xl font-bold text-emerald-900 mb-4">
//                 Our Tree Collection
//               </h2>
//               <p className="text-gray-700 text-lg">
//                 Explore {filteredTrees.length} amazing trees with detailed information and QR codes
//               </p>
//             </div>

//             {filteredTrees.length === 0 ? (
//               <div className="text-center py-16">
//                 <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//                 <p className="text-2xl text-gray-600">No trees found matching your search</p>
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {filteredTrees.map((tree) => (
//                   <div
//                     key={tree.id}
//                     onClick={() => handleTreeClick(tree)}
//                     className="bg-white rounded-xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-emerald-100"
//                   >
//                     <div className="h-48 bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
//                       <Leaf className="w-20 h-20 text-white opacity-50" />
//                     </div>
//                     <div className="p-6">
//                       <h3 className="text-xl font-bold text-emerald-900 mb-2">
//                         {tree.nameEnglish}
//                       </h3>
//                       <p className="text-sm text-emerald-700 font-semibold mb-2">
//                         {tree.nameKannada}
//                       </p>
//                       <p className="text-sm text-gray-600 italic mb-4">
//                         {tree.scientificName}
//                       </p>
//                       <div className="flex flex-wrap gap-2 mb-4">
//                         {tree.uses.slice(0, 2).map((use, idx) => (
//                           <span
//                             key={idx}
//                             className="text-xs bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full"
//                           >
//                             {use}
//                           </span>
//                         ))}
//                         {tree.uses.length > 2 && (
//                           <span className="text-xs bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
//                             +{tree.uses.length - 2} more
//                           </span>
//                         )}
//                       </div>
//                       <button className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition font-semibold">
//                         View Details
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </section>
//           <Footer />
//         </>
//       )}

//       {/* Detail Page */}
//       {currentPage === 'detail' && selectedTree && (
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <button
//             onClick={handleBackHome}
//             className="mb-8 flex items-center gap-2 text-emerald-700 hover:text-emerald-900 font-semibold transition"
//           >
//             <ChevronDown className="w-5 h-5 rotate-90" />
//             Back to Trees
//           </button>

//           <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-emerald-100">
//             {/* Header Image */}
//             <div className="h-64 bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center relative">
//               <Leaf className="w-32 h-32 text-white opacity-30" />
//             </div>

//             {/* Content */}
//             <div className="p-8 md:p-12">
//               {/* Tree Names */}
//               <div className="mb-8">
//                 <h1 className="text-5xl font-bold text-emerald-900 mb-2">
//                   {selectedTree.nameEnglish}
//                 </h1>
//                 <p className="text-2xl text-emerald-700 font-semibold mb-4">
//                   {selectedTree.nameKannada}
//                 </p>
//                 <p className="text-lg text-gray-600 italic">
//                   {selectedTree.scientificName}
//                 </p>
//               </div>

//               {/* Family & Details */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//                 <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
//                   <h3 className="text-lg font-bold text-emerald-900 mb-2 flex items-center gap-2">
//                     <BookOpen className="w-5 h-5" />
//                     Family
//                   </h3>
//                   <p className="text-gray-700 text-lg">{selectedTree.family}</p>
//                 </div>

//                 <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
//                   <h3 className="text-lg font-bold text-teal-900 mb-2 flex items-center gap-2">
//                     <MapPin className="w-5 h-5" />
//                     Scientific Classification
//                   </h3>
//                   <p className="text-gray-700">{selectedTree.scientificName}</p>
//                 </div>
//               </div>

//               {/* Uses Section */}
//               <div className="mb-12">
//                 <h2 className="text-3xl font-bold text-emerald-900 mb-6">Uses & Benefits</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {selectedTree.uses.map((use, idx) => (
//                     <div
//                       key={idx}
//                       className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border-l-4 border-emerald-600 hover:shadow-md transition"
//                     >
//                       <p className="text-gray-800 font-semibold">{use}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* QR Codes Section */}
//               <div className="mb-12">
//                 <h2 className="text-3xl font-bold text-emerald-900 mb-6 flex items-center gap-2">
//                   <QrCode className="w-8 h-8" />
//                   Quick Links
//                 </h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//                   {/* Information QR Code */}
//                   <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border-2 border-blue-200 flex flex-col items-center">
//                     <h3 className="text-xl font-bold text-blue-900 mb-4">
//                       Tree Information
//                     </h3>
//                     <div className="bg-white p-4 rounded-lg shadow-md mb-4 border border-blue-100">
//                       <img
//                         src={generateQRImage(`Tree Info: ${selectedTree.nameEnglish} - ${selectedTree.scientificName} - Family: ${selectedTree.family} - Uses: ${selectedTree.uses.join(', ')}`)}
//                         alt="Tree Information QR Code"
//                         className="w-48 h-48"
//                       />
//                     </div>
//                     <p className="text-sm text-blue-700 text-center">
//                       Scan to view detailed information about this tree
//                     </p>
//                   </div>

//                   {/* Wikipedia QR Code */}
//                   <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl border-2 border-orange-200 flex flex-col items-center">
//                     <h3 className="text-xl font-bold text-orange-900 mb-4">
//                       Wikipedia Link
//                     </h3>
//                     <div className="bg-white p-4 rounded-lg shadow-md mb-4 border border-orange-100">
//                       <img
//                         src={generateQRImage(selectedTree.wikipediaLink)}
//                         alt="Wikipedia QR Code"
//                         className="w-48 h-48"
//                       />
//                     </div>
//                     <p className="text-sm text-orange-700 text-center">
//                       Scan to visit Wikipedia article
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* External Links */}
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <a
//                   href={selectedTree.wikipediaLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition text-center font-semibold"
//                 >
//                   Visit Wikipedia
//                 </a>
//                 <button
//                   onClick={handleBackHome}
//                   className="flex-1 bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition font-semibold"
//                 >
//                   Explore More Trees
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Related Trees */}
//           <div className="mt-16">
//             <h2 className="text-3xl font-bold text-emerald-900 mb-8">Related Trees</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {treeDatabase
//                 .filter(
//                   (tree) =>
//                     tree.family === selectedTree.family &&
//                     tree.id !== selectedTree.id
//                 )
//                 .slice(0, 3)
//                 .map((tree) => (
//                   <div
//                     key={tree.id}
//                     onClick={() => handleTreeClick(tree)}
//                     className="bg-white rounded-xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-emerald-100"
//                   >
//                     <div className="h-32 bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
//                       <Leaf className="w-12 h-12 text-white opacity-50" />
//                     </div>
//                     <div className="p-4">
//                       <h3 className="text-lg font-bold text-emerald-900">
//                         {tree.nameEnglish}
//                       </h3>
//                       <p className="text-sm text-emerald-700 font-semibold mb-2">
//                         {tree.nameKannada}
//                       </p>
//                       <p className="text-xs text-gray-600 italic">
//                         {tree.scientificName}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, Leaf, MapPin, BookOpen, QrCode, Home, Search, X, Copy, Check } from 'lucide-react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import { Cards } from './components/Cards';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import ScrollVelocity from './components/ScrollVelocity';

// Complete Tree Database with Unsplash Images
const treeDatabase = [
  { id: 1, nameKannada: "ಬೋಮ್ಮೆ", nameEnglish: "Indian Fig", scientificName: "Ficus benghalensis", family: "Moraceae", uses: ["Sacred tree", "Shade", "Medicinal", "Timber"], image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Ficus_benghalensis" },
  { id: 2, nameKannada: "ಅರ್ಜುನ", nameEnglish: "Arjun Tree", scientificName: "Terminalia arjuna", family: "Combretaceae", uses: ["Cardiac health", "Timber", "Dye production", "Tanning"], image: "https://images.unsplash.com/photo-1502082176498-c1efb75caf4d?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Terminalia_arjuna" },
  { id: 3, nameKannada: "ತುಳಸಿ", nameEnglish: "Holy Basil", scientificName: "Ocimum sanctum", family: "Lamiaceae", uses: ["Medicinal", "Religious", "Culinary", "Air purification"], image: "https://images.unsplash.com/photo-1596848212624-753bb62dc66a?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Ocimum_sanctum" },
  { id: 4, nameKannada: "ನೀಮ್", nameEnglish: "Neem", scientificName: "Azadirachta indica", family: "Meliaceae", uses: ["Antibacterial", "Pesticide", "Medicinal", "Skin care"], image: "https://images.unsplash.com/photo-1501004318331-fafa05d87b3f?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Azadirachta_indica" },
  { id: 5, nameKannada: "ಮರಿ", nameEnglish: "Drumstick", scientificName: "Moringa oleifera", family: "Moringaceae", uses: ["Nutritious", "Medicinal", "Water purification", "Culinary"], image: "https://images.unsplash.com/photo-1502082176498-c1efb75caf4d?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Moringa_oleifera" },
  { id: 6, nameKannada: "ತೇಂಗಿನ ಮರ", nameEnglish: "Coconut Palm", scientificName: "Cocos nucifera", family: "Arecaceae", uses: ["Food", "Fiber", "Oil", "Timber"], image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Cocos_nucifera" },
  { id: 7, nameKannada: "ಮಾವಿನ ಮರ", nameEnglish: "Mango", scientificName: "Mangifera indica", family: "Anacardiaceae", uses: ["Fruit", "Shade", "Medicinal", "Timber"], image: "https://images.unsplash.com/photo-1570913149771-b7592f0b33d3?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Mangifera_indica" },
  { id: 8, nameKannada: "ಜೇಬೂಲ್", nameEnglish: "Java Plum", scientificName: "Syzygium cumini", family: "Myrtaceae", uses: ["Fruit", "Medicinal", "Timber", "Dye"], image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Syzygium_cumini" },
  { id: 9, nameKannada: "ತೊರಿನ ಮರ", nameEnglish: "Sal Tree", scientificName: "Shorea robusta", family: "Dipterocarpaceae", uses: ["Timber", "Resin", "Oil", "Wildlife habitat"], image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Shorea_robusta" },
  { id: 10, nameKannada: "ಸನೆ", nameEnglish: "Sandalwood", scientificName: "Santalum album", family: "Santalaceae", uses: ["Fragrance", "Medicinal", "Religious", "Timber"], image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Santalum_album" },
  { id: 11, nameKannada: "ಚನ್ನನ ಮರ", nameEnglish: "Tamarind", scientificName: "Tamarindus indica", family: "Fabaceae", uses: ["Culinary", "Medicinal", "Shade", "Timber"], image: "https://images.unsplash.com/photo-1502082176498-c1efb75caf4d?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Tamarindus_indica" },
  { id: 12, nameKannada: "ಹೋಪೆ", nameEnglish: "Hopea", scientificName: "Hopea parviflora", family: "Dipterocarpaceae", uses: ["Timber", "Resin", "Oil", "Shade"], image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Hopea_parviflora" },
  { id: 13, nameKannada: "ತೆಕ", nameEnglish: "Teak", scientificName: "Tectona grandis", family: "Lamiaceae", uses: ["Premium timber", "Furniture", "Shipbuilding", "Shade"], image: "https://images.unsplash.com/photo-1502082176498-c1efb75caf4d?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Tectona_grandis" },
  { id: 14, nameKannada: "ಕುಂಭಿ", nameEnglish: "Rosewood", scientificName: "Dalbergia sissoo", family: "Fabaceae", uses: ["Furniture", "Timber", "Medicinal", "Shade"], image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Dalbergia_sissoo" },
  { id: 15, nameKannada: "ಆವಾಗು", nameEnglish: "Myrtle", scientificName: "Myrtus communis", family: "Myrtaceae", uses: ["Medicinal", "Culinary", "Fragrance", "Ornamental"], image: "https://images.unsplash.com/photo-1596848212624-753bb62dc66a?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Myrtus_communis" },
  { id: 16, nameKannada: "ಪುಷ್ಪ", nameEnglish: "Ashoka", scientificName: "Saraca asoca", family: "Fabaceae", uses: ["Religious", "Ornamental", "Medicinal", "Shade"], image: "https://images.unsplash.com/photo-1502082176498-c1efb75caf4d?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Saraca_asoca" },
  { id: 17, nameKannada: "ತುಲಸಿ", nameEnglish: "Camphor", scientificName: "Cinnamomum camphora", family: "Lauraceae", uses: ["Medicinal", "Fragrance", "Religious", "Timber"], image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Cinnamomum_camphora" },
  { id: 18, nameKannada: "ಕೆಸರಿ", nameEnglish: "Saffron", scientificName: "Crocus sativus", family: "Iridaceae", uses: ["Culinary", "Medicinal", "Dye", "Religious"], image: "https://images.unsplash.com/photo-1596848212624-753bb62dc66a?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Crocus_sativus" },
  { id: 19, nameKannada: "ಜಿನೂರು", nameEnglish: "Jasmine", scientificName: "Jasminum officinale", family: "Oleaceae", uses: ["Fragrance", "Ornamental", "Medicinal", "Religious"], image: "https://images.unsplash.com/photo-1596848212624-753bb62dc66a?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Jasminum_officinale" },
  { id: 20, nameKannada: "ಬಾಗೆ", nameEnglish: "Banyan", scientificName: "Ficus benghalensis", family: "Moraceae", uses: ["Sacred", "Shade", "Medicinal", "Timber"], image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Ficus_benghalensis" },
  { id: 21, nameKannada: "ಪೀಪೀ", nameEnglish: "Peepal", scientificName: "Ficus religiosa", family: "Moraceae", uses: ["Sacred", "Air purification", "Medicinal", "Shade"], image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Ficus_religiosa" },
  { id: 22, nameKannada: "ನುಲಿ", nameEnglish: "Neem", scientificName: "Azadirachta indica", family: "Meliaceae", uses: ["Pesticide", "Medicinal", "Antibacterial", "Shade"], image: "https://images.unsplash.com/photo-1501004318331-fafa05d87b3f?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Azadirachta_indica" },
  { id: 23, nameKannada: "ಅಗರುವು", nameEnglish: "Agarwood", scientificName: "Aquilaria agallocha", family: "Thymelaeaceae", uses: ["Fragrance", "Religious", "Medicinal", "Incense"], image: "https://images.unsplash.com/photo-1596848212624-753bb62dc66a?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Aquilaria_agallocha" },
  { id: 24, nameKannada: "ಅರಿಶಿನ", nameEnglish: "Neem", scientificName: "Azadirachta indica", family: "Meliaceae", uses: ["Shade", "Medicinal", "Pesticide", "Water purification"], image: "https://images.unsplash.com/photo-1501004318331-fafa05d87b3f?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Azadirachta_indica" },
  { id: 25, nameKannada: "ಬೆಲೆ", nameEnglish: "Bael", scientificName: "Aegle marmelos", family: "Rutaceae", uses: ["Fruit", "Medicinal", "Religious", "Timber"], image: "https://images.unsplash.com/photo-1502082176498-c1efb75caf4d?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Aegle_marmelos" },
  { id: 26, nameKannada: "ದಾಡಿಮೆ", nameEnglish: "Pomegranate", scientificName: "Punica granatum", family: "Lythraceae", uses: ["Fruit", "Medicinal", "Ornamental", "Tanning"], image: "https://images.unsplash.com/photo-1570913149771-b7592f0b33d3?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Punica_granatum" },
  { id: 27, nameKannada: "ಶಿರೀಸ", nameEnglish: "Siris", scientificName: "Albizia lebbeck", family: "Fabaceae", uses: ["Shade", "Nitrogen fixation", "Timber", "Medicinal"], image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Albizia_lebbeck" },
  { id: 28, nameKannada: "ಹೋಲು", nameEnglish: "Neem", scientificName: "Azadirachta indica", family: "Meliaceae", uses: ["Timber", "Medicinal", "Pesticide", "Oil"], image: "https://images.unsplash.com/photo-1501004318331-fafa05d87b3f?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Azadirachta_indica" },
  { id: 29, nameKannada: "ಬಾವಲಿ", nameEnglish: "Babul", scientificName: "Acacia nilotica", family: "Fabaceae", uses: ["Tanning", "Gum", "Timber", "Shade"], image: "https://images.unsplash.com/photo-1502082176498-c1efb75caf4d?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Acacia_nilotica" },
  { id: 30, nameKannada: "ಪರಿಜಾತ", nameEnglish: "Night Jasmine", scientificName: "Cestrum nocturnum", family: "Solanaceae", uses: ["Ornamental", "Medicinal", "Shade", "Fragrance"], image: "https://images.unsplash.com/photo-1596848212624-753bb62dc66a?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Cestrum_nocturnum" },
  { id: 31, nameKannada: "ಕುಪೆ", nameEnglish: "Jamun", scientificName: "Syzygium cumini", family: "Myrtaceae", uses: ["Fruit", "Timber", "Medicinal", "Shade"], image: "https://images.unsplash.com/photo-1570913149771-b7592f0b33d3?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Syzygium_cumini" },
  { id: 32, nameKannada: "ಪಲಾಶ", nameEnglish: "Butea", scientificName: "Butea monosperma", family: "Fabaceae", uses: ["Dye", "Medicinal", "Gum", "Resin"], image: "https://images.unsplash.com/photo-1502082176498-c1efb75caf4d?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Butea_monosperma" },
  { id: 33, nameKannada: "ಇಮ್ಲಿ", nameEnglish: "Tamarind", scientificName: "Tamarindus indica", family: "Fabaceae", uses: ["Culinary", "Shade", "Medicinal", "Timber"], image: "https://images.unsplash.com/photo-1502082176498-c1efb75caf4d?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Tamarindus_indica" },
  { id: 34, nameKannada: "ಬಿಹೂರ", nameEnglish: "Bibhitaki", scientificName: "Terminalia bellirica", family: "Combretaceae", uses: ["Medicinal", "Timber", "Dye", "Tanning"], image: "https://images.unsplash.com/photo-1502082176498-c1efb75caf4d?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Terminalia_bellirica" },
  { id: 35, nameKannada: "ಹರೀತಕ", nameEnglish: "Haritaki", scientificName: "Terminalia chebula", family: "Combretaceae", uses: ["Medicinal", "Dye", "Tanning", "Timber"], image: "https://images.unsplash.com/photo-1502082176498-c1efb75caf4d?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Terminalia_chebula" },
  { id: 36, nameKannada: "ಪೂಜೆ", nameEnglish: "Boswellia", scientificName: "Boswellia serrata", family: "Burseraceae", uses: ["Incense", "Medicinal", "Religious", "Resin"], image: "https://images.unsplash.com/photo-1596848212624-753bb62dc66a?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Boswellia_serrata" },
  { id: 37, nameKannada: "ಗೋಲ", nameEnglish: "Guggul", scientificName: "Commiphora wightii", family: "Burseraceae", uses: ["Medicinal", "Religious", "Resin", "Perfume"], image: "https://images.unsplash.com/photo-1596848212624-753bb62dc66a?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Commiphora_wightii" },
  { id: 38, nameKannada: "ಬೀಜ", nameEnglish: "Mango", scientificName: "Mangifera indica", family: "Anacardiaceae", uses: ["Fruit", "Shade", "Timber", "Medicinal"], image: "https://images.unsplash.com/photo-1570913149771-b7592f0b33d3?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Mangifera_indica" },
  { id: 39, nameKannada: "ತರೆ", nameEnglish: "Sal", scientificName: "Shorea robusta", family: "Dipterocarpaceae", uses: ["Timber", "Wildlife", "Resin", "Shade"], image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Shorea_robusta" },
  { id: 40, nameKannada: "ಬೊಮ್ಮೆ", nameEnglish: "Fig", scientificName: "Ficus carica", family: "Moraceae", uses: ["Fruit", "Medicinal", "Shade", "Timber"], image: "https://images.unsplash.com/photo-1570913149771-b7592f0b33d3?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Ficus_carica" },
  { id: 41, nameKannada: "ನುವಿನ", nameEnglish: "Bamboo", scientificName: "Bambusa vulgaris", family: "Poaceae", uses: ["Construction", "Paper", "Furniture", "Erosion control"], image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Bambusa_vulgaris" },
  { id: 42, nameKannada: "ಮುಲ್ಲೆ", nameEnglish: "Mulberry", scientificName: "Morus alba", family: "Moraceae", uses: ["Fruit", "Silkworm feed", "Shade", "Timber"], image: "https://images.unsplash.com/photo-1570913149771-b7592f0b33d3?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Morus_alba" },
  { id: 43, nameKannada: "ನೆಮ್ಪಾನೆ", nameEnglish: "Neem", scientificName: "Azadirachta indica", family: "Meliaceae", uses: ["Air purification", "Medicinal", "Pesticide", "Shade"], image: "https://images.unsplash.com/photo-1501004318331-fafa05d87b3f?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Azadirachta_indica" },
  { id: 44, nameKannada: "ಕಾಡಿ", nameEnglish: "Kadamba", scientificName: "Neolamarckia cadamba", family: "Rubiaceae", uses: ["Religious", "Shade", "Medicinal", "Timber"], image: "https://images.unsplash.com/photo-1502082176498-c1efb75caf4d?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Neolamarckia_cadamba" },
  { id: 45, nameKannada: "ಬರೈ", nameEnglish: "Barai", scientificName: "Ziziphus mauritiana", family: "Rhamnaceae", uses: ["Fruit", "Shade", "Medicinal", "Timber"], image: "https://images.unsplash.com/photo-1570913149771-b7592f0b33d3?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Ziziphus_mauritiana" },
  { id: 46, nameKannada: "ಉತ್ತೆ", nameEnglish: "Utte", scientificName: "Calophyllum inophyllum", family: "Clusiaceae", uses: ["Oil", "Medicinal", "Timber", "Cosmetics"], image: "https://images.unsplash.com/photo-1596848212624-753bb62dc66a?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Calophyllum_inophyllum" },
  { id: 47, nameKannada: "ಮರಿಯನ", nameEnglish: "Myroba", scientificName: "Salvadora persica", family: "Salvadoraceae", uses: ["Medicinal", "Toothbrush", "Shade", "Fodder"], image: "https://images.unsplash.com/photo-1502082176498-c1efb75caf4d?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Salvadora_persica" },
  { id: 48, nameKannada: "ಪುಟ", nameEnglish: "Sapota", scientificName: "Manilkara zapota", family: "Sapotaceae", uses: ["Fruit", "Medicinal", "Shade", "Timber"], image: "https://images.unsplash.com/photo-1570913149771-b7592f0b33d3?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Manilkara_zapota" },
  { id: 49, nameKannada: "ಕೆನಿ", nameEnglish: "Kani", scientificName: "Ailanthus excelsa", family: "Simaroubaceae", uses: ["Timber", "Shade", "Medicinal", "Nitrogen fixation"], image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Ailanthus_excelsa" },
  { id: 50, nameKannada: "ಬೀಯು", nameEnglish: "Beyu", scientificName: "Artocarpus hirsutus", family: "Moraceae", uses: ["Fruit", "Timber", "Shade", "Wildlife habitat"], image: "https://images.unsplash.com/photo-1502082176498-c1efb75caf4d?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Artocarpus_hirsutus" },
  { id: 51, nameKannada: "ಅಮ್ಬೆ", nameEnglish: "Mango", scientificName: "Mangifera indica", family: "Anacardiaceae", uses: ["Fruit", "Shade", "Timber", "Ornamental"], image: "https://images.unsplash.com/photo-1570913149771-b7592f0b33d3?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Mangifera_indica" },
  { id: 52, nameKannada: "ಹಚ್ಚ", nameEnglish: "Hach", scientificName: "Madhuca longifolia", family: "Sapotaceae", uses: ["Oil", "Medicinal", "Shade", "Timber"], image: "https://images.unsplash.com/photo-1596848212624-753bb62dc66a?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Madhuca_longifolia" },
  { id: 53, nameKannada: "ಗೋಪೀ", nameEnglish: "Gopi", scientificName: "Thespesia populnea", family: "Malvaceae", uses: ["Shade", "Timber", "Medicinal", "Ornamental"], image: "https://images.unsplash.com/photo-1502082176498-c1efb75caf4d?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Thespesia_populnea" },
  { id: 54, nameKannada: "ಮಗುಳಿ", nameEnglish: "Magnolia", scientificName: "Magnolia grandiflora", family: "Magnoliaceae", uses: ["Ornamental", "Shade", "Timber", "Medicinal"], image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Magnolia_grandiflora" },
  { id: 55, nameKannada: "ಪುಷ್ಪ", nameEnglish: "Flower", scientificName: "Lagerstroemia indica", family: "Lythraceae", uses: ["Ornamental", "Shade", "Timber", "Medicinal"], image: "https://images.unsplash.com/photo-1596848212624-753bb62dc66a?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Lagerstroemia_indica" },
  { id: 56, nameKannada: "ಕೃಷ್ಣ ಚಂದ", nameEnglish: "Krishna Chandan", scientificName: "Hopea parviflora", family: "Dipterocarpaceae", uses: ["Timber", "Shade", "Resin", "Oil"], image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Hopea_parviflora" },
  { id: 57, nameKannada: "ಪೂಜೇ", nameEnglish: "Pujae", scientificName: "Cupressus sempervirens", family: "Cupressaceae", uses: ["Ornamental", "Timber", "Shade", "Religious"], image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Cupressus_sempervirens" },
  { id: 58, nameKannada: "ಸೀಮೆ", nameEnglish: "Seema", scientificName: "Pinus roxburghii", family: "Pinaceae", uses: ["Timber", "Resin", "Shade", "Oil"], image: "https://images.unsplash.com/photo-1502082176498-c1efb75caf4d?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Pinus_roxburghii" },
  { id: 59, nameKannada: "ತರೈ", nameEnglish: "Tarai", scientificName: "Dipterocarpus indicus", family: "Dipterocarpaceae", uses: ["Timber", "Oil", "Shade", "Wildlife habitat"], image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Dipterocarpus_indicus" },
  { id: 60, nameKannada: "ನೃಪಾತೆ", nameEnglish: "Nripate", scientificName: "Artocarpus chaplasha", family: "Moraceae", uses: ["Fruit", "Timber", "Shade", "Wildlife"], image: "https://images.unsplash.com/photo-1502082176498-c1efb75caf4d?w=500&h=500&fit=crop", wikipediaLink: "https://en.wikipedia.org/wiki/Artocarpus_chaplasha" }
];

// QR Code Generator using QR API
const generateQRImage = (text) => {
  return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}&color=000000&bgcolor=ffffff`;
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedTree, setSelectedTree] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
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

  // Filter trees based on search
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

  const handleTreeClick = (tree) => {
    setSelectedTree(tree);
    setCurrentPage('detail');
    window.scrollTo(0, 0);
  };

  const handleBackHome = () => {
    setCurrentPage('home');
    setSearchTerm('');
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5FBF2' }}>
      <Preloader />
      <Navbar />

      {/* Home Page */}
      {currentPage === 'home' && (
        <>
          <Hero />
          <Cards />
          <ScrollVelocity
            texts={[
              <span style={{ color: '#000' }}>Treepedia</span>,
              <span style={{ color: '#86CA6B' }}>Explore • Learn • Preserve •</span>
            ]}
            className="custom-scroll-text"
            style={{ backgroundColor: '#F5FBF2' }}
          />

          {/* Main Content - Trees Carousel */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#000' }}>
                Our Tree Collection
              </h2>
              <p className="text-lg" style={{ color: '#000' }}>
                Explore {filteredTrees.length} amazing trees with detailed information and QR codes
              </p>
            </div>

            {filteredTrees.length === 0 ? (
              <div className="text-center py-16">
                <Search className="w-16 h-16 mx-auto mb-4" style={{ color: '#86CA6B' }} />
                <p className="text-2xl" style={{ color: '#000' }}>No trees found matching your search</p>
              </div>
            ) : (
              <div className="relative">
                {/* Carousel */}
                <div className="flex gap-6">
                  {visibleTrees.map((tree) => (
                    <div
                      key={tree.id}
                      onClick={() => handleTreeClick(tree)}
                      className="flex-1 min-w-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden border-2"
                      style={{ borderColor: '#86CA6B' }}
                    >
                      {/* Tree Image */}
                      <div className="h-56 relative overflow-hidden" style={{ backgroundColor: '#86CA6B' }}>
                        <img
                          src={tree.image}
                          alt={tree.nameEnglish}
                          className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2" style={{ color: '#000' }}>
                          {tree.nameEnglish}
                        </h3>
                        <p className="text-sm font-semibold mb-3" style={{ color: '#86CA6B' }}>
                          {tree.nameKannada}
                        </p>
                        <p className="text-xs text-gray-600 italic mb-4">
                          {tree.scientificName}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-5">
                          {tree.uses.slice(0, 2).map((use, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-3 py-1 rounded-full font-medium"
                              style={{ backgroundColor: '#F5FBF2', color: '#86CA6B', border: '1px solid #86CA6B' }}
                            >
                              {use}
                            </span>
                          ))}
                          {tree.uses.length > 2 && (
                            <span
                              className="text-xs px-3 py-1 rounded-full font-medium"
                              style={{ backgroundColor: '#F5FBF2', color: '#86CA6B', border: '1px solid #86CA6B' }}
                            >
                              +{tree.uses.length - 2} more
                            </span>
                          )}
                        </div>

                        {/* Button */}
                        <button
                          className="w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 text-white"
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
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-12 z-10 p-3 rounded-full transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: '#86CA6B', color: 'white' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#86CA6B'}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-12 z-10 p-3 rounded-full transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: '#86CA6B', color: 'white' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#86CA6B'}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-8">
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
          </section>
          <Footer />
        </>
      )}

      {/* Detail Page */}
      {currentPage === 'detail' && selectedTree && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={handleBackHome}
            className="mb-8 flex items-center gap-2 font-semibold transition"
            style={{ color: '#86CA6B' }}
          >
            <ChevronDown className="w-5 h-5 rotate-90" />
            Back to Trees
          </button>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2" style={{ borderColor: '#86CA6B' }}>
            {/* Header Image */}
            <div className="h-64 flex items-center justify-center relative" style={{ backgroundColor: '#86CA6B' }}>
              <img
                src={selectedTree.image}
                alt={selectedTree.nameEnglish}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              {/* Tree Names */}
              <div className="mb-8">
                <h1 className="text-5xl font-bold mb-2" style={{ color: '#000' }}>
                  {selectedTree.nameEnglish}
                </h1>
                <p className="text-2xl font-semibold mb-4" style={{ color: '#86CA6B' }}>
                  {selectedTree.nameKannada}
                </p>
                <p className="text-lg text-gray-600 italic">
                  {selectedTree.scientificName}
                </p>
              </div>

              {/* Family & Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="p-6 rounded-lg border-2" style={{ backgroundColor: '#F5FBF2', borderColor: '#86CA6B' }}>
                  <h3 className="text-lg font-bold mb-2 flex items-center gap-2" style={{ color: '#000' }}>
                    <BookOpen className="w-5 h-5" style={{ color: '#86CA6B' }} />
                    Family
                  </h3>
                  <p className="text-gray-700 text-lg">{selectedTree.family}</p>
                </div>

                <div className="p-6 rounded-lg border-2" style={{ backgroundColor: '#F5FBF2', borderColor: '#86CA6B' }}>
                  <h3 className="text-lg font-bold mb-2 flex items-center gap-2" style={{ color: '#000' }}>
                    <MapPin className="w-5 h-5" style={{ color: '#86CA6B' }} />
                    Scientific Classification
                  </h3>
                  <p className="text-gray-700">{selectedTree.scientificName}</p>
                </div>
              </div>

              {/* Uses Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6" style={{ color: '#000' }}>Uses & Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedTree.uses.map((use, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-lg border-l-4 hover:shadow-md transition"
                      style={{ backgroundColor: '#F5FBF2', borderColor: '#86CA6B' }}
                    >
                      <p className="text-gray-800 font-semibold">{use}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* QR Codes Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2" style={{ color: '#000' }}>
                  <QrCode className="w-8 h-8" style={{ color: '#86CA6B' }} />
                  Quick Links
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Information QR Code */}
                  <div className="p-8 rounded-xl border-2 flex flex-col items-center" style={{ backgroundColor: '#F5FBF2', borderColor: '#86CA6B' }}>
                    <h3 className="text-xl font-bold mb-4" style={{ color: '#000' }}>
                      Tree Information
                    </h3>
                    <div className="bg-white p-4 rounded-lg shadow-md mb-4 border-2" style={{ borderColor: '#86CA6B' }}>
                      <img
                        src={generateQRImage(`Tree Info: ${selectedTree.nameEnglish} - ${selectedTree.scientificName} - Family: ${selectedTree.family} - Uses: ${selectedTree.uses.join(', ')}`)}
                        alt="Tree Information QR Code"
                        className="w-48 h-48"
                      />
                    </div>
                    <p className="text-sm text-center" style={{ color: '#86CA6B' }}>
                      Scan to view detailed information about this tree
                    </p>
                  </div>

                  {/* Wikipedia QR Code */}
                  <div className="p-8 rounded-xl border-2 flex flex-col items-center" style={{ backgroundColor: '#F5FBF2', borderColor: '#86CA6B' }}>
                    <h3 className="text-xl font-bold mb-4" style={{ color: '#000' }}>
                      Wikipedia Link
                    </h3>
                    <div className="bg-white p-4 rounded-lg shadow-md mb-4 border-2" style={{ borderColor: '#86CA6B' }}>
                      <img
                        src={generateQRImage(selectedTree.wikipediaLink)}
                        alt="Wikipedia QR Code"
                        className="w-48 h-48"
                      />
                    </div>
                    <p className="text-sm text-center" style={{ color: '#86CA6B' }}>
                      Scan to visit Wikipedia article
                    </p>
                  </div>
                </div>
              </div>

              {/* External Links */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={selectedTree.wikipediaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-white py-3 px-6 rounded-lg transition text-center font-semibold"
                  style={{ backgroundColor: '#86CA6B' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#86CA6B'}
                >
                  Visit Wikipedia
                </a>
                <button
                  onClick={handleBackHome}
                  className="flex-1 text-white py-3 px-6 rounded-lg transition font-semibold"
                  style={{ backgroundColor: '#86CA6B' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#86CA6B'}
                >
                  Explore More Trees
                </button>
              </div>
            </div>
          </div>

          {/* Related Trees */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#000' }}>Related Trees</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {treeDatabase
                .filter(
                  (tree) =>
                    tree.family === selectedTree.family &&
                    tree.id !== selectedTree.id
                )
                .slice(0, 3)
                .map((tree) => (
                  <div
                    key={tree.id}
                    onClick={() => handleTreeClick(tree)}
                    className="bg-white rounded-xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer overflow-hidden border-2"
                    style={{ borderColor: '#86CA6B' }}
                  >
                    <div className="h-32 relative overflow-hidden" style={{ backgroundColor: '#86CA6B' }}>
                      <img
                        src={tree.image}
                        alt={tree.nameEnglish}
                        className="w-full h-full object-cover opacity-80"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold" style={{ color: '#000' }}>
                        {tree.nameEnglish}
                      </h3>
                      <p className="text-sm font-semibold mb-2" style={{ color: '#86CA6B' }}>
                        {tree.nameKannada}
                      </p>
                      <p className="text-xs text-gray-600 italic">
                        {tree.scientificName}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
import { Leaf } from "lucide-react";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0B2418] text-white pt-20 pb-10 px-6 md:px-20">
      
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Logo + Branding */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 bg-[#86CA6B] rounded-full flex items-center justify-center">
              <Leaf className="text-[#0B2418]" size={32} strokeWidth={2.5} />
            </div>
            <h2 className="text-2xl font-semibold">Treepedia</h2>
          </div>

          {/* Description under Treepedia */}
          <p className="text-sm leading-relaxed opacity-90">
            Treepedia helps you explore detailed information about trees, 
            their uses, scientific names, and environmental benefits — 
            all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[#86CA6B] text-sm tracking-widest mb-4">
            QUICK LINKS
          </h3>
          <ul className="space-y-2">
            <li className="hover:text-[#86CA6B] cursor-pointer">Home</li>
            <li className="hover:text-[#86CA6B] cursor-pointer">About Us</li>
            <li className="hover:text-[#86CA6B] cursor-pointer">All Trees</li>
          </ul>
        </div>

        {/* Application */}
        <div>
          <h3 className="text-[#86CA6B] text-sm tracking-widest mb-4">
            APPLICATION
          </h3>
          <ul className="space-y-2">
            <li className="hover:text-[#86CA6B] cursor-pointer">Why Treepedia?</li>
            <li className="hover:text-[#86CA6B] cursor-pointer">Changelog</li>
            <li className="hover:text-[#86CA6B] cursor-pointer">Use Cases</li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-[#1A3A2C] mt-10 pt-5"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="opacity-80">
          All rights reserved © {new Date().getFullYear()} - Treepedia
        </p>

        {/* Social Icons */}
        <div className="flex gap-5 mt-4 md:mt-0">
          <FaLinkedinIn className="text-white hover:text-[#86CA6B] cursor-pointer text-xl" />
          <FaFacebookF className="text-white hover:text-[#86CA6B] cursor-pointer text-xl" />
          <FaInstagram className="text-white hover:text-[#86CA6B] cursor-pointer text-xl" />
        </div>
      </div>

    </footer>
  );
}

import React from 'react';
import { Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-[#1A2634] text-white py-2 px-4 hidden md:block border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Contact Info */}
        <div className="flex items-center space-x-6 text-sm">
          <a 
            href="tel:+91𝟖𝟒𝟏𝟗𝟎𝟏𝟏𝟗𝟓𝟎" 
            className="flex items-center hover:text-[#76B9D0] transition-colors group"
          >
            <Phone size={14} className="mr-2 text-[#F38B4C] group-hover:scale-110 transition-transform" />
            <span className="font-medium">+91 8419011950</span>

          </a>
           <a 
            href="tel:+91𝟗𝟒𝟓𝟒𝟑𝟓𝟓𝟑𝟑𝟑" 
            className="flex items-center hover:text-[#76B9D0] transition-colors group"
          >
            <Phone size={14} className="mr-2 text-[#F38B4C] group-hover:scale-110 transition-transform" />
            <span className="font-medium">+91 9454355333</span> 
          </a>
          
          <a 
            href="mailto:drarung76@gmail.com" 
            className="flex items-center hover:text-[#76B9D0] transition-colors"
          >
            <Mail size={14} className="mr-2 text-[#76B9D0]" />
            <span className="text-gray-300">drarung76@gmail.com</span>
          </a>
        </div>

        {/* Branding Message */}
        <div className="text-[13px] font-medium tracking-wide hidden lg:block italic text-gray-400">
          A complete treatment of
Allopathic, Ayurvedic<span className="text-[#76B9D0]">(Panchkarma)</span>and physiotherapy centre 
        </div>

        {/* Socials & CTA */}
        <div className="flex items-center space-x-5">
          <div className="flex items-center space-x-3 border-r border-white/20 pr-5">
            <a href="#" className="text-gray-400 hover:text-[#76B9D0] transition-colors">
              <Facebook size={16} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#76B9D0] transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#76B9D0] transition-colors">
              <Linkedin size={16} />
            </a>
          </div>
          
         
        </div>

      </div>
    </div>
  );
};

export default TopBar;
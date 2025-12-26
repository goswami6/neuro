import React from 'react';
import { MapPin, Phone, Mail, ChevronRight, Facebook, Instagram, Linkedin, Send } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const usefulLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Blogs", href: "/blog" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  const therapies = [
    { name: 'Ozone Therapy', href: '/therapy/ozone-therapy' },
    { name: 'Chronic Disease Segments', href: '/therapy/chronic-disease-segments' },
    { name: 'Hormonal Optimisation', href: '/therapy/hormonal-optimisation' },
    { name: 'IV Therapy', href: '/therapy/iv-therapy' },
    { name: 'Innovative Therapies', href: '/therapy/innovative-therapies' },
    { name: 'Low Dose Ketamine Therapy', href: '/therapy/ketamine-therapy' },
    { name: 'Stem Cell Therapy', href: '/therapy/stem-cell-therapy' },
    { name: 'Athletic Performance Bundle', href: '/therapy/athletic-performance' },
    { name: 'Ultraviolet Blood Irradiation', href: '/therapy/ub-irradiation' }
  ];

  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Top Section: Newsletter/CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12 mb-12 border-b border-slate-800">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-[#76B9D0]">Ready to optimize your health?</h3>
            <p className="text-slate-400 mt-2">Join our newsletter for the latest insights on regenerative medicine.</p>
          </div>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-slate-800 border-none rounded-l-md px-4 py-3 w-full focus:ring-1 focus:ring-[#76B9D0] outline-none text-sm"
            />
            <button className="bg-[#F38B4C] hover:bg-[#d9763a] transition-colors px-6 rounded-r-md flex items-center justify-center">
              <Send size={18} />
            </button>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img
                src="/footer.png"
                alt="SOMA Wellness Clinic"
                className="h-12 md:h-15 w-auto object-contain"
              />
            </div>

            <p className="text-slate-400 text-sm leading-relaxed italic">
              "Redefining vitality through science-backed regenerative therapies and personalized care."
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#F38B4C] transition-all duration-300"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#F38B4C] transition-all duration-300"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#F38B4C] transition-all duration-300"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-8 text-slate-200">Navigation</h3>
            <ul className="space-y-4">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="group flex items-center text-slate-400 hover:text-[#76B9D0] transition-colors text-sm">
                    <ChevronRight size={12} className="mr-2 text-[#F38B4C] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Therapies */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-8 text-slate-200">Therapies</h3>
            <ul className="space-y-4">
              {therapies.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="group flex items-center text-slate-400 hover:text-[#76B9D0] transition-colors text-sm">
                    <ChevronRight size={12} className="mr-2 text-[#F38B4C] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-8 text-slate-200">Visit Us</h3>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start text-sm text-slate-400">
                <MapPin className="text-[#F38B4C] shrink-0" size={18} />
                <span className="leading-relaxed">𝐍𝐇 𝟐𝟗,shri siddhi vinayak hospital 𝐦𝐚𝐮,𝐃𝐢𝐬. ,𝐌𝐚𝐮. 𝟐𝟕𝟓𝟏𝟎𝟏(𝐔.P.)</span>
              </li>
              <li className="flex gap-4 items-center text-sm text-slate-400">
                <Phone className="text-[#F38B4C] shrink-0" size={18} />
                <a href="tel:84190 11950" className="hover:text-white transition-colors">+91 84190 11950</a>
              </li>
              <li className="flex gap-4 items-center text-sm text-slate-400">
                <Mail className="text-[#F38B4C] shrink-0" size={18} />
                <a href="mailto:drarung76@gmail.com" className="hover:text-white transition-colors lowercase">drarung76@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-[0.1em] text-slate-500">
          <p>© {currentYear} Siddhi Vinayak Hospital. Medical Excellence in UTTAR PRADESH.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
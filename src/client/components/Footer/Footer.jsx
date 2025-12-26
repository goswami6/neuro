import React from 'react';
import { MapPin, Phone, Mail, ChevronRight, Facebook, Instagram, Linkedin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">

          {/* ================= Brand & Mission ================= */}
          <div className="space-y-6 lg:col-span-1">
            <img
              src="/footer.png"
              alt="SOMA Wellness Clinic"
              className="h-12 w-auto object-contain"
            />

            <p className="text-slate-400 text-sm leading-relaxed italic">
              “Redefining vitality through science-backed regenerative therapies and personalized care.”
            </p>

            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#F38B4C] transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* ================= Navigation ================= */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-8 text-slate-200">
              Navigation
            </h3>

            <ul className="space-y-4">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="flex items-center gap-2 text-slate-400 hover:text-[#76B9D0] transition-colors text-sm"
                  >
                    <ChevronRight size={12} className="text-[#F38B4C]" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= Therapies (Column 1) ================= */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-8 text-slate-200">
              Therapies
            </h3>

            <ul className="space-y-4">
              {therapies.slice(0, 5).map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="flex items-start gap-2 text-slate-400 hover:text-[#76B9D0] transition-colors text-sm"
                  >
                    <ChevronRight size={12} className="mt-1 text-[#F38B4C]" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= Therapies (Column 2) ================= */}
          <div className="lg:col-span-1 pt-[52px]">
            <ul className="space-y-4">
              {therapies.slice(5).map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="flex items-start gap-2 text-slate-400 hover:text-[#76B9D0] transition-colors text-sm"
                  >
                    <ChevronRight size={12} className="mt-1 text-[#F38B4C]" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= Contact Details (LAST COLUMN) ================= */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-8 text-slate-200">
              Visit Us
            </h3>

            <ul className="space-y-6 text-sm text-slate-400">
              <li className="flex gap-4 items-start">
                <MapPin size={18} className="text-[#F38B4C] shrink-0 mt-1" />
                <span>
                  NH 29, Shri Siddhi Vinayak Hospital, Mau, Uttar Pradesh – 275101
                </span>
              </li>

              <li className="flex gap-4 items-center">
                <Phone size={18} className="text-[#F38B4C] shrink-0" />
                <a href="tel:+918419011950" className="hover:text-white transition-colors">
                  +91 84190 11950
                </a>
              </li>

              <li className="flex gap-4 items-center">
                <Mail size={18} className="text-[#F38B4C] shrink-0" />
                <a
                  href="mailto:drarung76@gmail.com"
                  className="hover:text-white transition-colors lowercase"
                >
                  drarung76@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>


        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-[0.1em] text-slate-500">
          <p>© {currentYear} Siddhi Vinayak Hospital. Medical Excellence in UTTAR PRADESH.</p>
          <div className="flex gap-8">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
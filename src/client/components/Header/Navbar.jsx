import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    {
      name: 'Our Therapies',
      submenu: [
        { name: 'Ozone Therapy', href: '/therapy/ozone-therapy' },
        { name: 'Chronic Disease Segments', href: '/therapy/chronic-disease-segments' },
        { name: 'Hormonal Optimisation', href: '/therapy/hormonal-optimisation' },
        { name: 'IV Therapy', href: '/therapy/iv-therapy' },
        { name: 'Innovative Therapies', href: '/therapy/innovative-therapies' },
        { name: 'Low Dose Ketamine Therapy', href: '/therapy/ketamine-therapy' },
        { name: 'Stem Cell Therapy', href: '/therapy/stem-cell-therapy' },
        { name: 'Athletic Performance Bundle', href: '/therapy/athletic-performance' },
        { name: 'Ultraviolet Blood Irradiation', href: '/therapy/ub-irradiation' }
      ]
    },
    { name: 'Formulations', href: '/formulations' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <>
      <nav className={`w-full z-[100] transition-all duration-300 ${isSticky ? 'fixed top-0 bg-white shadow-lg py-3' : 'relative bg-white py-5'
        }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center">

            {/* 1. Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img
                  src="/logo.png"   // 👈 put your logo path here
                  alt="SOMA Neuro Spine & Joint"
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </Link>
            </div>


            {/* 2. Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.href}
                    className="px-4 py-2 text-[14px] font-bold text-[#0F172A] hover:text-[#76B9D0] flex items-center transition-colors tracking-wide"
                  >
                    {link.name}
                    {link.submenu && <ChevronDown size={14} className="ml-1 group-hover:rotate-180 transition-transform" />}
                  </Link>

                  {link.submenu && (
                    <div className="absolute left-0 mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white shadow-2xl border-b-4 border-[#76B9D0] py-3 rounded-b-xl">
                      {link.submenu.map((item) => (
                        <Link
                          key={item.href}              // ✅ unique key
                          to={item.href}             // ✅ real link
                          className="block px-6 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#76B9D0] font-medium"
                        >
                          {item.name}
                        </Link>
                      ))}

                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* 3. Action Button & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link
                to="/schedule"
                className="hidden sm:block bg-[#F38B4C] hover:bg-[#0F172A] text-white text-[11px] font-black tracking-widest px-6 py-3.5 rounded-full transition-all shadow-md active:scale-95"
              >
                BOOK APPOINTMENT
              </Link>

              <button
                className="lg:hidden p-2 text-[#0F172A] bg-slate-100 rounded-lg"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- MOBILE SIDEBAR (Drawer) --- */}
      <div className={`fixed inset-0 z-[200] lg:hidden transition-all duration-500 ${mobileMenuOpen ? 'visible' : 'invisible'}`}>
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-500 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Sidebar Content */}
        <div className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out p-8 flex flex-col ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center mb-10">
            <img
              src="/logo.png"
              alt="SOMA Wellness Clinic"
              className="h-10 md:h-12 w-auto object-contain"
            />
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-slate-100 rounded-full">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-slate-50 last:border-0">
                  {link.submenu ? (
                    <div>
                      <button
                        onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                        className="w-full flex justify-between items-center py-4 text-[#0F172A] font-bold text-lg"
                      >
                        {link.name}
                        <ChevronDown className={`transition-transform ${mobileSubmenuOpen ? 'rotate-180' : ''}`} size={20} />
                      </button>
                      <div className={`pl-4 space-y-2 overflow-hidden transition-all duration-300 ${mobileSubmenuOpen ? 'max-h-[500px] mb-4' : 'max-h-0'}`}>
                        {link.submenu.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="block py-2 text-slate-500 font-medium text-sm hover:text-[#76B9D0]"
                          >
                            {item.name}
                          </Link>
                        ))}

                      </div>
                    </div>
                  ) : (
                    <Link to={link.href} className="block py-4 text-[#0F172A] font-bold text-lg">
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-slate-100">
            <Link to="/schedule" className="w-full block text-center bg-[#F38B4C] text-white font-black text-sm tracking-widest py-4 rounded-xl shadow-lg shadow-orange-200">
              BOOK APPOINTMENT
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
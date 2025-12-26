import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header Section */}
      <section className="bg-[#0F172A] py-16 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Have questions about our regenerative therapies? Our team at SOMA is here to guide you toward optimal vitality.
          </p>
        </div>
      </section>

      {/* 2. Contact Information Cards */}
      <section className="py-12 -mt-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4">
            <div className="bg-[#76B9D0]/10 p-3 rounded-full text-[#76B9D0]">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase text-slate-400">Call Us</p>
              <p className="font-bold text-slate-800">+91 84190 11950</p>
              <p className="font-bold text-slate-800">+91 9454355333</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4">
            <div className="bg-[#F38B4C]/10 p-3 rounded-full text-[#F38B4C]">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase text-slate-400">Email Us</p>
              <p className="font-bold text-slate-800">drarung76@gmail.com</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4">
            <div className="bg-[#0F172A]/10 p-3 rounded-full text-[#0F172A]">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase text-slate-400">Clinic Hours</p>
              <p className="font-bold text-slate-800">Always open</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Map and Form Section */}
      <section className="py-16 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Send a Message</h2>
            <p className="text-slate-500">Fill out the form and we'll get back to you within 24 hours.</p>
          </div>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input type="text" placeholder="Full Name" className="p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#76B9D0]" />
            <input type="email" placeholder="Email Address" className="p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#76B9D0]" />
            <input type="tel" placeholder="Phone Number" className="p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#76B9D0]" />
            <select className="p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#76B9D0]">
              <option>Interested Therapy</option>
              <option>Ozone Therapy</option>
              <option>IV Nutrient Therapy</option>
              <option>Pain Management</option>
            </select>
            <textarea placeholder="How can we help?" className="sm:col-span-2 p-4 bg-slate-50 border border-slate-200 rounded-lg h-32 focus:outline-none focus:border-[#76B9D0]"></textarea>
            <button className="sm:col-span-2 bg-[#F38B4C] text-white font-bold py-4 rounded-lg hover:bg-[#e07a3b] transition-colors">
              Request a Callback
            </button>
          </form>
        </div>

        {/* Map & Address */}
        <div className="flex flex-col gap-6">
          <div className="bg-slate-100 rounded-2xl overflow-hidden h-[400px] shadow-inner relative">
            {/* Embedded Google Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.558341648074!2d72.8386072752044!3d19.025309353147424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce40d31d96c3%3A0x341ce6266a787efb!2sSOMA%20Wellness%20Clinic!5e0!3m2!1sen!2sin!4v1715600000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SOMA Wellness Clinic Location"
            ></iframe>
          </div>
          <div className="p-6 border-2 border-[#76B9D0]/20 rounded-2xl">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2 text-[#0F172A]">
              <MapPin className="text-[#F38B4C]" /> Our Location
            </h3>
            <p className="text-slate-600 leading-relaxed">

              shree siddhi vinayak hospital poorani tehshil chauraha near machli mandi sadak se paschim sahadatpoora mau, Maunath Bhanjan, India, Uttar Pradesh
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
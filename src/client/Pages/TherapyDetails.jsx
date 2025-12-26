// TherapyDetails.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { therapyData } from '../services/TherapyData';
import { CheckCircle2, ArrowLeft, Calendar } from 'lucide-react';

const TherapyDetails = () => {
  const { id } = useParams(); // URL se id nikalta hai
  const therapy = therapyData[id];

  if (!therapy) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Therapy Not Found</h2>
        <Link stroke="#76B9D0" to="/" className="mt-4 text-[#76B9D0]">Go Back Home</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Dynamic Hero */}
      <section className="relative h-[70vh] flex items-center">
        <img 
          src={therapy.heroImage} 
          className="absolute inset-0 w-full h-full object-cover" 
          alt={therapy.title} 
        />
        <div className="absolute inset-0 bg-[#0F172A]/80 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <Link to="/" className="flex items-center gap-2 text-[#76B9D0] font-bold mb-6 text-sm uppercase tracking-widest">
            <ArrowLeft size={16} /> All Therapies
          </Link>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">{therapy.title}</h1>
          <p className="text-[#76B9D0] text-xl font-medium italic">{therapy.tagline}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Scientific Overview</h2>
              <p className="text-slate-600 text-lg leading-relaxed">{therapy.description}</p>
            </div>
            
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">Treatment Process</h3>
              <p className="text-slate-500 italic leading-relaxed">{therapy.process}</p>
            </div>
          </div>

          {/* Sidebar / Benefits */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-[#0F172A] p-8 rounded-3xl text-white shadow-2xl">
              <h3 className="text-xl font-bold mb-8 border-b border-white/10 pb-4">Clinical Benefits</h3>
              <ul className="space-y-6">
                {therapy.benefits.map((benefit, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="text-[#F38B4C] shrink-0" size={24} />
                    <span className="text-slate-300 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full mt-10 bg-[#F38B4C] hover:bg-white hover:text-[#0F172A] text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2">
                <Calendar size={18} /> Book Appointment
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default TherapyDetails;
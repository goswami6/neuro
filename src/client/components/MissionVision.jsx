import React from 'react';
import { Target, Eye, ShieldCheck } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2634] mb-4">
            Our Commitment to Excellence
          </h2>
          <div className="w-24 h-1.5 bg-[#F38B4C] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="group bg-white p-10 rounded-2xl shadow-sm border-t-4 border-[#76B9D0] hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-[#E1F1F6] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="text-[#76B9D0]" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[#1A2634] mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed italic text-lg">
              "To provide immediate, world-class trauma care and innovative surgical solutions for neuro-spine and joint conditions, ensuring every patient regains their mobility and quality of life through precision and compassion."
            </p>
          </div>

          {/* Vision Card */}
          <div className="group bg-[#1A2634] p-10 rounded-2xl shadow-sm border-t-4 border-[#F38B4C] hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Eye className="text-[#F38B4C]" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              "To be the global leader in neuro-spine innovation, setting new standards in regenerative medicine and trauma technology so that advanced healing is accessible to all."
            </p>
          </div>

        </div>

        {/* Values Strip */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="text-[#76B9D0]" size={20} />
            <span className="font-bold text-[#1A2634] uppercase tracking-widest text-xs">Patient Safety First</span>
          </div>
          <div className="flex items-center space-x-2">
            <ShieldCheck className="text-[#76B9D0]" size={20} />
            <span className="font-bold text-[#1A2634] uppercase tracking-widest text-xs">Clinical Innovation</span>
          </div>
          <div className="flex items-center space-x-2">
            <ShieldCheck className="text-[#76B9D0]" size={20} />
            <span className="font-bold text-[#1A2634] uppercase tracking-widest text-xs">Ethical Care</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;
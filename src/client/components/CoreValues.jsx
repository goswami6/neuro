import React from 'react';
import { ShieldAlert, Zap, HeartPulse, Microscope, Users, Scale } from 'lucide-react';

const values = [
  {
    title: "Precision Excellence",
    description: "In neuro-spine surgery, millimeters matter. We commit to surgical precision using the latest navigation technologies.",
    icon: <Zap className="text-[#76B9D0]" size={32} />,
    borderColor: "hover:border-[#76B9D0]"
  },
  {
    title: "Trauma Responsiveness",
    description: "24/7 readiness for spinal and joint emergencies. Every second counts in preventing permanent neurological damage.",
    icon: <ShieldAlert className="text-[#F38B4C]" size={32} />,
    borderColor: "hover:border-[#F38B4C]"
  },
  {
    title: "Clinical Innovation",
    description: "Integrating regenerative medicine and advanced formulations to enhance post-surgical recovery and joint health.",
    icon: <Microscope className="text-[#76B9D0]" size={32} />,
    borderColor: "hover:border-[#76B9D0]"
  },
  {
    title: "Compassionate Care",
    description: "Treating the patient, not just the scan. We provide empathetic support through the entire recovery journey.",
    icon: <HeartPulse className="text-[#F38B4C]" size={32} />,
    borderColor: "hover:border-[#F38B4C]"
  },
  {
    title: "Collaborative Expertise",
    description: "A multidisciplinary approach involving neurosurgeons, orthopedic specialists, and rehabilitation experts.",
    icon: <Users className="text-[#76B9D0]" size={32} />,
    borderColor: "hover:border-[#76B9D0]"
  },
  {
    title: "Ethical Integrity",
    description: "Transparency in surgical outcomes and commitment to evidence-based treatments for every joint and spine solution.",
    icon: <Scale className="text-[#F38B4C]" size={32} />,
    borderColor: "hover:border-[#F38B4C]"
  }
];

const CoreValues = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <span className="text-[#76B9D0] font-bold tracking-widest uppercase text-sm">The Foundation of SOMA</span>
            <h2 className="text-4xl font-bold text-[#1A2634] mt-2">Our Core Values</h2>
          </div>
          <p className="text-gray-500 max-w-sm border-l-4 border-[#F38B4C] pl-4 italic">
            "Innovation in motion, precision in care."
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className={`p-8 bg-gray-50 rounded-xl border-b-4 border-transparent transition-all duration-300 transform hover:-translate-y-2 hover:bg-white hover:shadow-2xl ${value.borderColor}`}
            >
              <div className="mb-6 bg-white w-14 h-14 rounded-lg flex items-center justify-center shadow-sm">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1A2634] mb-3">{value.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
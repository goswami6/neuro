import React, { useState } from 'react';
import { ShieldCheck, Target, Users } from 'lucide-react';
import { ChevronDown, ChevronUp, Award, BookOpen, Microscope } from 'lucide-react';


const collaborators = [
  {
    name: "Dr. Ram K. Chillar",
    role: "Senior Consultant & Mentor",
    image: "/doctors/dr-ram.jpg",
    profileLink: "/collaborators/dr-ram",
  },
  {
    name: "Dr. Maya Chillar",
    role: "Consultant – Regenerative Medicine",
    image: "/doctors/dr-maya.jpg",
    profileLink: "/collaborators/dr-maya",
  },
  {
    name: "Prof. Gurudutta Gangenahalli",
    role: "Professor & Research Guide",
    image: "/doctors/prof-guru.jpg",
    profileLink: "/collaborators/prof-guru",
  },
];

const AboutPage = () => {
  const [openTab, setOpenTab] = useState(0);

  const toggleTab = (index) => {
    setOpenTab(openTab === index ? null : index);
  };

  const accomplishments = [
    {
      title: "Medicine & Science Achievements",
      icon: <Microscope size={20} />,
      content: [
        "Over 55 research articles in top-tier medical journals.",
        "Reversing chronic diseases including diabetes, fatty liver, and hypertension using non-pharmacological measures.",
        "High-end research in neurodegenerative disorders (Parkinson’s and Alzheimer’s).",
        "Author of six books and numerous book chapters.",
        "In-depth research on stress, lifestyle, and radiation exposure in extreme conditions."
      ]
    },
    {
      title: "Academic & Professional Honors",
      icon: <Award size={20} />,
      content: [
        "Holds several medical technology patents.",
        "Gold Commander from the Multi-agency (Strategic) CBRN Command Course, Ryton, UK.",
        "Certified Six Sigma Quality Manager.",
        "Panelist on Lok Sabha TV program 'Healthy India'.",
        "Expert faculty for the National Disaster Management Authority."
      ]
    },
    {
      title: "Innovations & Telemedicine",
      icon: <BookOpen size={20} />,
      content: [
        "Best Paper Award: Association of Physicians of India.",
        "Commended by the Government of India for developing a Cardio Risk Analyser.",
        "DRDO Technology Group Award for high-end successful telemedicine establishment.",
        "DRDO Award for managing coronary risk factors in large populations."
      ]
    }
  ];
  return (
    <div className="bg-white font-sans text-slate-800">

      {/* 1. Hero Section */}
      <section className="relative bg-[#0F172A] py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Pioneering the Future of <span className="text-[#76B9D0]">Vitality</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed">
            SOMA Wellness Clinic is Mumbai's premier center for regenerative medicine,
            blending advanced clinical science with a holistic approach to human health.
          </p>
        </div>
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-700 via-transparent to-transparent"></div>
        </div>
      </section>

      {/* 2. Our Mission & Vision */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#F38B4C] font-bold uppercase tracking-widest text-sm">Our Philosophy</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-slate-900">
              Moving Beyond Symptom Management to Total Cellular Optimization.
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              At SOMA, we believe that the body possesses an incredible inherent ability to heal. Our role is to provide the precise biological keys—through Ozone, IV Therapy, and Regenerative Bio-science—to unlock that potential.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="bg-[#76B9D0]/10 p-2 rounded-lg text-[#76B9D0]">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Our Mission</h4>
                  <p className="text-sm text-slate-500">To extend the human health-span through evidence-based innovative therapies.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-[#F38B4C]/10 p-2 rounded-lg text-[#F38B4C]">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Patient-Centric Care</h4>
                  <p className="text-sm text-slate-500">Every protocol is customized to the unique genetic and lifestyle profile of the individual.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
              alt="Medical Professional"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl hidden md:block border-l-4 border-[#F38B4C]">
              <p className="text-3xl font-bold text-slate-900">10+</p>
              <p className="text-xs uppercase tracking-widest text-slate-500">Advanced Therapies</p>
            </div>
          </div>
        </div>
      </section>

      {/* director */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Left Side: Image */}
            <div className="w-full lg:w-5/12">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#76B9D0] rounded-2xl"></div>
                <img
                  src="https://somawellnessclinic.com/wp-content/uploads/elementor/thumbs/web.whatsapp-34-2-r2zc7r0ea2fxx8ocisftv0ymdzs8y7cixhadca2se8.jpg"
                  alt="Dr. Mitra Basu Chhillar"
                  className="relative z-10 rounded-2xl shadow-2xl w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#F38B4C] p-6 rounded-xl z-20 hidden md:block">
                  <p className="text-white font-bold text-xl text-center">30+ Years</p>
                  <p className="text-white/80 text-xs uppercase tracking-widest text-center">Experience</p>
                </div>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="w-full lg:w-7/12">
              <div className="mb-8">
                <span className="text-[#76B9D0] font-bold uppercase tracking-widest text-sm">Medical Director, SOMA</span>
                <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-1">Dr. Mitra Basu Chhillar</h2>
                <p className="text-[#F38B4C] font-semibold text-lg mb-6">M.D., M.B.A. (Healthcare), F.A.M.</p>

                <p className="text-slate-600 leading-relaxed mb-8">
                  Dr. Mitra Basu Chhillar is a distinguished scientist and clinician renowned for his research
                  expertise spanning three decades in regenerative, preventive, and curative medicine.
                  He has dedicated his career to developing insights into the causation and reversal
                  of disease and biological ageing.
                </p>
              </div>

              {/* Accordion List */}
              <div className="space-y-4">
                {accomplishments.map((item, index) => (
                  <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleTab(index)}
                      className={`w-full flex items-center justify-between p-5 text-left transition-colors ${openTab === index ? 'bg-slate-50' : 'bg-white hover:bg-slate-50'}`}
                    >
                      <div className="flex items-center gap-4">
                        <span className={openTab === index ? 'text-[#F38B4C]' : 'text-slate-400'}>
                          {item.icon}
                        </span>
                        <span className="font-bold text-slate-800">{item.title}</span>
                      </div>
                      {openTab === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>

                    {openTab === index && (
                      <div className="p-5 pt-0 bg-slate-50 border-t border-slate-100">
                        <ul className="space-y-3">
                          {item.content.map((point, i) => (
                            <li key={i} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
                              <span className="text-[#76B9D0] mt-1.5">•</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose SOMA?</h2>
            <div className="w-20 h-1 bg-[#F38B4C] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: <Award className="mx-auto mb-4 text-[#76B9D0]" size={40} />, title: "Expert Oversight", desc: "All treatments are supervised by specialized clinical experts in regenerative medicine." },
              { icon: <Users className="mx-auto mb-4 text-[#76B9D0]" size={40} />, title: "Holistic Ecosystem", desc: "We don't just treat conditions; we optimize your physical, hormonal, and mental environment." },
              { icon: <ShieldCheck className="mx-auto mb-4 text-[#76B9D0]" size={40} />, title: "State-of-the-Art", desc: "Utilizing world-class equipment for Ozone, UV Light, and Laser Blood therapies." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow border border-slate-100">
                {item.icon}
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborators */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* SECTION TITLE - Modern Left-Aligned with Accent */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-[#F38B4C] font-bold uppercase tracking-[0.2em] text-xs">Expert Network</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mt-3">
                Our Collaborators, <br />Mentors & Guides
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm text-sm leading-relaxed border-l-2 border-[#76B9D0] pl-6">
              A distinguished panel of medical researchers and clinical mentors
              shaping the future of our neuro and regenerative protocols.
            </p>
          </div>

          {/* CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {collaborators.map((person, index) => (
              <div
                key={index}
                className="group relative flex flex-col"
              >
                {/* Image Container with Custom Border Style */}
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6 bg-slate-100">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <button className="w-full py-3 bg-white text-[#0F172A] font-bold text-xs uppercase tracking-widest rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      View Full Profile
                    </button>
                  </div>
                </div>

                {/* Text Content */}
                <div className="px-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-[1px] w-8 bg-[#F38B4C]"></div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#76B9D0] font-bold">Clinical Consultant</span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0F172A] group-hover:text-[#F38B4C] transition-colors duration-300">
                    {person.name}
                  </h3>

                  <p className="text-sm text-slate-500 mt-2 leading-relaxed line-clamp-2 italic">
                    {person.role}
                  </p>

                  <a
                    href={person.profileLink}
                    className="inline-flex items-center mt-4 text-xs font-bold uppercase tracking-widest text-[#0F172A] group-hover:gap-3 transition-all"
                  >
                    Read Biography
                    <span className="text-[#F38B4C] ml-1">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Call to Action */}
      <section className="py-24 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Begin Your Transformation Today</h2>
        <p className="text-slate-600 mb-10 text-lg">
          Visit our clinic in Dadar West to experience a consultation that finally looks at your health in its entirety.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#0F172A] text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all">
            Book an Appointment
          </button>
          <button className="border-2 border-[#0F172A] text-[#0F172A] px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all">
            Contact Support
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;










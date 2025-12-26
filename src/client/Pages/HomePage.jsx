import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { ArrowRight } from 'lucide-react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import MissionVision from '../components/MissionVision';
import CoreValues from '../components/CoreValues';

const slides = [
  {
    id: 1,
    image: "/banner1.png",

  },
  {
    id: 2,
    image: "/banner2.png",
  },
  {
    id: 3,
    image: "/banner3.png",
  },
  {
    id: 4,
    image: "/banner4.png",
  },
];


const therapies = [
  {
    title: "Ozone Therapy",
    image: "https://assets.clevelandclinic.org/transform/LargeFeatureImage/de368bd9-75eb-4ecf-af39-c97b1ef0aa10/Ozone-Therapy-1405494613-770x533-1_jpg",
    description: "Leveraging advanced regenerative techniques to enhance healing and cellular oxygenation.",
    link: "/therapy/ozone-therapy",
    category: "Regenerative"
  },
  {
    title: "Athletic Enhancement",
    image: "https://sa1s3optim.patientpop.com/assets/images/provider/photos/2343978.jpg",
    description: "Comprehensive performance bundles designed for marginal gains and rapid recovery.",
    link: "/therapy/athletic-performance",
    category: "Performance"
  },
  {
    title: "Chronic Disease Segment",
    image: "https://www.cdc.gov/chronic-disease/media/files/2025/07/HEhighbloodpressure-reduced.webp",
    description: "Dedicated assistance in managing and overcoming complex chronic conditions.",
    link: "/therapy/chronic-disease-segments ",
    category: "Specialized"
  },
  {
    title: "Hormonal Optimisation",
    image: "https://refinerymedspa.com/wp-content/uploads/2023/11/How_Long_Does_Hormone_Optimization_Therapy_Take_638358248878175178.png",
    description: "A cornerstone of our holistic approach to long-term wellness and vitality.",
    link: "/therapy/hormonal-optimisation",
    category: "Wellness"
  },
  {
    title: "IV Infusion Therapy",
    image: "https://texasfms.com/wp-content/uploads/2024/04/experienced-caucasian-heath-care-worker.jpg",
    description: "Meticulously designed infusions to directly enhance systemic health and wellness.",
    link: "/therapy/iv-therapy",
    category: "Clinical"
  },
  {
    title: "Stem Cell Therapy",
    image: "https://nkjinstitute.com/wp-content/uploads/2018/10/stem-cell-therapy-northeast-knee-joint-institute.jpg",
    description: "The future of anti-aging and regenerative medicine using autologous infusions.",
    link: "/therapy/stem-cell-therapy",
    category: "Advanced"
  },
  {
    title: "Innovative Therapy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXgNfrTAa1DVSTDwErTbN9h9UQUvyaXW41mQ&s",
    description: "Advanced, evidence-based therapies designed to accelerate healing, restore function, and improve long-term patient outcomes.",
    link: "/therapy/innovative-therapies",
    category: "Advanced"
  },
  {
    title: "Low Dose Ketamine Therapy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTKLObr-aVpnh4fWLcJREwaMMlqqrFOvVtPQ&s",
    description: "A modern treatment approach for chronic pain, depression, and neurological conditions using carefully monitored low-dose ketamine.",
    link: "/therapy/ketamine-therapy",
    category: "Advanced"
  },
  {
    title: "Our Formulations",
    image: "https://www.sigmaaldrich.com/deepweb/assets/sigmaaldrich/marketing/global/images/categories/apis-and-formulation/liquid-formulation/liquid-formulation.jpg",
    description: "Clinically formulated medications and supplements tailored to support neurological recovery, joint health, and overall wellness.",
    link: "/formulations",
    category: "Advanced"
  }

];

const HomePage = () => {
  return (
    <>
      {/* Hero Slider */}
      <div className="relative w-full h-auto sm:h-[75vh] lg:h-[calc(100vh-120px)] group bg-[#1A2634]">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          loop
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="w-full h-full custom-swiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full flex items-center justify-center bg-[#1A2634] overflow-hidden">

                {/* Responsive Image */}
                <img
                  src={slide.image}
                  alt="Banner"
                  className="
              w-full h-full
              object-contain       /* ✅ Mobile: no crop */
              lg:object-cover      /* ✅ Desktop: full cinematic */
              opacity-90
            "
                />

                {/* Optional subtle overlay */}
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        <style>{`
    .custom-swiper .swiper-pagination {
      bottom: 30px !important;
      display: flex;
      justify-content: center;
      gap: 10px;
    }

    .custom-swiper .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      background: white;
      opacity: 0.4;
      border-radius: 2px;
      transition: all 0.3s ease;
    }

    .custom-swiper .swiper-pagination-bullet-active {
      width: 32px;
      background: #F38B4C;
      opacity: 1;
      box-shadow: 0 0 12px rgba(243, 139, 76, 0.5);
    }
  `}</style>
      </div>


      {/* About Us Section */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative">
              {/* Design Element: Accent Box matching the Medical Blue */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#76B9D0] hidden md:block"></div>

              <div className="relative z-0 rounded-2xl overflow-hidden shadow-2xl border-b-8 border-[#F38B4C]">
                <img
                  src="https://www.drrajputorthocentre.com/images/services/12.webp"
                  alt="Dr. Mitra Basu Chhillar"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#1A2634] text-white p-6 rounded-xl shadow-xl hidden md:block">
                <p className="text-3xl font-bold text-[#76B9D0]">30+</p>
                <p className="text-xs uppercase tracking-widest">Years of Experience</p>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="space-y-2">
                <span className="text-[#76B9D0] font-bold tracking-[0.2em] text-sm uppercase">
                  Expert Medical Leadership
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1A2634] leading-tight">
                  Dr. Mitra Basu Chhillar
                </h2>
                <p className="text-[#F38B4C] font-semibold text-lg">
                  M.D., M.B.A.(Healthcare), F.A.M.
                </p>
              </div>

              <div className="h-1 w-20 bg-[#76B9D0]"></div>

              <p className="text-gray-700 leading-relaxed text-lg">
                Dr. Mitra Basu Chhillar is the distinguished Medical Director at **Neuro Spine & Joint Solutions**, renowned for his research and clinical expertise. With over 30 years of experience, he has significantly contributed to medical science with over 55 articles in top-tier journals and authoring six books.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start space-x-3">
                  <div className="mt-1 bg-[#E1F1F6] p-1 rounded-full">
                    <svg className="w-4 h-4 text-[#76B9D0]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <p className="text-sm font-medium text-gray-800">Gold Commander Certified (UK)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1 bg-[#E1F1F6] p-1 rounded-full">
                    <svg className="w-4 h-4 text-[#76B9D0]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <p className="text-sm font-medium text-gray-800">Regenerative Medicine Specialist</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1 bg-[#E1F1F6] p-1 rounded-full">
                    <svg className="w-4 h-4 text-[#76B9D0]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <p className="text-sm font-medium text-gray-800">Patented Medical Innovations</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1 bg-[#E1F1F6] p-1 rounded-full">
                    <svg className="w-4 h-4 text-[#76B9D0]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <p className="text-sm font-medium text-gray-800">Six Sigma Quality Management</p>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="/about-us"
                  className="inline-flex items-center group text-[#1A2634] font-bold text-sm uppercase tracking-widest border-b-2 border-[#F38B4C] pb-2 hover:text-[#76B9D0] transition-all"
                >
                  Read Full Biography
                  <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* mission & vision */}
      <MissionVision />
      <CoreValues />

      {/* therapies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Section Title */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A2634]">Our Therapies</h2>
            <div className="flex justify-center items-center gap-2">
              <div className="h-1 w-12 bg-[#76B9D0]"></div>
              <div className="h-2 w-2 rounded-full bg-[#F38B4C]"></div>
              <div className="h-1 w-12 bg-[#76B9D0]"></div>
            </div>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Combining historical pharmacology with cutting-edge regenerative science to provide world-class neuro-spine and joint solutions.
            </p>
          </div>

          {/* Therapy Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {therapies.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-[#1A2634] h-[400px] cursor-pointer"
              >
                {/* Image with Dark Overlay */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-110"
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-[#1A2634] via-transparent to-transparent">
                  <span className="text-[#76B9D0] text-xs font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  {/* Hidden content that slides up on hover */}
                  <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 ease-in-out">
                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    <a
                      href={item.link}
                      className="inline-flex items-center text-[#F38B4C] font-bold text-sm uppercase group/btn"
                    >
                      Read More
                      <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-2 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <button className="bg-transparent border-2 border-[#1A2634] text-[#1A2634] hover:bg-[#1A2634] hover:text-white px-10 py-4 rounded-full font-bold transition-all uppercase tracking-widest text-sm">
              Explore All Treatments
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage



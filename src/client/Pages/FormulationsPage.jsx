import React, { useState } from 'react';
import { Beaker, X, ChevronRight, CheckCircle2 } from 'lucide-react';

const FormulationsPage = () => {
  const [selectedFormulation, setSelectedFormulation] = useState(null);

  const formulations = [
    {
      id: 1,
      name: "Siddhi Vinayak Hospital Neuro-Regen",
      tagline: "Cognitive Enhancement & Nerve Repair",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800", // Image of scientific/brain health context
      color: "border-[#76B9D0]",
      bg: "bg-[#76B9D0]/5",
      description: "A high-potency synergistic blend designed to cross the blood-brain barrier and support neuronal mitochondrial health.",
      ingredients: ["Alpha-GPC", "NAD+", "Lion's Mane Extract", "Methylcobalamin", "Cerebrolysin"],
      benefits: ["Enhanced Focus", "Neural Tissue Repair", "Memory Retention", "Neuro-protection"],
      fullDetails: "Our Neuro-Regen formulation is specifically designed for patients recovering from neurodegenerative stressors or those seeking elite cognitive performance. It works by increasing BDNF (Brain-Derived Neurotrophic Factor) and optimizing neurotransmitter synthesis."
    },
    {
      id: 2,
      name: "Cellular Detox IV",
      tagline: "Heavy Metal & Oxidative Clearance",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800", // Image of medical IV/Laboratory context
      color: "border-[#F38B4C]",
      bg: "bg-[#F38B4C]/5",
      description: "The gold standard in intracellular cleansing, utilizing advanced chelators and high-dose antioxidants.",
      ingredients: ["Glutathione", "Alpha-Lipoic Acid", "Vitamin C (Sodium Ascorbate)", "Magnesium Sulfate", "Selenium"],
      benefits: ["Liver Support", "Skin Radiance", "Toxic Load Reduction", "Anti-inflammatory"],
      fullDetails: "This formulation targets systemic inflammation by neutralizing free radicals and supporting Phase II liver detoxification. Ideal for patients exposed to environmental toxins or recovering from chronic illness."
    },
    {
      id: 3,
      name: "Biological Vitality Cocktail",
      tagline: "Hormonal & Physical Optimization",
      image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=800", // Image of vitality/vials context
      color: "border-[#0F172A]",
      bg: "bg-slate-50",
      description: "A comprehensive metabolic recharge designed to optimize endocrine function and cellular energy production.",
      ingredients: ["Zinc Gluconate", "L-Arginine", "DHEA Precursors", "B-Complex", "CoQ10"],
      benefits: ["Increased Libido", "Muscle Recovery", "Adrenal Support", "Metabolic Speed"],
      fullDetails: "Designed for the modern high-performer, this formulation balances the cortisol-DHEA ratio and provides the raw building blocks for natural testosterone and growth hormone optimization."
    },
     {
      id: 4,
      name: "Siddhi Vinayak Hospital Neuro-Regen",
      tagline: "Cognitive Enhancement & Nerve Repair",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800", // Image of scientific/brain health context
      color: "border-[#76B9D0]",
      bg: "bg-[#76B9D0]/5",
      description: "A high-potency synergistic blend designed to cross the blood-brain barrier and support neuronal mitochondrial health.",
      ingredients: ["Alpha-GPC", "NAD+", "Lion's Mane Extract", "Methylcobalamin", "Cerebrolysin"],
      benefits: ["Enhanced Focus", "Neural Tissue Repair", "Memory Retention", "Neuro-protection"],
      fullDetails: "Our Neuro-Regen formulation is specifically designed for patients recovering from neurodegenerative stressors or those seeking elite cognitive performance. It works by increasing BDNF (Brain-Derived Neurotrophic Factor) and optimizing neurotransmitter synthesis."
    },
    {
      id: 5,
      name: "Cellular Detox IV",
      tagline: "Heavy Metal & Oxidative Clearance",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800", // Image of medical IV/Laboratory context
      color: "border-[#F38B4C]",
      bg: "bg-[#F38B4C]/5",
      description: "The gold standard in intracellular cleansing, utilizing advanced chelators and high-dose antioxidants.",
      ingredients: ["Glutathione", "Alpha-Lipoic Acid", "Vitamin C (Sodium Ascorbate)", "Magnesium Sulfate", "Selenium"],
      benefits: ["Liver Support", "Skin Radiance", "Toxic Load Reduction", "Anti-inflammatory"],
      fullDetails: "This formulation targets systemic inflammation by neutralizing free radicals and supporting Phase II liver detoxification. Ideal for patients exposed to environmental toxins or recovering from chronic illness."
    },
    {
      id: 6,
      name: "Biological Vitality Cocktail",
      tagline: "Hormonal & Physical Optimization",
      image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=800", // Image of vitality/vials context
      color: "border-[#0F172A]",
      bg: "bg-slate-50",
      description: "A comprehensive metabolic recharge designed to optimize endocrine function and cellular energy production.",
      ingredients: ["Zinc Gluconate", "L-Arginine", "DHEA Precursors", "B-Complex", "CoQ10"],
      benefits: ["Increased Libido", "Muscle Recovery", "Adrenal Support", "Metabolic Speed"],
      fullDetails: "Designed for the modern high-performer, this formulation balances the cortisol-DHEA ratio and provides the raw building blocks for natural testosterone and growth hormone optimization."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="bg-[#0F172A] pt-24 pb-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center md:text-left">
          <span className="text-[#76B9D0] font-bold uppercase tracking-[0.3em] text-xs">Precision Science</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
            Advanced Clinical <br /><span className="text-[#F38B4C]">Formulations</span>
          </h1>
          <p className="max-w-2xl text-slate-400 text-lg leading-relaxed mx-auto md:mx-0">
            Pharmacist-compounded, evidence-based biological signatures designed to target specific cellular pathways.
          </p>
        </div>
      </section>

      {/* 2. Formulation Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 -mt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {formulations.map((item) => (
            <div 
              key={item.id}
              className={`flex flex-col border-t-4 ${item.color} bg-white rounded-xl shadow-xl transition-all hover:-translate-y-2 group cursor-pointer overflow-hidden`}
              onClick={() => setSelectedFormulation(item)}
            >
              {/* Image Header */}
              <div className="h-56 w-full overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 opacity-20 ${item.bg}`}></div>
              </div>

              {/* Text Body */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#0F172A] mb-2">{item.name}</h3>
                <p className="text-[#F38B4C] text-xs font-bold uppercase tracking-widest mb-4">{item.tagline}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">
                  {item.description}
                </p>
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0F172A] group-hover:gap-4 transition-all">
                  Scientific Breakdown <ChevronRight size={16} className="text-[#F38B4C]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Methodology Section */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0F172A] mb-6">The Siddhi Vinayak Hospital Compounding Standard</h2>
              <ul className="space-y-6">
                {[
                  { title: "U.S.P. Grade Ingredients", desc: "Pharmaceutical grade raw materials for all formulations." },
                  { title: "Cold-Chain Integrity", desc: "Precise temperature control from compounding to administration." },
                  { title: "Dynamic Dosing", desc: "Adjusted based on individual blood markers and biomarkers." }
                ].map((point, idx) => (
                  <li key={idx} className="flex gap-4">
                    <CheckCircle2 className="text-[#76B9D0] shrink-0" size={24} />
                    <p className="text-slate-600"><span className="font-bold text-slate-900">{point.title}:</span> {point.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0F172A] p-12 rounded-3xl relative overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1579152276507-2442467b5b13?auto=format&fit=crop&q=80&w=800" 
                  alt="Laboratory" 
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-1000" 
                />
                <div className="relative z-10">
                  <h4 className="text-[#76B9D0] font-bold text-xl mb-4 italic">"Nature provided the blueprint; we provide the concentration."</h4>
                  <p className="text-slate-400 text-sm">
                      Our Medical Director, Dr. Mitra Basu Chhillar, oversees every batch formulation 
                      to ensure biological efficacy and patient safety.
                  </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Modal with Image */}
      {selectedFormulation && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#0F172A]/90 backdrop-blur-sm" onClick={() => setSelectedFormulation(null)}></div>
          <div className="bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl flex flex-col md:flex-row">
            
            {/* Modal Image Side */}
            <div className="w-full md:w-5/12 relative">
              <img 
                src={selectedFormulation.image} 
                alt={selectedFormulation.name} 
                className="w-full h-full object-cover min-h-[300px]"
              />
              <div className={`absolute inset-0 opacity-40 ${selectedFormulation.bg}`}></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-3xl font-bold">{selectedFormulation.name}</h3>
                <p className="text-white/80 text-sm uppercase tracking-widest mt-2">{selectedFormulation.tagline}</p>
              </div>
            </div>

            {/* Modal Info Side */}
            <div className="w-full md:w-7/12 p-8 md:p-12 relative bg-white">
              <button 
                onClick={() => setSelectedFormulation(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="mb-8">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#F38B4C] mb-3">Molecular Breakdown</h4>
                <p className="text-slate-600 leading-relaxed">{selectedFormulation.fullDetails}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#76B9D0] mb-4">Core Ingredients</h4>
                  <div className="space-y-2">
                    {selectedFormulation.ingredients.map((ing, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#76B9D0]"></div> {ing}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#F38B4C] mb-4">Targeted Benefits</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedFormulation.benefits.map((b, i) => (
                      <span key={i} className="bg-slate-100 px-3 py-1 rounded-full text-[10px] font-bold text-slate-600 uppercase">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-slate-50 rounded-xl border-l-4 border-[#76B9D0]">
                <p className="text-xs text-slate-500 italic">
                  Note: Formulations are compounded at Siddhi Vinayak Hospital and require clinical oversight.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormulationsPage;
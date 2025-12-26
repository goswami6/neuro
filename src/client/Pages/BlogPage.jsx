import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Search, X } from 'lucide-react'; // Added X for close button

// Dummy Full Content (replace with your actual blog content)
const dummyFullContent = `
  <p class="text-lg leading-relaxed mb-6">At SOMA, we are at the forefront of understanding how the human body can achieve optimal health and extend its vitality. Ozone therapy, a key component of our regenerative protocols, utilizes medical-grade ozone gas to stimulate the body’s innate healing mechanisms.</p>
  <h3 class="text-2xl font-bold text-slate-900 mb-4">The Science Behind Ozone</h3>
  <p class="mb-4 leading-relaxed">Ozone (O3) is a powerful molecule with unique therapeutic properties. When administered correctly, it acts as a mild, transient oxidative stressor, prompting the body to ramp up its antioxidant defenses. This process is crucial for combating chronic inflammation and oxidative damage, which are root causes of many degenerative diseases.</p>
  <ul class="list-disc list-inside space-y-2 mb-6 text-slate-700">
    <li><strong>Enhanced Oxygen Utilization:</strong> Ozone improves red blood cell function, allowing for more efficient oxygen transport and release to tissues.</li>
    <li><strong>Immune Modulation:</strong> It can balance an overactive or underactive immune system, making it beneficial for autoimmune conditions and chronic infections.</li>
    <li><strong>Antimicrobial Properties:</strong> Ozone has direct antimicrobial effects against bacteria, viruses, and fungi.</li>
    <li><strong>Mitochondrial Activation:</strong> By stimulating mitochondria, ozone therapy boosts cellular energy production, leading to improved overall cell function and vitality.</li>
  </ul>
  <p class="mb-6 leading-relaxed">Our advanced protocols ensure safe and effective delivery, customized to each patient's specific health needs and goals. We combine ozone therapy with other regenerative treatments for synergistic benefits.</p>
  <h3 class="text-2xl font-bold text-slate-900 mb-4">Who Can Benefit?</h3>
  <p class="mb-4 leading-relaxed">Ozone therapy is highly versatile and can support various health conditions, including:</p>
  <ul class="list-disc list-inside space-y-2 mb-6 text-slate-700">
    <li>Chronic Fatigue Syndrome</li>
    <li>Autoimmune Diseases</li>
    <li>Chronic Infections (Lyme, EBV)</li>
    <li>Joint Pain and Arthritis</li>
    <li>Cardiovascular Health</li>
    <li>Anti-aging and Performance Enhancement</li>
  </ul>
  <p class="italic text-slate-600">Always consult with a qualified medical professional before starting any new therapy.</p>
`;

const posts = [
  {
    id: 1,
    title: "Understanding Ozone Therapy: A Deep Dive into Cellular Healing",
    excerpt: "Explore how medical-grade ozone can stimulate the immune system and improve oxygen delivery at a cellular level...",
    author: "Dr. Mitra Basu Chhillar",
    date: "Oct 12, 2023",
    category: "Therapy",
    image: "https://images.unsplash.com/photo-1576091160550-2173dad99901?auto=format&fit=crop&q=80&w=800",
    fullContent: dummyFullContent // Assign the dummy full content
  },
  {
    id: 2,
    title: "The Role of Stem Cells in Chronic Pain Management",
    excerpt: "Moving beyond temporary relief: how regenerative science is changing the landscape of chronic back and joint pain...",
    author: "SOMA Editorial",
    date: "Nov 05, 2023",
    category: "Regenerative",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=800",
    fullContent: dummyFullContent // Assign the dummy full content
  },
  {
    id: 3,
    title: "5 Habits for Hormonal Optimization in your 40s",
    excerpt: "Hormonal balance is the cornerstone of longevity. Here are the clinical steps to maintaining peak performance...",
    author: "Dr. Mitra Basu Chhillar",
    date: "Dec 01, 2023",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&q=80&w=800",
    fullContent: dummyFullContent // Assign the dummy full content
  }
];

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* 1. Header & Search */}
      <section className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <span className="text-[#F38B4C] font-bold uppercase tracking-[0.2em] text-xs">Knowledge Base</span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mt-2">SOMA Insights</h1>
            </div>
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search health topics..."
                className="w-full pl-12 pr-4 py-3 rounded-full border border-slate-300 focus:ring-2 focus:ring-[#76B9D0] outline-none transition-all"
              />
              <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
            </div>
          </div>
        </div>
      </section>



      {/* 3. Blog Grid - Updated for Left Image / Right Content */}
      <section className="py-12 max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-2xl font-bold text-[#0F172A]">Recent Articles</h3>
          <div className="flex gap-4">
            {['All', 'Therapy', 'Regenerative', 'Wellness'].map((cat) => (
              <button key={cat} className="hidden md:block text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-[#76B9D0] transition-colors">
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12"> {/* Changed to a single column grid */}
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden cursor-pointer group hover:shadow-xl transition-shadow duration-300"
              onClick={() => setSelectedPost(post)} // Open modal on click
            >
              {/* Left Side: Image */}
              <div className="w-full md:w-2/5 aspect-[16/9] md:aspect-[4/3] relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg">
                  <span className="text-[10px] font-black uppercase text-[#0F172A] tracking-tighter">{post.category}</span>
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-slate-400 text-xs mb-3 font-medium uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                    <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                  </div>

                  <h4 className="text-xl font-bold text-[#0F172A] group-hover:text-[#76B9D0] transition-colors line-clamp-2 mb-3">
                    {post.title}
                  </h4>

                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <span className="flex items-center gap-2 text-[#F38B4C] font-bold uppercase tracking-widest text-xs">
                    Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="w-10 h-1 bg-slate-200 group-hover:bg-[#F38B4C] transition-colors duration-500"></div> {/* Subtle line accent */}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative p-8 md:p-12">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 transition-colors"
            >
              <X size={28} />
            </button>

            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-64 object-cover rounded-lg mb-8"
            />

            <div className="flex items-center gap-4 text-slate-500 text-sm mb-4 font-medium uppercase tracking-widest">
              <span className="flex items-center gap-2"><Calendar size={16} /> {selectedPost.date}</span>
              <span className="flex items-center gap-2"><User size={16} /> {selectedPost.author}</span>
              <span className="bg-[#76B9D0]/10 text-[#76B9D0] text-[10px] font-black uppercase px-2 py-1 rounded-md">{selectedPost.category}</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">
              {selectedPost.title}
            </h2>

            <div
              className="prose prose-lg max-w-none text-slate-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: selectedPost.fullContent }}
            />

          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
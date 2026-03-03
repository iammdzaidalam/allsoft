import React from 'react';
import { Star } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <>
      <section className="py-32 px-4 text-center max-w-5xl mx-auto">
        <h2 className="text-[10vw] md:text-[8vw] leading-none font-medium tracking-tighter text-[#141414] mb-10">The<br />services</h2>
      </section>

      <section className="py-[-19rem] px-4 max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          <button className="px-8 py-4 bg-[#141414] text-white rounded-full font-medium text-lg shadow-lg">Custom App</button>
          <button className="px-8 py-4 bg-white border border-gray-200 text-[#141414] rounded-full font-medium text-lg hover:bg-gray-50 transition-colors shadow-sm"> Cloud Infrastructure Management</button>
          <button className="px-8 py-4 bg-white border border-gray-200 text-[#141414] rounded-full font-medium text-lg hover:bg-gray-50 transition-colors shadow-sm">Mobile App</button>
          <button className="px-8 py-4 bg-white border border-gray-200 text-[#141414] rounded-full font-medium text-lg hover:bg-gray-50 transition-colors shadow-sm">Website Dev</button>
          <button className="px-8 py-4 bg-white border border-gray-200 text-[#141414] rounded-full font-medium text-lg hover:bg-gray-50 transition-colors shadow-sm">Mobile Application</button>
          <button className="px-8 py-4 bg-white border border-gray-200 text-[#141414] rounded-full font-medium text-lg hover:bg-gray-50 transition-colors shadow-sm">Requirement Analysis and Prototyping</button>
        </div>

        <div className="bg-[#141414] rounded-[40px] p-10 md:p-24 text-white text-center relative overflow-hidden max-w-5xl mx-auto shadow-2xl">
          <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-10 flex items-center justify-center gap-4">
            <span>Part of the</span> <span className="px-3 py-1 border border-white/20 rounded-full">Services</span>
          </div>
          <div className="flex justify-center mb-8 text-[#a3ff47]"><Star size={64} fill="currentColor" /></div>
          <h3 className="text-6xl md:text-8xl font-medium tracking-tighter mb-8">Custom App</h3>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed">Our ever-growing dashboard packed with ready-to-go components.</p>

          <div className="relative w-full aspect-video bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
            <img src="https://picsum.photos/seed/customapp2/1200/675" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" alt="App" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white text-[#141414] px-10 py-5 rounded-full font-medium text-xl hover:scale-105 transition-transform shadow-xl">Discover</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

import React from 'react';
import { Play } from 'lucide-react';

export const IntroSection: React.FC = () => {
  return (
    <section className="relative z-20 bg-[#f4f4f0] w-full">
      <div className="py-16 md:py-24 px-4 text-center max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-[#141414] leading-tight">
          Allsoft.co is a results-driven web consultancy agency that helps businesses transform ideas into powerful digital experiences. We specialize in strategy, design, and development to build high-performing websites that drive growth and measurable success.
        </h2>

        <div className="mt-40 relative flex justify-center items-center">
          <div className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] border border-dashed border-gray-300 rounded-full animate-[spin_60s_linear_infinite]"></div>

          <div className="relative z-10 bg-[#141414] text-white p-6 md:p-8 rounded-2xl w-full max-w-md aspect-video flex flex-col justify-between shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <div className="flex justify-between items-start text-xs font-mono text-gray-400">
              <span>Allsoft in use</span>
              <span>00:48</span>
            </div>
            <div className="flex justify-center">
              <button className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md hover:bg-white/20 transition-colors group">
                <Play fill="white" size={24} className="group-hover:scale-110 transition-transform" />
              </button>
            </div>
            <div className="flex gap-2 overflow-hidden opacity-50">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-1/5 aspect-video bg-white/20 rounded"></div>
              ))}
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-between px-4 md:px-10 pointer-events-none">
            <span className="text-6xl md:text-8xl font-medium text-gray-200 mix-blend-multiply">Play</span>
            <span className="text-6xl md:text-8xl font-medium text-gray-200 mix-blend-multiply">Reel</span>
          </div>

          <div className="absolute -bottom-16 right-1/4 text-[#ff4e00] font-script text-2xl rotate-[-10deg] hidden md:block">
            See what it can do!
            <svg className="absolute -top-6 -left-8 w-12 h-12 rotate-[120deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </div>
        </div>
      </div>
    </section>
  );
};

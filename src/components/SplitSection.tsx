import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const SplitSection: React.FC = () => {
  return (
    <section className="px-4 py-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4">
      <div className="lg:col-span-5 bg-[#6b46ff] rounded-[40px] p-10 md:p-16 text-white relative overflow-hidden min-h-[600px] flex flex-col">
        <div className="font-script text-3xl mb-4 opacity-90">Created by</div>
        <h3 className="text-7xl md:text-8xl font-medium tracking-tighter leading-none">Allsoft<br /><span className="text-4xl md:text-5xl opacity-80">Team</span></h3>

        <div className="absolute bottom-0 right-0 w-[90%] aspect-square translate-x-1/4 translate-y-1/4">
          <div className="w-full h-full rounded-full border border-dashed border-white/30 animate-[spin_30s_linear_infinite]"></div>
          <img src="https://picsum.photos/seed/teamwork/800/800" className="absolute inset-0 w-full h-full object-cover rounded-full p-12 mix-blend-luminosity opacity-80" style={{ clipPath: 'circle(42% at 50% 50%)' }} alt="Team" />
        </div>

        <button className="mt-auto bg-white text-[#141414] px-8 py-4 rounded-full w-fit font-medium z-10 hover:scale-105 transition-transform">About us</button>
      </div>

      <div className="lg:col-span-7 bg-[#141414] rounded-[40px] lg:rounded-tr-[300px] p-10 md:p-16 text-white relative overflow-hidden min-h-[600px] flex flex-col items-center justify-center">
        <div className="absolute top-16 text-center z-10">
          <div className="text-[#a3ff47] font-medium text-lg">Latest updates</div>
          <div className="text-gray-400">from Allsoft</div>
        </div>

        <div className="w-full max-w-xl bg-[#a3ff47] rounded-3xl p-8 text-[#141414] z-10 mt-20 shadow-2xl">
          <div className="flex gap-2 mb-10 text-xs font-mono font-bold">
            <span className="bg-[#141414] text-[#a3ff47] px-3 py-1.5 rounded-md">5 DAYS AGO</span>
            <span className="bg-[#141414] text-[#a3ff47] px-3 py-1.5 rounded-md">NEW SERVICE</span>
          </div>
          <h4 className="text-4xl font-medium tracking-tight mb-8">Custom Application</h4>
          <div className="text-xs font-mono uppercase tracking-widest mb-4 opacity-70">Design & Development</div>

          <div className="bg-[#141414] rounded-2xl p-2 aspect-video relative overflow-hidden">
            <img src="https://picsum.photos/seed/appdev/800/450" className="w-full h-full object-cover rounded-xl opacity-80" alt="App Dev" />
          </div>
        </div>

        <div className="absolute bottom-10 right-10 flex gap-4 z-10 hidden md:flex">
          <button className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#a3ff47] hover:text-[#141414] transition-colors"><ChevronLeft /></button>
          <button className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#a3ff47] hover:text-[#141414] transition-colors"><ChevronRight /></button>
        </div>
      </div>
    </section>
  );
};

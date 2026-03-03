import React from 'react';
import { Star, Globe, Zap, Award, Shield } from 'lucide-react';
import { LogoCycle } from './LogoCycle';

export const AffiliationsSection: React.FC = () => {
  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-7xl md:text-5xl font-lg tracking-tighter text-[#141414] mb-4">Affiliations</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <LogoCycle items={[
          <div key="ficci" className="flex flex-col items-center gap-2"><span className="text-2xl font-bold text-orange-500 flex items-center gap-2"><Star size={24} /> FICCI</span><span className="text-xs text-gray-500 uppercase tracking-widest">for Startups</span></div>,
          <div key="nasscom" className="flex flex-col items-center gap-2"><span className="text-2xl font-bold text-blue-600 flex items-center gap-2"><Globe size={24} /> NASSCOM</span><span className="text-xs text-gray-500 uppercase tracking-widest">Member</span></div>
        ]} delay={3000} />

        <LogoCycle items={[
          <div key="digital" className="flex flex-col items-center gap-2"><span className="text-2xl font-bold text-blue-500 italic flex items-center gap-2"><Zap size={24} /> Digital India</span><span className="text-xs text-gray-500 uppercase tracking-widest">Power To Empower</span></div>,
          <div key="skill" className="flex flex-col items-center gap-2"><span className="text-2xl font-bold text-green-600 italic flex items-center gap-2"><Award size={24} /> Skill India</span><span className="text-xs text-gray-500 uppercase tracking-widest">Kaushal Bharat</span></div>
        ]} delay={4000} />

        <LogoCycle items={[
          <div key="msme" className="flex flex-col items-center gap-2"><span className="text-3xl font-black tracking-tighter text-gray-800 flex items-center gap-2"><Shield size={28} /> MSME</span><span className="text-xs text-gray-500 uppercase tracking-widest">Govt. of India</span></div>,
          <div key="iso" className="flex flex-col items-center gap-2"><span className="text-3xl font-black tracking-tighter text-red-600 flex items-center gap-2"><Award size={28} /> ISO</span><span className="text-xs text-gray-500 uppercase tracking-widest">9001:2015 Certified</span></div>
        ]} delay={3500} />

        <LogoCycle items={[
          <div key="make" className="flex flex-col items-center gap-2"><span className="text-2xl font-bold text-gray-900 uppercase tracking-widest flex items-center gap-2"><Star size={24} /> Make in India</span></div>,
          <div key="startup" className="flex flex-col items-center gap-2"><span className="text-2xl font-bold text-indigo-600 uppercase tracking-widest flex items-center gap-2"><Zap size={24} /> Startup India</span></div>
        ]} delay={4500} />

        <LogoCycle items={[
          <div key="mca" className="flex flex-col items-center gap-2"><span className="text-xl font-serif font-bold text-slate-800 text-center flex items-center gap-2"><Shield size={24} /> Ministry of<br />Corporate Affairs</span></div>,
          <div key="govt" className="flex flex-col items-center gap-2"><span className="text-xl font-serif font-bold text-teal-700 text-center flex items-center gap-2"><Globe size={24} /> Govt. of<br />Chhattisgarh</span></div>
        ]} delay={3200} />

        <LogoCycle items={[
          <div key="ht1" className="flex flex-col items-center gap-2"><span className="text-2xl font-bold text-orange-500 flex items-center gap-2"><Star size={24} /> #startupindia</span></div>,
          <div key="ht2" className="flex flex-col items-center gap-2"><span className="text-2xl font-bold text-purple-600 flex items-center gap-2"><Zap size={24} /> #innovateindia</span></div>
        ]} delay={3800} />
      </div>
    </section>
  );
};

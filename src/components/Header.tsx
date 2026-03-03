import React from 'react';
import { Menu, Star } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <div className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl flex flex-col items-center drop-shadow-2xl">
      {/* Navigation */}
      <nav className="bg-[#141414] text-white rounded-t-xl px-6 py-4 flex items-center justify-between w-full border border-white/10 relative z-20">
        <div className="font-bold text-2xl tracking-tighter flex items-center gap-1">
          allsoft.
        </div>
        <button onClick={onMenuClick} className="flex items-center gap-2 hover:text-[#a3ff47] transition-colors">
          <span className="text-sm font-medium uppercase tracking-wider">Menu</span>
          <Menu size={20} />
        </button>
      </nav>

      {/* Marquee */}
      <div className="w-full overflow-hidden bg-[#a3ff47] text-[#141414] py-2.5 text-[10px] font-mono uppercase tracking-widest flex whitespace-nowrap rounded-b-xl border-x border-b border-[#141414]/10 relative z-10">
        <div className="animate-marquee flex gap-8">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="flex items-center gap-8">
              <span>Website Development</span>
              <Star size={10} />
              <span>Mobile App Development</span>
              <Star size={10} />
              <Star size={10} />
              <span>Mobile App Development</span>
              <Star size={10} />
              <Star size={10} />
              <span>Requirement Analysis and Prototyping</span>
              <Star size={10} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

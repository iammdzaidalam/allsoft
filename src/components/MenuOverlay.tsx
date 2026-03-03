import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Linkedin, Instagram, Twitter } from 'lucide-react';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.98 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-2 md:inset-4 z-[100] bg-[#1c1c1c] rounded-[32px] overflow-hidden flex flex-col shadow-2xl border border-white/10"
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 md:p-8 border-b border-white/5">
            <div className="font-bold text-8xl tracking-tighter flex items-center gap-1 text-white">
              allsoft.
            </div>
            <button onClick={onClose} className="flex items-center gap-2 text-white hover:text-[#a3ff47] transition-colors">
              <span className="text-sm font-medium uppercase tracking-wider">Close</span>
              <X size={20} />
            </button>
          </div>

          {/* Menu Body */}
          <div className="flex-1 overflow-y-auto p-6 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 h-full max-w-7xl mx-auto">
              {/* Col 1 */}
              <div className="lg:col-span-4 flex flex-col">
                <div className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-8">Our Services</div>
                <div className="flex flex-col gap-6">
                  <a className="text-3xl md:text-4xl font-medium text-white hover:text-[#a3ff47] transition-colors cursor-pointer">Custom Application Development</a>
                  <a className="text-3xl md:text-4xl font-medium text-white flex items-center gap-3 hover:text-[#a3ff47] transition-colors cursor-pointer">
                    Web Application Development
                  </a>
                  <a className="text-3xl md:text-4xl font-medium text-white hover:text-[#a3ff47] transition-colors cursor-pointer">Website Development</a>
                  <a className="text-3xl md:text-4xl font-medium text-white hover:text-[#a3ff47] transition-colors cursor-pointer">Mobile Application Development</a>
                  <a className="text-3xl md:text-4xl font-medium text-white hover:text-[#a3ff47] transition-colors cursor-pointer">Cloud Infrastructure Development</a>
                  <a className="text-3xl md:text-4xl font-medium text-white hover:text-[#a3ff47] transition-colors cursor-pointer">Requirement Analysis and Prototyping</a>
                </div>
              </div>

              {/* Col 2 */}
              <div className="lg:col-span-3 flex flex-col">
                <div className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-8">Explore</div>
                <div className="flex flex-col gap-6">
                  <a className="text-2xl md:text-3xl font-medium text-white hover:text-[#a3ff47] transition-colors cursor-pointer">About Us</a>
                  <a className="text-2xl md:text-3xl font-medium text-white hover:text-[#a3ff47] transition-colors cursor-pointer">Clients</a>
                  <a className="text-2xl md:text-3xl font-medium text-white hover:text-[#a3ff47] transition-colors cursor-pointer">Careers</a>
                  <a className="text-2xl md:text-3xl font-medium text-white hover:text-[#a3ff47] transition-colors cursor-pointer">Contact Us</a>
                </div>
                <div className="flex gap-3 mt-auto pt-12">
                  <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors"><Linkedin size={18} /></button>
                  <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors"><Instagram size={18} /></button>
                  <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors"><Twitter size={18} /></button>
                </div>
              </div>

              {/* Col 3 */}
              <div className="lg:col-span-5 h-full">
                <div className="bg-[#252525] rounded-[24px] p-8 md:p-12 flex flex-col items-center justify-center text-center h-full relative overflow-hidden group">
                  <h3 className="text-4xl md:text-5xl font-medium text-white mb-12 leading-tight">allsoft</h3>

                  <div className="relative w-full max-w-[280px] aspect-video mb-12">
                    <div className="absolute inset-0 bg-black rounded-lg transform rotate-[-5deg] opacity-50"></div>
                    <div className="absolute inset-0 bg-gray-800 rounded-lg transform rotate-[5deg] opacity-50"></div>
                    <img src="https://picsum.photos/seed/menu/600/400" className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-500" alt="Featured" />
                  </div>

                  <button className="bg-white text-[#141414] px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform">More info</button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

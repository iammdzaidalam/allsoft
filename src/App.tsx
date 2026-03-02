import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Menu, Play, ChevronRight, ChevronLeft, Star, Facebook, Twitter, Linkedin, Instagram, X, Shield, Award, Zap, Globe } from 'lucide-react';

const LogoCycle = ({ items, delay }: { items: React.ReactNode[], delay: number }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, delay);
    return () => clearInterval(interval);
  }, [items.length, delay]);

  return (
    <div className="relative w-full h-40 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center overflow-hidden" style={{ perspective: '1000px' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ rotateX: -90, opacity: 0, y: 20 }}
          animate={{ rotateX: 0, opacity: 1, y: 0 }}
          exit={{ rotateX: 90, opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center p-6 text-center"
        >
          {items[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const carouselRotate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const cards = [
    { title: "Custom Application Development", img: "https://picsum.photos/seed/c1/600/400", angle: -40 },
    { title: "Cloud Infrastructure Management", img: "https://picsum.photos/seed/c2/600/400", angle: -20 },
    { title: "Website Development", img: "https://picsum.photos/seed/c3/600/400", angle: 0 },
    { title: "Mobile Application Development", img: "https://picsum.photos/seed/c4/600/400", angle: 20 },
    { title: "Requirement Analysis and Prototyping", img: "https://picsum.photos/seed/c5/600/400", angle: 40 },
    { title: "Pixelate Render Effect", img: "https://picsum.photos/seed/c6/600/400", angle: 60 },
    { title: "Directional List Hover", img: "https://picsum.photos/seed/c7/600/400", angle: 80 },
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-[#a3ff47] selection:text-[#141414] overflow-x-hidden">
      {/* Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
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
              <button onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 text-white hover:text-[#a3ff47] transition-colors">
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

      {/* Header Container */}
      <div className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl flex flex-col items-center drop-shadow-2xl">
        {/* Navigation */}
        <nav className="bg-[#141414] text-white rounded-t-xl px-6 py-4 flex items-center justify-between w-full border border-white/10 relative z-20">
          <div className="font-bold text-2xl tracking-tighter flex items-center gap-1">
            allsoft.
          </div>
          <button onClick={() => setIsMenuOpen(true)} className="flex items-center gap-2 hover:text-[#a3ff47] transition-colors">
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

      {/* Content */}
      <div className="relative z-10 bg-[#f4f4f0] rounded-b-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] mb-[100vh]">
        <main>
          {/* Hero Section */}
          <section className="relative w-full bg-[#f4f4f0] flex flex-col items-center pt-[32vh] md:pt-[25vh] px-4 overflow-hidden">
            {/* Vertical Line Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gray-300/60 z-0"></div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[14vw] md:text-[9.5vw] leading-[0.9] font-medium tracking-tighter text-[#141414] max-w-[95vw] mx-auto z-30 text-center flex items-center justify-center gap-2 md:gap-5 flex-wrap relative"
            >
              <span>allsoft. Tech</span>
              <span className="text-[#6b46ff] flex items-center justify-center">
              </span>
              <span>Solutions</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-8 md:mt-12 flex flex-wrap justify-center items-center gap-2 md:gap-3 text-base md:text-xl text-[#141414] max-w-3xl mx-auto leading-snug z-30 text-center relative"
            >
              Platform for developing <span className="bg-[#f4f4f0] border border-gray-300 px-3 py-1 rounded-full shadow-sm">Custom App</span> & <span className="bg-[#f4f4f0] border border-gray-300 px-3 py-1 rounded-full shadow-sm">Web</span> resources,
              <span className="bg-[#f4f4f0] border border-gray-300 px-3 py-1 rounded-full shadow-sm">mobile</span>, <span className="bg-[#f4f4f0] border border-gray-300 px-3 py-1 rounded-full shadow-sm">design</span> and many more.
            </motion.div>

            {/* Carousel */}
            <div className="relative z-50 mt-16 md:mt-24 w-full h-[450px] md:h-[550px] pointer-events-none">
              <div className="absolute top-[180px] md:top-[220px] left-1/2 -translate-x-1/2 w-[2000px] h-[2000px] md:w-[3000px] md:h-[3000px]">
                {/* Dashed Circle */}
                <div className="absolute inset-0 rounded-full border border-dashed border-gray-300/80"></div>

                <motion.div style={{ rotate: carouselRotate }} className="absolute inset-0 origin-center">
                  {cards.map((card, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 origin-center"
                      style={{ transform: `rotate(${card.angle}deg)` }}
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] md:w-[340px] bg-[#1a1a1a] rounded-[20px] p-2 pb-5 shadow-2xl border border-white/5 pointer-events-auto hover:scale-105 transition-transform cursor-pointer flex flex-col gap-4">
                        <div className="w-full aspect-[1.4/1] rounded-2xl overflow-hidden bg-gray-800">
                          <img src={card.img} className="w-full h-full object-cover opacity-90" alt={card.title} />
                        </div>
                        <div className="text-white text-[13px] font-medium px-2">{card.title}</div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

          {/* Intro Section */}
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
          {/* Split Section */}
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

          {/* The Platform */}
          <section className="py-32 px-4 text-center max-w-5xl mx-auto">
            <h2 className="text-[10vw] md:text-[8vw] leading-none font-medium tracking-tighter text-[#141414] mb-10">The<br />services</h2>
          </section>

          {/* Toolkit Section */}
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
          {/* Affiliations Section */}
          <section className="py-24 px-4 max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-7xl md:text-5xl font-lg tracking-tighter text-[#141414] mb-4">Affiliations</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <LogoCycle items={[
                <div className="flex flex-col items-center gap-2"><span className="text-2xl font-bold text-orange-500 flex items-center gap-2"><Star size={24} /> FICCI</span><span className="text-xs text-gray-500 uppercase tracking-widest">for Startups</span></div>,
                <div className="flex flex-col items-center gap-2"><span className="text-2xl font-bold text-blue-600 flex items-center gap-2"><Globe size={24} /> NASSCOM</span><span className="text-xs text-gray-500 uppercase tracking-widest">Member</span></div>
              ]} delay={3000} />

              <LogoCycle items={[
                <div className="flex flex-col items-center gap-2"><span className="text-2xl font-bold text-blue-500 italic flex items-center gap-2"><Zap size={24} /> Digital India</span><span className="text-xs text-gray-500 uppercase tracking-widest">Power To Empower</span></div>,
                <div className="flex flex-col items-center gap-2"><span className="text-2xl font-bold text-green-600 italic flex items-center gap-2"><Award size={24} /> Skill India</span><span className="text-xs text-gray-500 uppercase tracking-widest">Kaushal Bharat</span></div>
              ]} delay={4000} />

              <LogoCycle items={[
                <div className="flex flex-col items-center gap-2"><span className="text-3xl font-black tracking-tighter text-gray-800 flex items-center gap-2"><Shield size={28} /> MSME</span><span className="text-xs text-gray-500 uppercase tracking-widest">Govt. of India</span></div>,
                <div className="flex flex-col items-center gap-2"><span className="text-3xl font-black tracking-tighter text-red-600 flex items-center gap-2"><Award size={28} /> ISO</span><span className="text-xs text-gray-500 uppercase tracking-widest">9001:2015 Certified</span></div>
              ]} delay={3500} />

              <LogoCycle items={[
                <div className="flex flex-col items-center gap-2"><span className="text-2xl font-bold text-gray-900 uppercase tracking-widest flex items-center gap-2"><Star size={24} /> Make in India</span></div>,
                <div className="flex flex-col items-center gap-2"><span className="text-2xl font-bold text-indigo-600 uppercase tracking-widest flex items-center gap-2"><Zap size={24} /> Startup India</span></div>
              ]} delay={4500} />

              <LogoCycle items={[
                <div className="flex flex-col items-center gap-2"><span className="text-xl font-serif font-bold text-slate-800 text-center flex items-center gap-2"><Shield size={24} /> Ministry of<br />Corporate Affairs</span></div>,
                <div className="flex flex-col items-center gap-2"><span className="text-xl font-serif font-bold text-teal-700 text-center flex items-center gap-2"><Globe size={24} /> Govt. of<br />Chhattisgarh</span></div>
              ]} delay={3200} />

              <LogoCycle items={[
                <div className="flex flex-col items-center gap-2"><span className="text-2xl font-bold text-orange-500 flex items-center gap-2"><Star size={24} /> #startupindia</span></div>,
                <div className="flex flex-col items-center gap-2"><span className="text-2xl font-bold text-purple-600 flex items-center gap-2"><Zap size={24} /> #innovateindia</span></div>
              ]} delay={3800} />
            </div>
          </section>
        </main>
      </div>

      {/* Parallax Footer */}
      <footer className="fixed bottom-0 left-0 w-full h-[100vh] -z-10 flex flex-col justify-between px-6 md:px-12 pt-20 pb-8 bg-[#f4f4f0]">
        {/* Top Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-8 w-full max-w-7xl mx-auto">
          {/* Col 1 */}
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="text-xs md:text-sm font-mono text-gray-500 mb-1 md:mb-2">( Quick Links )</div>
            <a href="#" className="text-xl md:text-4xl font-medium text-[#141414] hover:text-[#6b46ff] transition-colors">FAQ's</a>
            <a href="#" className="text-xl md:text-4xl font-medium text-[#141414] hover:text-[#6b46ff] transition-colors">Terms & Conditions</a>
            <a href="#" className="text-xl md:text-4xl font-medium text-[#141414] hover:text-[#6b46ff] transition-colors">Privacy Policy</a>
            <a href="#" className="text-xl md:text-4xl font-medium text-[#141414] hover:text-[#6b46ff] transition-colors">Legal Disclaimer</a>
            <a href="#" className="text-xl md:text-4xl font-medium text-[#141414] hover:text-[#6b46ff] transition-colors">Refund Policy</a>
          </div>
          {/* Col 2 */}
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="text-xs md:text-sm font-mono text-gray-500 mb-1 md:mb-2">( Socials )</div>
            <a href="#" className="text-xl md:text-4xl font-medium text-[#141414] hover:text-[#6b46ff] transition-colors">Facebook</a>
            <a href="#" className="text-xl md:text-4xl font-medium text-[#141414] hover:text-[#6b46ff] transition-colors">Twitter</a>
            <a href="#" className="text-xl md:text-4xl font-medium text-[#141414] hover:text-[#6b46ff] transition-colors">LinkedIn</a>
            <a href="#" className="text-xl md:text-4xl font-medium text-[#141414] hover:text-[#6b46ff] transition-colors">Instagram</a>
          </div>
          {/* Col 3 */}
          <div className="flex flex-col gap-4 md:gap-6 col-span-2 md:col-span-1 mt-4 md:mt-0">
            <div className="text-xs md:text-sm font-mono text-gray-500 mb-1 md:mb-2">( Contact )</div>
            <a href="mailto:info@allsoft.co" className="text-xl md:text-4xl font-medium text-[#141414] hover:text-[#6b46ff] transition-colors">info@allsoft.co</a>
            <a href="tel:18008917995" className="text-xl md:text-4xl font-medium text-[#141414] hover:text-[#6b46ff] transition-colors">1800 891 7995</a>
            <a href="tel:+919303852900" className="text-xl md:text-4xl font-medium text-[#141414] hover:text-[#6b46ff] transition-colors">+91 93038 52900</a>
            <p className="text-xs md:text-base text-gray-600 mt-2 md:mt-4 max-w-xs">
              Allsoft Consulting Private Limited,<br />
              Office 408, Fourth Floor, Magneto Offizo,<br />
              G E Road Raipur, Chhattisgarh, INDIA.
            </p>
          </div>
        </div>

        {/* Bottom Huge Text */}
        <div className="w-full mt-auto pt-10 flex flex-col relative">
          <div className="flex justify-between items-end mb-2 px-2">
          </div>
          <h1 className="text-[16vw] font-bold tracking-tighter leading-[0.8] text-[#141414] text-center w-full whitespace-nowrap">
            allsoft<span className="text-[6vw] align-top">®</span>
          </h1>
        </div>
            <div className="text-sm font-medium text-gray-500 text-center">
              © 2025 allsoft®. All rights reserved.
            </div>
      </footer>
    </div>
  );
}
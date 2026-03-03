import React from 'react';
import { motion, MotionValue } from 'motion/react';

interface Card {
  title: string;
  img: string;
  angle: number;
}

interface HeroSectionProps {
  carouselRotate: MotionValue<number>;
  cards: Card[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({ carouselRotate, cards }) => {
  return (
    <section className="relative w-full bg-[#f4f4f0] flex flex-col items-center pt-[32vh] md:pt-[25vh] px-4">
      {/* Vertical Line Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gray-300/60 z-0"></div>

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-[14vw] md:text-[9.5vw] leading-[0.9] font-medium tracking-tighter text-[#141414] max-w-[95vw] mx-auto z-30 text-center flex items-center justify-center gap-2 md:gap-5 flex-wrap relative"
      >
        <span>allsoft. Tech</span>
        <span className="text-[#6b46ff] flex items-center justify-center"></span>
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
  );
};

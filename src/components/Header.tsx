import React, { useEffect, useMemo, useRef, useState } from "react";
import { Menu, Star, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface HeaderProps {
  onMenuClick?: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [hideMarquee, setHideMarquee] = useState(false);
  const [open, setOpen] = useState(false);
  const topbarRef = useRef<HTMLDivElement | null>(null);
const marqueeRef = useRef<HTMLDivElement | null>(null);
  const [closedHeight, setClosedHeight] = useState<number>(0);
  const [windowSize, setWindowSize] = useState({ 
    width: typeof window !== "undefined" ? window.innerWidth : 1024, 
    height: typeof window !== "undefined" ? window.innerHeight : 800 
  });

  // phases: width -> height -> content (and reverse on close)
  const [phase, setPhase] = useState<"closed" | "w" | "wh" | "whc">("closed");
  const timers = useRef<number[]>([]);

  const clearTimers = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };

  useEffect(() => {
    const THRESHOLD = 40;
    const onScroll = () => setHideMarquee(window.scrollY > THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openSequence = () => {
  clearTimers();
  setOpen(true);
  onMenuClick?.(true);
    
  // Step 1: width expand (keep height = closedHeight)
  setPhase("w"); 


  // Step 2: height expand
  timers.current.push(window.setTimeout(() => setPhase("wh"), 450));

  // Step 3: content in
  timers.current.push(window.setTimeout(() => setPhase("whc"), 850));
};

const closeSequence = () => {
  clearTimers();
  onMenuClick?.(false);

  // Step 1: content out
  setPhase("wh");

  // Step 2: height collapse (still full width)
  // (we represent "height collapse" by moving from wh -> w, because "w" uses closedHeight)
  timers.current.push(window.setTimeout(() => setPhase("w"), 350));

  // Step 3: width shrink AFTER height is collapsed
  timers.current.push(
    window.setTimeout(() => {
      setPhase("closed");
      setOpen(false);
    }, 800)
  );
};

  const toggle = () => {
    if (open) closeSequence();
    else openSequence();
  };

  // Lock body scroll only while fully open (optional; feels better)
 

  // Width/height targets based on phase
  const target = useMemo(() => {
    const closedW = Math.min(1024, windowSize.width * 0.5); //  
    const openW = Math.min(1280, windowSize.width - 48); // 2rem = 32px

    const openH = Math.min(windowSize.height * 0.78, 740);
    const closedHpx = closedHeight || 72; // fallback

    if (phase === "closed") return { width: closedW, height: closedHpx };
    if (phase === "w") return { width: openW, height: closedHpx }; // width only (height stays collapsed)
    if (phase === "wh" || phase === "whc") return { width: openW, height: openH };
    return { width: closedW, height: closedHpx };
  }, [phase, closedHeight, windowSize]);

  const showMenuContent = phase === "whc";
  const showMarquee = !open; // marquee only when closed (OSMO-style)
  useEffect(() => {
  const measure = () => {
    const top = topbarRef.current?.getBoundingClientRect().height ?? 0;

    // marquee counts only when actually visible (same as your earlier logic)
    const marqueeIsVisible = showMarquee && !hideMarquee;
    const marq = marqueeIsVisible
      ? marqueeRef.current?.getBoundingClientRect().height ?? 0
      : 0;

    setClosedHeight(Math.ceil(top + marq));
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };

  // measure now + on resize
  measure();
  window.addEventListener("resize", measure);
  return () => window.removeEventListener("resize", measure);
}, [hideMarquee, showMarquee]);

  return (
    <div className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50">
      {/* ONE container only */}
      <motion.div
        layout
        initial={false}
        animate={target}
        transition={{
          width: { duration: 1, ease: [0.22, 1, 0.36, 1] },
          height: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        }}
        className={[
          " text-white border border-white/10 overflow-hidden drop-shadow-2xl",
          open ? "rounded-2xl bg-[#141414] " : hideMarquee ? "rounded-xl" : "rounded-t-xl",
        ].join(" ")}
        style={{ willChange: "width,height" }}
      >
        {/* TOP BAR (always same) */}
        <div ref={topbarRef} className="px-6 py-4 flex items-center justify-between bg-[#141414] ">
          <div className="font-bold text-2xl tracking-tighter">allsoft.</div>

          <button
            onClick={toggle}
            className="flex items-center gap-2 hover:text-[#a3ff47] transition-colors"
          >
            <span className="text-sm font-medium uppercase tracking-wider">
              {open ? "Close" : "Menu"}
            </span>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Marquee (only when closed, hides on scroll) */}
        <AnimatePresence initial={false}>
          {showMarquee && !hideMarquee && (
            <motion.div
              
              className="w-full overflow-hidden bg-[#a3ff47] text-[#141414] text-[10px] font-mono uppercase tracking-widest flex whitespace-nowrap border-t rounded-b-2xl"
            >
              <div ref={marqueeRef} className="py-2 w-full">
                <div className="animate-marquee flex gap-8">
                  {[...Array(10)].map((_, i) => (
                    <span key={i} className="flex items-center gap-8">
                      <span>Website Development</span>
                      <Star size={10} />
                      <span>Mobile App Development</span>
                      <Star size={10} />
                      <span>Requirement Analysis and Prototyping</span>
                      <Star size={10} />
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Divider only in open state after height expands */}
        <AnimatePresence initial={false}>
          {(phase === "wh" || phase === "whc") && (
            <motion.div
              key="divider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="h-[1px] bg-white/10"
            />
          )}
        </AnimatePresence>

        {/* MENU CONTENT (ONLY after width+height are expanded) */}
        <AnimatePresence initial={false}>
          {showMenuContent && (
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 14 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="px-6 py-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                  <p className="text-white/60 text-xs uppercase tracking-widest mb-4">
                    Our Products
                  </p>
                  <ul className="space-y-4 text-lg">
                    <li className="hover:text-[#a3ff47] cursor-pointer">The Vault</li>
                    <li className="hover:text-[#a3ff47] cursor-pointer flex items-center gap-2">
                      Page Transition Course{" "}
                      <span className="text-xs bg-white/10 px-2 py-1 rounded-full">NEW</span>
                    </li>
                    <li className="hover:text-[#a3ff47] cursor-pointer">Icon Library</li>
                    <li className="hover:text-[#a3ff47] cursor-pointer">Community</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                  <p className="text-white/60 text-xs uppercase tracking-widest mb-4">
                    Explore
                  </p>
                  <ul className="space-y-4 text-lg">
                    <li className="hover:text-[#a3ff47] cursor-pointer">Showcase</li>
                    <li className="hover:text-[#a3ff47] cursor-pointer">
                      Collection <span className="text-white/40 text-sm">158</span>
                    </li>
                    <li className="hover:text-[#a3ff47] cursor-pointer">Pricing</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-white/60 text-xs uppercase tracking-widest mb-3">
                      Featured
                    </p>
                    <h3 className="text-3xl leading-tight">
                      Page Transition
                      <br />
                      Course
                    </h3>
                    <button className="mt-6 px-5 py-3 rounded-xl bg-white text-[#141414] font-medium hover:opacity-90">
                      More info
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
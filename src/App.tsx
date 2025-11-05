import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Wheel from "./components/Wheel";
import Slide from "./components/Slide";
import { items, type ItemKey } from "./data/content";

export default function App() {
  const [active, setActive] = useState<ItemKey | null>(null);
  const [aiBoost, setAiBoost] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // draw very subtle starfield once
  useEffect(() => {
    const c = canvasRef.current!;
    const ctx = c.getContext("2d")!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      const rect = c.getBoundingClientRect();
      c.width = rect.width * dpr;
      c.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    };
    const draw = () => {
      const rect = c.getBoundingClientRect();
      ctx.clearRect(0,0,rect.width,rect.height);
      const count = Math.floor((rect.width*rect.height)/9000);
      for (let i=0;i<count;i++){
        const x = Math.random()*rect.width;
        const y = Math.random()*rect.height;
        const r = Math.random()*1.2 + 0.3;
        const alpha = Math.random()*0.35 + 0.15;
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.beginPath();
        ctx.arc(x,y,r,0,Math.PI*2);
        ctx.fill();
      }
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // ESC to close slide
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { 
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleSelect = (key: ItemKey) => {
    // Check if this is AI Companion (no content page)
    if (key === 'aicompanion') {
      // Toggle AI boost effect on/off
      setAiBoost(prev => !prev);
    } else if (items[key as keyof typeof items]) {
      // Only open slide if content exists
      setActive(key);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-base">
      <div className="bg-aurora"><div className="drift"></div></div>
      <canvas ref={canvasRef} className="canvas-stars w-full h-full"></canvas>

      {/* AI Boost Glow Effect */}
      {aiBoost && (
        <div className="absolute inset-0 pointer-events-none z-[5]">
          <div className="ai-boost-glow"></div>
        </div>
      )}

      {/* HUB */}
      <AnimatePresence initial={false} mode="sync">
        {!active && (
          <motion.div
            key="hub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative z-10"
          >
            <Wheel onSelect={handleSelect} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* SLIDE VIEW */}
      <AnimatePresence initial={false} mode="wait">
        {active && (
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 z-20"
          >
            <Slide
              itemKey={active}
              data={items[active]}
              index={Object.keys(items).indexOf(active)}
              onClose={()=>setActive(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

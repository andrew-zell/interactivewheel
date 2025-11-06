import { motion } from "framer-motion";
import type { ItemData } from "../data/content";

export default function Slide({
  itemKey, data, index, onClose
}: {
  itemKey: string; data: ItemData; index: number; onClose: ()=>void;
}) {
  const detailsLeft = index % 2 === 0;
  
  return (
    <div className="absolute inset-0 flex items-center justify-center px-4 py-8">
      <motion.div
        initial={{ y: 18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 18, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className={[
          "relative w-full max-w-6xl rounded-2xl",
          "bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl",
          "overflow-hidden",
        ].join(" ")}
      >
        {/* Close Button */}
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 h-10 w-10 rounded-lg bg-white/10 hover:bg-white/15 transition flex items-center justify-center"
        >
          <span className="text-xl leading-none">×</span>
        </button>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Text Content */}
          <div className={`p-8 md:p-10 flex flex-col justify-center ${detailsLeft ? "md:order-1" : "md:order-2"}`}>
            <div className="space-y-4">
              <h1 className="font-display text-4xl font-semibold tracking-tight">
                {data.title}
              </h1>
              
              <p className="text-slate-300 text-lg">
                {data.subtitle}
              </p>
              
              <ul className="space-y-3 pt-2">
                {data.points.map((p, i) => (
                  <li key={i} className="flex items-start text-slate-200">
                    <span className="text-blue-400 mr-3 mt-1 flex-shrink-0">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image */}
          <div className={`p-8 md:p-10 bg-white/5 flex items-center justify-center ${detailsLeft ? "md:order-2" : "md:order-1"}`}>
            {data.image ? (
              <img 
                src={data.image} 
                alt={data.title}
                className="aspect-[4/3] w-full max-w-md rounded-xl object-cover"
              />
            ) : (
              <div className="aspect-[4/3] w-full max-w-md bg-white/10 rounded-xl border border-white/10 flex items-center justify-center">
                <span className="text-slate-400 text-sm">Image Placeholder</span>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

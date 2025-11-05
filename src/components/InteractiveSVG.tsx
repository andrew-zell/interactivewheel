import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import type { ItemKey } from "../data/content";

interface InteractiveSVGProps {
  onSelect: (key: ItemKey) => void;
}

export default function InteractiveSVG({ onSelect }: InteractiveSVGProps) {
  const [svgContent, setSvgContent] = useState<string>("");
  const svgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the SVG file
    fetch('/product-wheel.svg')
      .then(res => res.text())
      .then(svg => setSvgContent(svg))
      .catch(err => console.error('Error loading SVG:', err));
  }, []);

  useEffect(() => {
    if (!svgRef.current || !svgContent) return;

    // Find all groups with IDs starting with "hotspot-"
    const hotspotGroups = svgRef.current.querySelectorAll('[id^="hotspot-"]');

    hotspotGroups.forEach((group) => {
      const id = group.getAttribute('id');
      if (!id) return;

      // Extract key from id (e.g., "hotspot-meetings" -> "meetings")
      const key = id.replace('hotspot-', '') as ItemKey;

      // Make the group interactive with padding
      const svgGroup = group as SVGGElement;
      svgGroup.style.cursor = 'pointer';
      svgGroup.style.transition = 'opacity 0.15s ease-out, filter 0.15s ease-out, transform 0.15s ease-out';
      
      // Add invisible padding by setting a larger pointer area
      const bbox = svgGroup.getBBox();
      const padding = 10; // pixels of padding
      
      // Set transform origin to center for smooth scaling
      const centerX = bbox.x + bbox.width / 2;
      const centerY = bbox.y + bbox.height / 2;
      svgGroup.style.transformOrigin = `${centerX}px ${centerY}px`;
      
      // Create an invisible rect for better hit detection (covers content + padding)
      const paddingRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      paddingRect.setAttribute('x', String(bbox.x - padding));
      paddingRect.setAttribute('y', String(bbox.y - padding));
      paddingRect.setAttribute('width', String(bbox.width + padding * 2));
      paddingRect.setAttribute('height', String(bbox.height + padding * 2));
      paddingRect.setAttribute('fill', 'transparent');
      paddingRect.setAttribute('pointer-events', 'all');
      paddingRect.style.cursor = 'pointer';
      
      // Insert padding rect as first child so it's behind everything but captures all events
      svgGroup.insertBefore(paddingRect, svgGroup.firstChild);
      
      // Make all OTHER children (except padding rect) non-interactive so padding rect receives all events
      Array.from(svgGroup.children).forEach(child => {
        if (child !== paddingRect) {
          (child as SVGElement).style.pointerEvents = 'none';
        }
      });

      const handleMouseEnter = () => {
        svgGroup.style.opacity = '0.7';
        svgGroup.style.transform = 'scale(1.02)';
        svgGroup.style.filter = 'drop-shadow(0 0 8px rgba(129, 140, 248, 0.4))';
      };

      const handleMouseLeave = () => {
        svgGroup.style.opacity = '1';
        svgGroup.style.transform = 'scale(1)';
        svgGroup.style.filter = 'none';
      };

      const handleClick = () => {
        // Brief pulse effect on click
        svgGroup.style.opacity = '0.6';
        setTimeout(() => {
          svgGroup.style.opacity = '1';
        }, 100);
        onSelect(key);
      };

      // Add event listeners only to padding rect (since children are pointer-events: none)
      paddingRect.addEventListener('mouseenter', handleMouseEnter);
      paddingRect.addEventListener('mouseleave', handleMouseLeave);
      paddingRect.addEventListener('click', handleClick);

      // Cleanup
      return () => {
        paddingRect.removeEventListener('mouseenter', handleMouseEnter);
        paddingRect.removeEventListener('mouseleave', handleMouseLeave);
        paddingRect.removeEventListener('click', handleClick);
      };
    });
  }, [svgContent, onSelect]);

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="mx-auto max-w-[95vw] px-4"
      >
        <div
          ref={svgRef}
          className="w-full rounded-xl"
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      </motion.div>
    </div>
  );
}


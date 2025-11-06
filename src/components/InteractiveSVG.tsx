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

    const hotspotGroups = svgRef.current.querySelectorAll('[id^="hotspot-"]');
    const cleanups: Array<() => void> = [];

    hotspotGroups.forEach((group) => {
      const id = group.getAttribute('id');
      if (!id) return;

      const key = id.replace('hotspot-', '') as ItemKey;
      const svgGroup = group as SVGGElement;

      const previousCursor = svgGroup.style.cursor;
      const previousTransition = svgGroup.style.transition;
      const previousTransformOrigin = svgGroup.style.transformOrigin;

      svgGroup.style.cursor = 'pointer';
      svgGroup.style.transition = 'opacity 0.15s ease-out, filter 0.15s ease-out, transform 0.15s ease-out';

      const bbox = svgGroup.getBBox();
      const padding = 10;
      const centerX = bbox.x + bbox.width / 2;
      const centerY = bbox.y + bbox.height / 2;
      svgGroup.style.transformOrigin = `${centerX}px ${centerY}px`;

      const paddingRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      paddingRect.setAttribute('x', String(bbox.x - padding));
      paddingRect.setAttribute('y', String(bbox.y - padding));
      paddingRect.setAttribute('width', String(bbox.width + padding * 2));
      paddingRect.setAttribute('height', String(bbox.height + padding * 2));
      paddingRect.setAttribute('fill', 'transparent');
      paddingRect.setAttribute('pointer-events', 'all');
      paddingRect.style.cursor = 'pointer';

      svgGroup.insertBefore(paddingRect, svgGroup.firstChild);

      const pointerResets = new Map<Element, string>();
      Array.from(svgGroup.children).forEach(child => {
        if (child !== paddingRect) {
          const element = child as SVGElement;
          pointerResets.set(element, element.style.pointerEvents);
          element.style.pointerEvents = 'none';
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
        svgGroup.style.opacity = '0.6';
        setTimeout(() => {
          svgGroup.style.opacity = '1';
        }, 100);
        onSelect(key);
      };

      paddingRect.addEventListener('mouseenter', handleMouseEnter);
      paddingRect.addEventListener('mouseleave', handleMouseLeave);
      paddingRect.addEventListener('click', handleClick);

      cleanups.push(() => {
        paddingRect.removeEventListener('mouseenter', handleMouseEnter);
        paddingRect.removeEventListener('mouseleave', handleMouseLeave);
        paddingRect.removeEventListener('click', handleClick);

        pointerResets.forEach((value, element) => {
          element.style.pointerEvents = value;
        });

        svgGroup.style.cursor = previousCursor;
        svgGroup.style.transition = previousTransition;
        svgGroup.style.transformOrigin = previousTransformOrigin;
        svgGroup.style.opacity = '';
        svgGroup.style.transform = '';
        svgGroup.style.filter = '';

        if (paddingRect.parentNode === svgGroup) {
          svgGroup.removeChild(paddingRect);
        }
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
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


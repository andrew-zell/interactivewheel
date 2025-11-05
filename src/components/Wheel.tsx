import type { ItemKey } from "../data/hotspots";
import InteractiveSVG from "./InteractiveSVG";

export default function Wheel({ onSelect }: { onSelect: (k: ItemKey)=>void }) {
  return <InteractiveSVG onSelect={onSelect} />;
}

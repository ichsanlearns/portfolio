import { useEffect, useRef } from "react";

// @ts-ignore
function GlowCard({ card, children }) {
  return (
    <div className="card timeline-card border border-black-50 bg-black-100 rounded-xl p-10 mb-2">
      <div className="glow" />
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img src="/images/star.png" key={i} alt="star" className="size-5" />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>
      {children}
    </div>
  );
}

export default GlowCard;

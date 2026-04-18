const text = "WEB DEVELOPMENT · MOBILE APPS · API ENGINEERING · AUTOMATION · CLOUD SOLUTIONS · TECHNICAL CONSULTING · ";

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/8 bg-[#111] py-4">
      <div className="marquee-inner">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="font-mono text-sm tracking-widest text-white/60 whitespace-nowrap pr-0"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

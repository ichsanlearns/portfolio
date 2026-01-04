import { useEffect, useRef } from "react";
import gsap from "gsap";
import { counterItems } from "../constants";

function AnimatedCounter() {
  const counterRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    counterRefs.current.forEach((el, index) => {
      if (!el) return;

      const { value, suffix } = counterItems[index];

      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: value, // ← comes from item.value
          duration: 2,
          ease: "power2.out",
          snap: { innerText: 1 },
          onUpdate() {
            el.innerText = `${Math.floor(Number(el.innerText))} ${suffix}`;
          },
        }
      );
    });
  }, []);

  return (
    <section id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={item.label}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div
              ref={(el) => {
                if (el) counterRefs.current[index] = el;
              }}
              className="text-white text-5xl font-bold mb-2"
            ></div>

            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AnimatedCounter;
